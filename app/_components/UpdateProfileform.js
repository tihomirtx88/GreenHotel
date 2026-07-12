"use client";

import { updateProfile } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export default function UpdateProfileForm({ quest, children }) {
  const { countryFlag, email, fullName, nationalID, nationality, id } = quest;

  return (
   <form
      action={updateProfile}
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
      {/* Full name */}

      <div className="space-y-2">
        <label className="font-medium">
          Full name
        </label>

        <input
          name="fullName"
          defaultValue={fullName}
          disabled
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            shadow-sm

            disabled:bg-primary-700
            disabled:text-primary-300
            disabled:cursor-not-allowed
          "
        />
      </div>

      {/* Email */}

      <div className="space-y-2">
        <label className="font-medium">
          Email address
        </label>

        <input
          name="email"
          defaultValue={email}
          disabled
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            shadow-sm

            disabled:bg-primary-700
            disabled:text-primary-300
            disabled:cursor-not-allowed
          "
        />
      </div>

      {/* Country */}

      <div className="space-y-3">
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-2
          "
        >
          <label
            htmlFor="nationality"
            className="font-medium"
          >
            Where are you from?
          </label>

          {/* {countryFlag && (
            <img
              id="country-flag-preview"
              src={countryFlag}
              alt="Country flag"
              className="
                h-6
                w-auto
                rounded
                border
                border-primary-700
              "
            />
          )} */}
        </div>

        {children}
      </div>

      {/* National ID */}

      <div className="space-y-2">
        <label
          htmlFor="nationalID"
          className="font-medium"
        >
          National ID
        </label>

        <input
          id="nationalID"
          name="nationalID"
          defaultValue={nationalID}
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

      {/* Submit */}

      <div
        className="
          flex
          justify-end
          pt-4
        "
      >
        <SubmitButton pendingLabel="Updating profile...">
          Update Profile
        </SubmitButton>
      </div>
    </form>
  );
}


