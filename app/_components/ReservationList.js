"use client";
import { useOptimistic } from "react";

import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

export default function ReservationList({ bookings }) {
  
  
  const [ optimisticBookigns, optimisticDelete] = useOptimistic(
    // Current state
    bookings, 
    // Feature state function
    (currBookings, bookingId) => {
    return currBookings.filter( booking => booking.id !== bookingId);
  });

  async function handleDelete(bookingId){
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
    
  };

  return (
    <ul className="space-y-6">
      {optimisticBookigns.map((booking) => (
        <ReservationCard booking={booking} key={booking.id} onDelete={handleDelete}/>
      ))}
    </ul>
  );
}
