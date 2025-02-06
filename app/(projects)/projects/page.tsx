import Card from "@/app/components/card";
import Link from "next/link";
import ProjectTile from "./projectTile";

export default function Page() {
  return (
    <>
      <div className="flex justify-center w-full mt-8">
        <ProjectTile
          title="Constraints"
          description="My own implementation of Genetic Algorithms to approximate the solutions to the TSP"
          languages={[
            "rust",
            "wasm"
          ]}
          link="/projects/constraints"
        />
        <ProjectTile
          title="This Website"
          description="My personal website, along with intergrations of other projects. Built from the ground up."
          languages={[
            "nextjs",
            "typescript",
            "wasm"
          ]}
          link="https://github.com/Arnav-Bista/personal-website"
        />
      </div>
      <div className="mt-8 w-full align-middle justify-center items-center place-content-center text-center">
        <h1>Working on more showcases!</h1>
        <h5 className="opacity-60">(And finishing unfinished projects 🗿)</h5>
        <h2>Checkout my <Link className="link" href="https://github.com/Arnav-Bista">Github</Link></h2>
      </div>
    </>
  );
}
