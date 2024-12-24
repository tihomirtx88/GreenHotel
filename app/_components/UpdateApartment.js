"use client";

import { updateUser } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export default function  UpdateApartment({currentApartment, apartmentId}) {
    const { fullName, email, id, nationalID, nationality, countryFlag, admin } = currentApartment;
    console.log(currentApartment);
    
    return(
        <form
         action={async (formData) => {
                 await updateUser(userId, formData);
               }}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        {/* to pass boookingId to action easy way */}
        <input type="hidden" value={userId} name="userId" />

        <div className="space-y-2">
          <label htmlFor="fullName">Full Name</label>
          <input
            defaultValue={fullName}
            name="fullName"
            id="fullName"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter full name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            defaultValue={email}
            id="email"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter email"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID</label>
          <input
            name="nationalID"
            id="nationalID"
            defaultValue={nationalID}
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter National ID"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationality">Nationality</label>
          <input
            name="nationality"
            id="nationality"
            defaultValue={nationality}
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter nationality"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="countryFlag">Country Flag URL</label>
          <input
            name="countryFlag"
            id="countryFlag"
            defaultValue={countryFlag}
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter URL for country flag"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="admin">Admin Status</label>
          <select
            name="admin"
            id="admin"
            required
            defaultValue={admin}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          >
            <option value="" key="">
              Select Admin Status...
            </option>
            <option value="true">Admin</option>
            <option value="false">User</option>
          </select>
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update User
          </SubmitButton>
        </div>
      </form>
    );
}