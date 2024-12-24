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
    <button onClick={handleDelete} className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'>
     {!isPending ? <><TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
      <span className='mt-1'>Delete</span></> : <span className='mx-auto'><SpinnerMini/></span>}
    </button>
  );
}