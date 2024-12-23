"use server"

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { redirect } from "next/navigation";
import { createBooking, createCabin, createGuest, deleteBooking, deleteGuest, getBookings, updateBooking, updateGuest } from "./data-service";

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

export async function crreateApartment(formData) {
    const session = await auth();
    if(!session) throw new Error("You must to logged in!");

    const newApartment = {
        name: formData.get('name'),
        maxCapacity: Number(formData.get('maxCapacity')),
        regularPrice: Number(formData.get('regularPrice')),
        discount: Number(formData.get('discount')),
        discription: formData.get('discription'), 
        image: formData.get('image')
    };

    await createCabin(newApartment);
    revalidatePath(`/apartments`);
    redirect('/thankyou');
}

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
        numNight: reservationData.numNight,
        status: 'unconfirmed'
    };

    await createBooking(newBooking);
    revalidatePath(`/apartments/${reservationData.bookingId}`);
    redirect('/thankyou');
};

export async function createUser(formData){
    const session = await auth();
    if(!session) throw new Error("You must to logged in!");

    const newUser = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        nationalID: formData.get('nationalID'),
        nationality: formData.get('nationality'),
        countryFlag: formData.get('countryFlag'), 
        admin: formData.get('admin')
    };

    await createGuest(newUser);
    revalidatePath('users');
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

export async function deleteUser(userId){
    const session = await auth();
    if(!session) throw new Error("You must to logged in!");

    await deleteGuest(userId);
    console.log('successssssssss');
    
    revalidatePath("/users");
}