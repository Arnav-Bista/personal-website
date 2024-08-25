// import { readdir, readdirSync } from "fs";
import { readdir } from "fs/promises"
import Image from "next/image";
import Card from "./components/card";
import { ReactNode } from "react";
import { readdirSync } from "fs";
import Link from "next/link";


// Use this with Suspense once the react use function is fixed...
async function IconNameFileWalk(): Promise<Array<string>> {
  try {
    const files = await readdir("./public/logos");
    return files;
  }
  catch (e) {
    console.error(e);
  }
  return []
}

// For now, make it sync
function IconNameFileWalkSync(): Array<string> {
  try {
    const files = readdirSync("./public/logos");
    return files;
  }
  catch (e) {
    console.error(e);
    return []
  }
}

export default function Techs() {
  const icons = IconNameFileWalk();
  return (
    <Card backdrop>
      <div className="m-10 p-8 flex flex-col text-center">
        <h1>Languages & Frameworks</h1>
        <TechsGrid dataPromise={icons} />
        <h3 className="mt-8">And more, take a look at my <Link href="/projects" className="link">PROJECTS</Link></h3>
      </div>
    </Card>
  );
}

interface TechsGridProps {
  dataPromise: Promise<Array<string>>,
}

function TechsGrid(props: TechsGridProps) {
  const data = IconNameFileWalkSync();
  const imagesArray: Array<ReactNode> = [];

  for (let i = 0; i < data.length; i++) {
    // Remove .svg extension
    const iconPath = data[i]
    const iconName = iconPath.slice(0, -4);
    imagesArray.push(
      <div className="h-24 w-24 relative" key={i}>
        <Image
          key={i}
          src={`/logos/${iconPath}`}
          alt={`Logo of ${iconName}`}
          quality={100}
          fill={true}
          objectFit="contain"
          style={{
            borderRadius: "10px",
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap pt-8 gap-6 justify-center">
      {imagesArray}
    </div>
  );
}
