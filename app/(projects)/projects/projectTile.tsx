import ExperienceTechs from "@/app/(portfolio)/experience/experienceTechs";
import Card from "@/app/components/card";
import Link from "next/link";

export interface ProjectTileInterface {
  title: string,
  languages: Array<string>,
  description: string,
  link: string,
}

export default function ProjectTile(props: ProjectTileInterface) {
  return (
    <Link href={props.link}>
      <Card className="bg-gray-200 max-w-sm text-left p-4">
        <h3>{props.title}</h3>
        <p className="text-sm">{props.description}</p>
        <ExperienceTechs
          className="!justify-start !max-w-sm flex-nowrap"
          techs={props.languages}
        />
      </Card>
    </Link>
  );
}
