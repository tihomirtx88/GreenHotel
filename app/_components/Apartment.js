"use client";

import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "./TextExpander";
import Image from "next/image";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
let defaultCoordinates = [27.910543, 43.204666];

export default function Apartment({ apartment }) {
  const mapContainerRef = useRef(null);
  const { name, maxCapacity, image, latitude, longitude, description } =
    apartment;

  useEffect(() => {
    if (!mapContainerRef.current || latitude == null || longitude == null)
      return;

    // Initialize map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/tihomirtx88/clzfox4p200dc01prb4f10xij",
      scrollZoom: false,
    });

    // Create a bounds object
    const bounds = new mapboxgl.LngLatBounds();
    const coordinates =
      latitude != null && longitude != null
        ? [longitude, latitude]
        : defaultCoordinates;

    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker({ element: el, anchor: "bottom" })
      .setLngLat(coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(coordinates)
      .setHTML(`<p>${name}</p>`)
      .addTo(map);

    bounds.extend(coordinates);

    map.fitBounds(bounds, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
      maxZoom: 15,
    });

    console.log("Map center:", map.getCenter());
    console.log("Map bounds:", map.getBounds());
    console.log("Marker coordinates:", coordinates);

    return () => map.remove();
  }, [latitude, longitude, name]);

  return (
    <>
      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10
        lg:gap-16
        border
        border-primary-800
        rounded-xl
        overflow-hidden
        bg-primary-950
        shadow-xl
      "
      >
        {/* IMAGE */}

        <div className="relative h-80 lg:h-full min-h-[420px]">
          <Image
            src={image}
            alt={`Apartment ${name}`}
            fill
            sizes="(max-width:768px)100vw,50vw"
            className="object-cover"
          />
        </div>

        {/* INFO */}

        <div className="p-6 lg:p-10 flex flex-col justify-center">
          <h1
            className="
            text-3xl
            md:text-5xl
            font-bold
            text-accent-400
            mb-8
            leading-tight
          "
          >
            Apartment {name}
          </h1>

          <div className="text-primary-300 text-base lg:text-lg leading-8 mb-10">
            <TextExpander>{description}</TextExpander>
          </div>

          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <UsersIcon className="w-6 h-6 text-accent-500" />

              <span>
                Up to <strong>{maxCapacity}</strong> guests
              </span>
            </li>

            <li className="flex items-center gap-4">
              <MapPinIcon className="w-6 h-6 text-accent-500" />

              <span>
                Latitude <strong>{latitude}</strong>
                {" • "}
                Longitude <strong>{longitude}</strong>
              </span>
            </li>

            <li className="flex items-center gap-4">
              <EyeSlashIcon className="w-6 h-6 text-accent-500" />

              <span>100% privacy guaranteed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* MAP */}

      <section className="mt-16">
        <div
          ref={mapContainerRef}
          className="
            w-full
            h-[350px]
            md:h-[500px]
            rounded-xl
            overflow-hidden
            border
            border-primary-800
          "
        />
      </section>
    </>
  );
}
