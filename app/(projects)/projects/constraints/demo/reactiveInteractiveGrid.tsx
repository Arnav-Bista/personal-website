import { MutableRefObject, useEffect, useRef, useState } from "react";
import InteractiveGrid, { InteractiveGridProps } from "./interactiveGrid";

interface RIGProps extends Omit<InteractiveGridProps, "gridSize"> {
  className?: string,
  square?: boolean,
  dimensionRef?: MutableRefObject<[number, number]>
}


/**
 * Basically the Interactive Grid but it'll take the available width and height
 * Does this by useEffect with getBoundingClientRect and a ResizeObserver
 */
export default function ReactiveInteractiveGrid(props: RIGProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<[number, number]>([0, 0]);

  const gridLines = props.gridLines;
  if (props.square) {
    gridLines[1] = Math.floor(dimensions[1] / (dimensions[0] / gridLines[0]))
  }

  useEffect(() => {
    function updateDimensions() {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions([width, height]);
        if (props.dimensionRef) {
          props.dimensionRef.current = [width, height];
        }
      }
    }

    updateDimensions();

    const observer = new ResizeObserver(updateDimensions);
    observer.observe(containerRef.current as Element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full ${props.className}`}>
      <InteractiveGrid
        gridSize={dimensions}
        {...props}
        gridLines={gridLines}
      />
    </div>
  );
}


