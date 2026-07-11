"use client";

import { crreateApartment } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export default function AparmentForm() {
  return (
    <form
      action={async (formData) => {
        await crreateApartment(formData);
      }}
      className="
        bg-primary-900
        rounded-xl
        p-5
        sm:p-8
        lg:p-10
        shadow-xl
        space-y-8
      "
    >
      {/* Apartment Name */}

      <div className="grid gap-2">
        <label htmlFor="name" className="font-medium text-primary-100">
          Apartment name
        </label>

        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Apartment name"
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            outline-none
            transition-all
            focus:ring-2
            focus:ring-accent-500
          "
        />
      </div>

      {/* Capacity & Price */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid gap-2">
          <label htmlFor="maxCapacity" className="font-medium text-primary-100">
            Maximum capacity
          </label>

          <input
            type="number"
            id="maxCapacity"
            name="maxCapacity"
            required
            placeholder="Guests"
            className="
              w-full
              rounded-lg
              bg-primary-200
              px-4
              py-3
              text-primary-900
              outline-none
              focus:ring-2
              focus:ring-accent-500
            "
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="regularPrice"
            className="font-medium text-primary-100"
          >
            Price per night
          </label>

          <input
            type="number"
            id="regularPrice"
            name="regularPrice"
            required
            placeholder="$"
            className="
              w-full
              rounded-lg
              bg-primary-200
              px-4
              py-3
              text-primary-900
              outline-none
              focus:ring-2
              focus:ring-accent-500
            "
          />
        </div>
      </div>

      {/* Discount */}

      <div className="grid gap-2">
        <label htmlFor="discount" className="font-medium text-primary-100">
          Discount
        </label>

        <input
          type="number"
          id="discount"
          name="discount"
          placeholder="0"
          required
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            outline-none
            focus:ring-2
            focus:ring-accent-500
          "
        />
      </div>

      {/* Description */}

      <div className="grid gap-2">
        <label htmlFor="discription" className="font-medium text-primary-100">
          Description
        </label>

        <textarea
          id="discription"
          name="discription"
          rows={5}
          required
          placeholder="Describe the apartment..."
          className="
            w-full
            rounded-lg
            bg-primary-200
            px-4
            py-3
            text-primary-900
            outline-none
            resize-none
            focus:ring-2
            focus:ring-accent-500
          "
        />
      </div>

      {/* Image */}

      <div className="grid gap-2">
        <label htmlFor="image" className="font-medium text-primary-100">
          Apartment image
        </label>

        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          required
          className="
            block
            w-full
            rounded-lg
            border
            border-primary-700
            bg-primary-950
            px-3
            py-3
            text-primary-100
            file:mr-4
            file:rounded-md
            file:border-0
            file:bg-accent-500
            file:px-4
            file:py-2
            file:font-semibold
            file:text-primary-900
            hover:file:bg-accent-600
          "
        />
      </div>

      {/* Button */}

      <div className="flex justify-end pt-4">
        <SubmitButton pendingLabel="Creating apartment...">
          Create Apartment
        </SubmitButton>
      </div>
    </form>
  );
}
