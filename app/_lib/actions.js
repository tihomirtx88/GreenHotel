"use server"

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { redirect } from "next/navigation";
import { createBooking, deleteBooking, getBookings, updateBooking, updateGuest } from "./data-service";

export async function updateProfile(formData) {
    // Authentication
    const session = await auth();
    if(!session) throw new Error("You must to be logged!");
    
    //Authorization
    const nationalID = formData.get('nationalID');
    const [nationality, countryFlag ] = formData.get('nationality').split('%');

    if(!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) throw new Error('Please provide a valid national ID');

    const updateData = { nationality, nationalID, countryFlag};

    await updateGuest(session?.user?.guestId, updateData);

    revalidatePath("/account/profile");
    
}

export async function updateReservation(formData){
    const session = await auth();
    if(!session) throw new Error("You must to logged in!");

    const bookingId = Number(formData.get('bookingId'));

    const guestBookings = await getBookings(session?.user?.guestId);
  
    const guestBookingsId = guestBookings.map((booking) => booking.id);

    if(!guestBookingsId.includes(bookingId)) throw new Error("You are not allowed to delete this reservation");

    const updateData = {
        numGuests: Number(formData.get('numGuests')),
        observation: formData.get('observation').slice(0, 1000)
    };

    await updateBooking(bookingId, updateData);

    revalidatePath('/account/reservations');
    revalidatePath(`/account/reservations/edit/${bookingId}`);

    redirect('/account/reservations');
};

export async function createReservation(reservationData, formData){
    const session = await auth();
    if(!session) throw new Error("You must to logged in!");

    const newBooking = {
        ...reservationData,
        guestId: session?.user?.guestId,
        numGuests: Number(formData.get('numGuests')),
        observation: formData.get('observation').slice(0, 1000),
        extrasPrice: 0,
        totalPrice: reservationData.cabinPrice,
        isPaid: reservationData.isPaid, 
        hasBreakfast: reservationData.hasBreakfast,
        numNight: 1,
        status: 'unconfirmed'
    };

    await createBooking(newBooking);
    revalidatePath(`/apartments/${reservationData.bookingId}`);
    redirect('/thankyou');
};

export async function signInAction(){
    await signIn('google', {
        redirectTo: "/account"
    });
}

export async function signOutAction(){
    await signOut({
        redirect: "/"
    });
}

export async function deleteReservation(bookingId) {
    const session = await auth();
    if(!session) throw new Error("You must to logged in!");

    const guestBookings = await getBookings(session?.user?.guestId);
    // get all id from bookings
    const guestBookingsId = guestBookings.map((booking) => booking.id);

    if(!guestBookingsId.includes(bookingId)) throw new Error("You are not allowed to delete this reservation");

    await deleteBooking(bookingId);
    revalidatePath("/account/reservations");
}