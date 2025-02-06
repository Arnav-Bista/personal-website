"use client";


import { useEffect, useRef, useState } from "react";
import ReactiveInteractiveGrid from "./reactiveInteractiveGrid";
import ConstraintsHeader from "./constraintsHeader";
import SimulationControls from "./simulationControls";
import init, { City, GaWasm } from "@/public/wasm/constraints/pkg/genetic_algorithm";
import { IGPoint } from "./interactiveGrid";

export default function Page() {

  const [points, setPoints] = useState<Array<IGPoint>>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [path, setPath] = useState<[Array<IGPoint>, Array<IGPoint>]>([[], []]);
  const gaRef = useRef<GaWasm>();
  const dimensions = useRef<[number, number]>([0, 0]);

  const [parameters, setParameters] = useState<{ [key: string]: string | number }>({
    elitism: 0.01,
    population_count: 1000,
    selection_target: 0.8,
    mutation_rate: 0.07,
  });

  useEffect(() => {
    let animationFrameId: number;
    if (isRunning) {
      const animate = () => {
        iterate();
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    }
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

  }, [isRunning]);

  useEffect(() => {
    init().then(() => {
      console.log(("LOADED WASM SUCCESSFULLY"))
    }).catch(() => {
      console.log("FAILED TO LOAD WASM - OH NOOOOOOOOOOOOO");
    }
    );
  }, []);

  function iterate() {
    if (!gaRef.current) {
      let p: Array<City> = points.map((igp) => new City(igp.x, igp.y));
      let ga = new GaWasm(1000, p);
      gaRef.current = ga;
    }
    let c = gaRef.current.step(
      parameters.mutation_rate as number,
      parameters.selection_target as number,
      parameters.elitism as number
    ).chromosome as Array<City>;
    setGeneration(prev => prev + 1);
    setPath([
      c.map((city) => ({ x: city.x, y: city.y })),
      []
    ]);
  }

  function resetGa() {
    if (gaRef.current) {
      gaRef.current.free();
      gaRef.current = undefined;
    }
    setGeneration(0);
  }


  return (
    <>
      <ConstraintsHeader
        onResetPath={() => {
          setGeneration(0);
          setPath([[], []]);
          resetGa();
        }}
        onClear={() => {
          setGeneration(0);
          setPoints([]);
          setPath([[], []]);
        }}
        onGenerate={(n) => {
          if (dimensions.current[0] != 0 || dimensions.current[1] != 0) {
            setPoints(generatePoints(n, dimensions.current));
            resetGa();
          }
        }}
        parameters={parameters}
        onChange={(p) => {
          setParameters({ ...p });
          if (p.population_count != parameters.population_count) {
            resetGa();
          }
        }}
      />
      <SimulationControls
        onStep={iterate}
        generation={generation}
        isRunning={isRunning}
        onRunPauseClick={() => {
          if (points.length == 0) return;
          setIsRunning(!isRunning);
        }}
      />
      <div className="px-10 my-4">
        <ReactiveInteractiveGrid
          className="!h-[70vh]"
          square
          gridLines={[40, 0]}
          points={points}
          setPoints={(p) => {
            setPoints([...points, p]);
            resetGa();
          }}
          dimensionRef={dimensions}
          bestRoute={path[0]}
          currentRoute={path[1]}
        />
      </div>
    </>
  );
}


function generatePoints(count: number, [width, height]: [number, number]): City[] {
  const points: City[] = [];
  for (let i = 0; i < count; i++) {
    points.push(new City(
      Math.random() * width, Math.random() * height
    ));
  }
  return points;
}
