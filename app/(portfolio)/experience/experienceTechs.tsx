import { existsSync } from "fs";
import Image from "next/image";
import { ReactNode } from "react";

interface TechsProps {
  techs: Array<string>,
}


export default function ExperienceTechs(props: TechsProps) {

  const imagesArray: Array<ReactNode> = [];
  const size = 100;

  for (let i = 0; i < props.techs.length; i++) {
    let iconPathName = props.techs[i] + ".svg"
    const marginX = size * ((i) % 2);


    if (existsSync(`./public/logos/${iconPathName}`)) {
      iconPathName = `/logos/${iconPathName}`;
    }
    else {
      iconPathName = `/all_logos/${iconPathName}`;
    }

    imagesArray.push(
      <div className="h-24 w-24 relative" key={i}>
        <Image
          key={i}
          src={iconPathName}
          alt={`Logo of ${props.techs[i]}`}
          quality={100}
          height={size}
          width={size}
          style={{
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
      </div>
    )
  }

  return (
    <div>
      <h4 className="opacity-60">Key Technologies Used:</h4>
      <div className="flex flex-row mt-4 flex-wrap justify-evenly gap-4">
        {...imagesArray}
      </div>
    </div>
  );
}

