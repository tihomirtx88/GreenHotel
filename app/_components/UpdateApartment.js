"use client";

import { updateApartment } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export default function  UpdateApartment({currentApartment, apartmentId}) {
    const { maxCapacity, name, regularPrice, discount, discription, image } = currentApartment;
    
    return(
     <form
        action={async (formData) => {
          await updateApartment(apartmentId, formData);
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            id="name"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter name"
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="maxCapacity">Max capacity</label>
          <input
            type="number"
            defaultValue={maxCapacity}
            name="maxCapacity"
            id="maxCapacity"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter capacity"
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="regularPrice">Regular price</label>
          <input
            type="number"
            defaultValue={regularPrice}
            name="regularPrice"
            id="regularPrice"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter price"
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            defaultValue={discount}
            name="discount"
            id="discount"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter discount"
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="discription">Description</label>
          <input
            type="text"
            defaultValue={discription}
            name="discription"
            id="discription"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Enter description"
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Upload image here"
          />
        </div>
  
        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating apartment...">
            Update Current Apartment Now
          </SubmitButton>
        </div>
      </form>
    );
}