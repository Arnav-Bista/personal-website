import { existsSync } from "fs";
import Image from "next/image";
import { ReactNode } from "react";


export default function getTechs(techs: Array<string>) {
  
  const imagesArray: Array<ReactNode> = [];
  const size = 100;

  for (let i = 0; i < techs.length; i++) {
    let iconPathName = techs[i] + ".svg"

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
          alt={`Logo of ${techs[i]}`}
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

  return imagesArray;
}
