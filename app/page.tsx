"use client";

import Link from "next/link";
import { useState, useEffect, ChangeEvent } from "react";
import { FaCarSide } from "react-icons/fa";

export default function HomePage() {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const fetchMakes = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_LINK}/GetMakesForVehicleType/car?format=json`
      );
      const data = await response.json();
      setMakes(data.Results);
    };
    fetchMakes();

    const currentYear = new Date().getFullYear();
    const yearList = [];
    for (let year = 2015; year <= currentYear; year++) {
      yearList.push(year);
    }
    setYears(yearList);
  }, []);

  const handleMakeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(event.target.value);
  };

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const isButtonDisabled = !selectedMake || !selectedYear;

  return (
    <main className="container mx-auto p-4 flex flex-col items-center">
      <span className="flex gap-x-2">
        <h1 className="text-2xl font-bold mb-4">Find your car</h1>
        <FaCarSide size={30} />
      </span>
      <div className="mb-4 sm:w-[500px] max-w-[400px] w-full">
        <span className="flex gap-x-1">
          <label htmlFor="make" className="block font-medium mb-2">
            Vehicle make
          </label>
          <span className="text-red-600 text-[18px] font-black">*</span>
        </span>

        <select
          id="make"
          className="border border-gray-300 p-2 rounded-md w-full"
          value={selectedMake}
          onChange={handleMakeChange}
        >
          <option value="">Select a make</option>
          {makes.map((make: any) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 sm:w-[500px] max-w-[400px] w-full">
        <span className="flex gap-x-1">
          <label htmlFor="year" className="block font-medium mb-2">
            Model year
          </label>
          <span className="text-red-600 text-[18px] font-black">*</span>
        </span>
        <select
          id="year"
          className="border border-gray-300 p-2 rounded-md w-full"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">Select a year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Link
        href={`/result/${selectedMake}/${selectedYear}`}
        aria-disabled={isButtonDisabled}
      >
        <button
          className={`w-full p-2 rounded-md bg-slate-100 shadow-md sm:w-[500px] max-w-[400px] ${
            isButtonDisabled ? "cursor-not-allowed bg-slate-100" : "bg-blue-100"
          }`}
          disabled={isButtonDisabled}
        >
          Next
        </button>
      </Link>
    </main>
  );
}
