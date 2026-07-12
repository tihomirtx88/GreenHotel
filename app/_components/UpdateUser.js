"use client";

import { updateUser } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export default function  UpdateUser({currentUser, userId}) {
    const { fullName, email, id, nationalID, nationality, countryFlag, admin } = currentUser;

    
    return(
          <form
      action={async (formData) => {
        await updateUser(userId, formData);
      }}
      className="
        bg-primary-900
        rounded-xl
        shadow-lg

        p-5
        sm:p-8
        lg:p-10

        flex
        flex-col
        gap-6
      "
    >
      <input type="hidden" value={userId} name="userId" />

      {/* Full Name */}

      <div className="space-y-2">
        <label htmlFor="fullName" className="font-medium">
          Full Name
        </label>

        <input
          id="fullName"
          name="fullName"
          defaultValue={fullName}
          required
          placeholder="Enter full name"
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            shadow-sm

            outline-none
            transition

            focus:ring-2
            focus:ring-accent-500
          "
        />
      </div>

      {/* Email */}

      <div className="space-y-2">
        <label htmlFor="email" className="font-medium">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          defaultValue={email}
          required
          placeholder="Enter email"
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            shadow-sm

            outline-none
            transition

            focus:ring-2
            focus:ring-accent-500
          "
        />
      </div>

      {/* National ID */}

      <div className="space-y-2">
        <label htmlFor="nationalID" className="font-medium">
          National ID
        </label>

        <input
          id="nationalID"
          name="nationalID"
          defaultValue={nationalID}
          required
          placeholder="Enter National ID"
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            shadow-sm

            outline-none
            transition

            focus:ring-2
            focus:ring-accent-500
          "
        />
      </div>

      {/* Nationality */}

      <div className="space-y-2">
        <label htmlFor="nationality" className="font-medium">
          Nationality
        </label>

        <input
          id="nationality"
          name="nationality"
          defaultValue={nationality}
          required
          placeholder="Enter nationality"
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            shadow-sm

            outline-none
            transition

            focus:ring-2
            focus:ring-accent-500
          "
        />
      </div>

      {/* Country Flag */}

      <div className="space-y-2">
        <label htmlFor="countryFlag" className="font-medium">
          Country Flag URL
        </label>

        <input
          id="countryFlag"
          name="countryFlag"
          defaultValue={countryFlag}
          required
          placeholder="https://..."
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            shadow-sm

            outline-none
            transition

            focus:ring-2
            focus:ring-accent-500
          "
        />

        {countryFlag && (
          <div className="pt-2">
            <img
              src={countryFlag}
              alt="Country Flag"
              className="
                h-8
                w-auto
                rounded
                border
                border-primary-700
              "
            />
          </div>
        )}
      </div>

      {/* Admin */}

      <div className="space-y-2">
        <label htmlFor="admin" className="font-medium">
          User Role
        </label>

        <select
          id="admin"
          name="admin"
          defaultValue={String(admin)}
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            shadow-sm

            outline-none
            transition

            focus:ring-2
            focus:ring-accent-500
          "
        >
          <option value="">Select role...</option>
          <option value="true">Administrator</option>
          <option value="false">Regular User</option>
        </select>
      </div>

      {/* Submit */}

      <div className="flex justify-end pt-4">
        <SubmitButton pendingLabel="Updating user...">
          Update User
        </SubmitButton>
      </div>
    </form>
    );
}