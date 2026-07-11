"use client";

const { TrashIcon } = require("@heroicons/react/24/solid");
const { useTransition } = require("react");
const { default: SpinnerMini } = require("./SpinnerMini");

export default function DeleteCabin({ apartmentId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this apartment"))
      startTransition(() =>
        // apartmentId(bookingId));
        onDelete(apartmentId)
      );
  }
  
  return (
    <button onClick={handleDelete} className=' flex
        items-center
        justify-center
        gap-2
        py-4
        px-6
        w-full
        transition-all
        duration-300
        hover:bg-red-600
        hover:text-white
        border-y
        sm:border-y-0
        sm:border-r
        border-primary-800
        disabled:cursor-not-allowed
        disabled:opacity-60'>
     {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5" />
          <span>Delete</span>
        </>
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}