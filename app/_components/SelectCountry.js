"use client";

import { useEffect, useState } from "react";

export default function SelectCountry({
  countries,
  defaultCountry,
  defaultFlag,
  name,
  id,
  className,
}) {
  const [selectedFlag, setSelectedFlag] = useState(defaultFlag);

  useEffect(() => {
    const img = document.getElementById("country-flag-preview");

    if (img) img.src = selectedFlag;
  }, [selectedFlag]);

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${defaultFlag}`}
      className={className}
      onChange={(e) => {
        const [, flag] = e.target.value.split("%");
        setSelectedFlag(flag);
      }}
    >
      <option value="">Select country...</option>

      {countries.map((country) => (
        <option
          key={country.name}
          value={`${country.name}%${country.flag}`}
        >
          {country.name}
        </option>
      ))}
    </select>
  );
}