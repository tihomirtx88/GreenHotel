"use client";

import { createUser } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export default function UserForm() {

  return (
    <div className="scale-[1.01]">
     

      {/* <form action={createBookingWithData}  */}
      <form
        action={async (formData) => {
          await createUser(formData);
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >

        <div className="space-y-2">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
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
            type="email"
            name="email"
            id="email"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter email"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID</label>
          <input
            type="text"
            name="nationalID"
            id="nationalID"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter National ID"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationality">Nationality</label>
          <input
            type="text"
            name="nationality"
            id="nationality"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter nationality"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="countryFlag">Country Flag URL</label>
          <input
            type="url"
            name="countryFlag"
            id="countryFlag"
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
          <SubmitButton pendingLabel="Creating user...">Create User Now</SubmitButton>
        </div>
      </form>
    </div>
  );
}
