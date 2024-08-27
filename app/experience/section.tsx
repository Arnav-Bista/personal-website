import { ReactNode } from "react";
import Card from "../components/card";

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
      <div className="m-10 p-8 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1>{props.title}</h1>
          <h4 className="opacity-80">{props.duration}</h4>
        </div>
        <h2>{props.position}</h2>
        <span className="flex flex-row opacity-70 mb-4">
          <h4>{`${props.type} - ${props.location}`}</h4>
        </span>
        {props.children}
      </div>
    </Card>
  );
}
