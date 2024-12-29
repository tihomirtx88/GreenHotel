"use client";

import { unstable_noStore } from "next/cache";

import { useEffect, useState, useCallback } from "react";
import { getCabins } from "../_lib/data-service";
import ApartmentCard from "./ApartmentCard";
import { deleteApartment } from "../_lib/actions";

export default function ApartmentsList({ filter }) {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch apartments on mount
  useEffect(() => {
    async function fetchApartments() {
      try {
        const fetchedApartments = await getCabins();
        setApartments(fetchedApartments);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchApartments();
  }, []);

  // Filter apartments
  let displayedApartments = apartments;
  if (filter === "small")
    displayedApartments = apartments.filter(
      (apartment) => apartment.maxCapacity <= 3
    );
  if (filter === "medium")
    displayedApartments = apartments.filter(
      (apartment) => apartment.maxCapacity >= 4 && apartment.maxCapacity <= 7
    );
  if (filter === "large")
    displayedApartments = apartments.filter(
      (apartment) => apartment.maxCapacity >= 8
    );

  const handleDelete = useCallback(
    async (apartmentId) => {

      setApartments((prev) => prev.filter((apartment) => apartment.id !== apartmentId));
  
      try {
        // Attempt to delete the apartment from the server
        await deleteApartment(apartmentId);
      } catch (error) {
        console.error("Failed to delete apartment:", error);
      }
    },
    [] 
  );

  if (loading) return <p>Loading...</p>;
  if (!apartments.length) return <p>No apartments available</p>;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedApartments.map((apartment) => (
        <ApartmentCard
          apartment={apartment}
          key={apartment.id}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}