"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type VehicleModel = {
  Make_Name: string;
  Model_Name: string;
};

async function fetchVehicleModels(
  makeId: string,
  year: string
): Promise<VehicleModel[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LINK}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const data = await res.json();
  return data.Results;
}

export default function ResultPage({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = params;
  const [vehicleModels, setVehicleModels] = useState<VehicleModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const models = await fetchVehicleModels(makeId, year);
        setVehicleModels(models);
      } catch (err) {
        setError("Failed to fetch vehicle data.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [makeId, year]);
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-y-2">
        <h1 className="text-[26px]">Loading vehicle models...</h1>
        <AiOutlineLoading3Quarters size={28} />
      </div>
    );
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <main className="container mx-auto p-4 flex justify-center">
        {vehicleModels.length === 0 ? (
          <p>Uppps, no vehicle found</p>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">
              Vehicle Models make by {vehicleModels[0].Make_Name} in {year}
            </h1>
            <ul className="list-disc pl-6">
              {vehicleModels.map((model: VehicleModel, index: number) => (
                <li key={index} className="text-lg">
                  {model.Model_Name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    );
  }
}
