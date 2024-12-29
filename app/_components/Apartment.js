"use client";

import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "./TextExpander";
import Image from "next/image";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Apartment({ apartment }) {
  const mapContainerRef = useRef(null);
  const { name, maxCapacity, image, latitude, longitude, description } =
    apartment;

  useEffect(() => {
    if (!mapContainerRef.current || latitude == null || longitude == null)
      return;

    const bounds = new mapboxgl.LngLatBounds();

    // Initialize Mapbox map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 12,
    });

    // Add a marker at the coordinates
    const marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup().setHTML(`<p>${name}</p>`))
      .addTo(map);

    // After marker is added, fit the bounds
    bounds.extend([longitude, latitude]);

    map.fitBounds(bounds, {
      padding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
      maxZoom: 13,
    });

    map.on("load", () => {
      // map.resize();
    });

    // Cleanup on unmount
    return () => map.remove();
  }, [latitude, longitude, name]);

  return (
    <>
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image}
            alt={`Apartment ${name}`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Apartment {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located at latitude:{" "}
                <span className="font-bold">{latitude}</span> and longitude:{" "}
                <span className="font-bold">{longitude}</span>
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
      id="big-map-container"
        ref={mapContainerRef}
        style={{ height: "400px", width: "100%" }}
        className="border border-primary-800"
      ></div>
    </>
  );
}
