'use client';

import Card from "@/app/components/card";
import ConstraintsIntro from "./intro";
import { useEffect, useRef, useState } from "react";
import TspChart from "./tspChart";
import ConstraintsButton from "./button";

interface GA_Parameters {
  mutation_rate: number,
  selection_target: number,
  elitism: number,
  population_count: number
}

export default function Page() {

  const [cities, setCities] = useState<Array<[number, number]>>([]);
  const [gaData, setGaData] = useState<GA_Parameters>({ elitism: 0.01, mutation_rate: 0.07, selection_target: 0.8, population_count: 1000 });
  const [cityNumber, setCityNumber] = useState<number>(150);
  const [maxCoordinate, setMaxCoordinate] = useState<number>(300);
  const [best, setBest] = useState<{ path: any, fitness: number } | null>(null);


  return (
    <>
      <h1 className="text-center w-full my-4">
        CONSTRAINTS
      </h1>
      <ConstraintsIntro />
    </>
  );
}


function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
