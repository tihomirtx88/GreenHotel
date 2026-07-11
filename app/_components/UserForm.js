"use client";

import { createUser } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export default function UserForm() {

  return (
     <form
      action={async (formData) => {
        await createUser(formData);
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
      {/* Full Name */}

      <div className="space-y-2">
        <label htmlFor="fullName" className="font-medium">
          Full Name
        </label>

        <input
          id="fullName"
          name="fullName"
          type="text"
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
          type="text"
          required
          placeholder="Enter national ID"
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
          type="text"
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
          type="url"
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
      </div>

      {/* Admin */}

      <div className="space-y-2">
        <label htmlFor="admin" className="font-medium">
          User Role
        </label>

        <select
          id="admin"
          name="admin"
          required
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
          <option value="">
            Select role...
          </option>

          <option value="true">
            Administrator
          </option>

          <option value="false">
            Regular User
          </option>
        </select>
      </div>

      {/* Submit */}

      <div className="flex justify-end pt-4">
        <SubmitButton pendingLabel="Creating user...">
          Create User
        </SubmitButton>
      </div>
    </form>
  );
}
