"use server"

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth"
import { updateGuest } from "./data-service";

export async function updateProfile(formData) {
    const session = await auth();
    if(!session) throw new Error("You must to be logged!");

    const nationalID = formData.get('nationalID');
    const [nationality, countryFlag ] = formData.get('nationality').split('%');

    if(!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) throw new Error('Please provide a valid national ID');

    const updateData = { nationality, nationalID, countryFlag};

    await updateGuest(session?.user?.guestId, updateData);

    revalidatePath("/account/profile");
    
}

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