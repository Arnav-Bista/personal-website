import getTechs from "@/app/components/techs";
import { existsSync } from "fs";
import Image from "next/image";
import { ReactNode } from "react";

interface TechsProps {
  techs: Array<string>,
  className?: string,
}


export default function ExperienceTechs(props: TechsProps) {
  
  const imagesArray = getTechs(props.techs);

  return (
    <div>
      <h4 className="opacity-60">Key Technologies Used:</h4>
      <div className={`flex flex-row mt-4 flex-wrap justify-evenly gap-4 ${props.className}`}>
        {...imagesArray}
      </div>
    </div>
  );
}

