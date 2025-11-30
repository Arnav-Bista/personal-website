import { ReactNode } from "react";
import Card from "../../components/card";

interface SectionProps {
  title: string,
  position: string,
  duration: string,
  type: string,
  location: string,
  children: ReactNode
}

export default function Section(props: SectionProps) {
  return (
    <Card backdrop className="mt-10">
      <div className="m-6 md:m-10 p-4 md:p-8 flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-4 mb-3">
          <h1>{props.title}</h1>
          <div className="flex flex-col items-start md:items-end gap-0.5">
            <h4 className="opacity-70 whitespace-nowrap">{props.duration}</h4>
            <h4 className="opacity-60 text-sm">{`${props.type} • ${props.location}`}</h4>
          </div>
        </div>
        <h2 className="mb-6">{props.position}</h2>
        {props.children}
      </div>
    </Card>
  );
}
