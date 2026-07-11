"use client"

import { TrashIcon } from '@heroicons/react/24/solid';
// import { deleteReservation } from '../_lib/actions';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

function DeleteReservation({ bookingId, onDelete }) {

  const [ isPending, startTransition ] = useTransition();

  function handleDelete(){
    if(confirm("Are you sure you want to delete this reservation"))
     startTransition(() => 
      // deleteReservation(bookingId));
    onDelete(bookingId));
  }
  
  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="
        group
        flex
        items-center
        justify-center
        gap-2
        w-full
        sm:w-auto
        px-4
        py-3
        rounded-lg
        border
        border-primary-800
        text-sm
        font-semibold
        uppercase
        tracking-wide
        text-primary-300
        transition-all
        duration-300
        hover:bg-red-600
        hover:text-white
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 transition-colors" />
          <span>Delete</span>
        </>
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default DeleteReservation;
