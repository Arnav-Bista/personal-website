import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";

interface AccordionProps {
  title: string,
  children: ReactNode,
  className?: string,
}

export default function Accordion(props: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`w-full px-4 py-2 my-2 border ${props.className}`}>
      <div className="my-2 flex justify-between">
        <h4 className="inline">
          {props.title}
        </h4>
        <span className="inline">
          <button
            onClick={() => setOpen(!open)}
          >
          {open ? <ChevronUp /> : <ChevronDown />}
          </button>
        </span>
      </div>

      <div className={open ? "" : "hidden"}>
        {props.children}
      </div>
    </div>
  );
}
