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
    const coordinates = (latitude != null && longitude != null)
    ? [longitude, latitude]
    : defaultCoordinates;
    

    const el = document.createElement('div');
    el.className = 'marker';
  
    new mapboxgl.Marker({ element: el, anchor: 'bottom' })
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

    console.log('Map center:', map.getCenter());
console.log('Map bounds:', map.getBounds());
console.log('Marker coordinates:', coordinates);
  
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

      <section className="section-map">
        <div id="map" ref={mapContainerRef} />
      </section>

    </>
  );
}
