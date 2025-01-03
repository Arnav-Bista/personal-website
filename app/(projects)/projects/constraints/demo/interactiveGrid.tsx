import { City } from "@/public/wasm/constraints/pkg/genetic_algorithm";

export interface InteractiveGridProps {
  gridSize: [number, number],
  gridLines: [number, number],
  points: Array<IGPoint>,
  setPoints: (p: IGPoint) => void,
  bestRoute?: Array<IGPoint>,
  currentRoute?: Array<IGPoint>,
}

export interface IGPoint {
  x: number,
  y: number
}

export default function InteractiveGrid(props: InteractiveGridProps) {

  const gridStep = {
    x: props.gridSize[0] / props.gridLines[0],
    y: props.gridSize[1] / props.gridLines[1],
  };

  const stroke = "#ddd";
  const strokeWidth = 1;

  const verticalLines = Array.from({ length: props.gridSize[0] }, (_, i) => (
    <line
      key={`verticalLine-${i}`}
      y1={0}
      y2={props.gridSize[1]}
      x1={i * gridStep.x}
      x2={i * gridStep.x}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  ));

  const horizontalLines = Array.from({ length: props.gridSize[0] }, (_, i) => (
    <line
      key={`horizontalLine-${i}`}
      x1={0}
      x2={props.gridSize[0]}
      y1={i * gridStep.y}
      y2={i * gridStep.y}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  ));

  return (
    gridStep.x != Infinity &&
    <svg
      width={props.gridSize[0]}
      height={props.gridSize[1]}
      className="border-black border"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        props.setPoints(new City(x, y));
      }}
    >
      {horizontalLines}
      {verticalLines}
      {/* Draw current route in grey */}
      {props.currentRoute && props.currentRoute.length > 1 && (
        <path
          d={`M ${props.currentRoute.map(p => `${p.x},${p.y}`).join(' L ')} Z`}
          stroke="#888888"
          strokeWidth={2}
          fill="none"
        />
      )}

      {/* Draw best route in red */}
      {props.bestRoute && props.bestRoute.length > 1 && (
        <path
          d={`M ${props.bestRoute.map(p => `${p.x},${p.y}`).join(' L ')} Z`}
          stroke="red"
          strokeWidth={2}
          fill="none"
        />
      )}

      {/* Draw points */}
      {props.points.map((point, index) => (
        <g key={`point-${index}`}>
          <circle
            cx={point.x}
            cy={point.y}
            r={5}
          />
        </g>
      ))}
    </svg>
  );
}
