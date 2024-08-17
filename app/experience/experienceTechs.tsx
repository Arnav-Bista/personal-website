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
      <div className="h-[100px] w-[100px] relative" key={i} style={{ margin: `0 ${marginX}px` }}>
        <Image
          key={i}
          src={iconPathName}
          alt={`Logo of ${props.techs[i]}`}
          quality={100}
          height={size}
          width={size}
          style={{
            objectFit: "contain",
            height: `${size}px`,
            borderRadius: "10px",
          }}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-row">
      {...imagesArray}
    </div>
  );
}

