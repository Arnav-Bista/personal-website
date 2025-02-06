import Accordion from "@/app/components/accordion";
import Card from "@/app/components/card";
import Link from "next/link";

export default function ConstraintsIntro() {
  return (
    <Card backdrop className="!rounded-none">
      <div className="p-4">
        <p>
          CONSTRAINTS is my personal exploration constraint programming. This is sometimes unfortunately abbreviated to CP.
          This project mainly focuses on creating an almost genetic template
          to help model problems and apply search algorithms such as <strong>Genetic Algorithms</strong> and <strong>Simulated Annealing</strong>.
          <br />
          <br />
          For the showcase, we&apos;ll be <i>approximating</i> the solution for the <strong>Travelling Salesman Problem</strong> using <strong>Genetic Algorithms</strong>.
          <br />
          <br />
          View the repo and learn more <Link className="underline" href="https://github.com/Arnav-Bista/constraints">here</Link>
        </p>
        <Accordion
          title="Genetic Algorithm?"
        >
          <p className="text-gray-700">
            In short, a Genetic Algorithm is a search/optimization algorithm that uses survival of the fittest and natural evolution to try and
            minimise or maximise a &apos;fitness function&apos; - a measure of how good of a solution we have. It will take in parameters such as
            <i>population count</i>, <i>mutation rate</i>, <i>selection target</i>, <i>elitism percentage</i> and will simulate the evolutionary process and try to improve overall fitness.
            <br />
            <br />
            We&apos;ll be focusing on this one in this demo!
          </p>
        </Accordion>
        <Accordion
          title="Simulated Annealing?"
        >
          <p className="text-gray-700">
            Similar to Genetic Algorithm, but we&apos;re mimicking the physical process of annealing (duh!) where a material is heated and then cooled to reduce
            defects and minimise energy. In SA, a new point is randomly generated at each iteration, and the algorithm accepts new points that lower the
            objective, or points that raise the objective with a certain probability. This allows the algorithm to explore globally for solutions and avoid
            being trapped in local minima.
          </p>
        </Accordion>
        <Accordion
          title="Travelling Salesman Problem?"
        >
          <p className="text-gray-700">
            &quot;Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?&quot;
            <br />
            <br />
            This is an NP-Hard problem that has a time complexity of O(n!) for a brute force solution.
          </p>
        </Accordion>
      </div>
      <div className="flex justify-center">
        <Link href={"/projects/constraints/demo"} className="mb-2 w-1/5 bg-gray-200 text-center p-4 border border-black ">
          TAKE A LOOK
        </Link>
      </div>
    </Card>
  );
}
