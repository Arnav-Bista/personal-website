import { useState } from "react";
import Parameter from "./parameter";
import ConstraintsButton from "../button";

interface ConstraintsHeaderProps {
  parameters: { [key: string]: string | number },
  onChange: (updatedParameters: { [key: string]: string | number }) => void,
  onGenerate: (count: number) => void,
  onClear: () => void,
}

export default function ConstraintsHeader(props: ConstraintsHeaderProps) {
  const [values, setValues] = useState(props.parameters)
  const [generateNumber, setGenerateNumber] = useState(150);

  const handleParameterChange = (name: string, value: string | number) => {
    const updatedValues = { ...values, [name]: value }
    setValues(updatedValues)
    props.onChange(updatedValues)
  }
  return (
    <header className="bg-gray-100 p-4">
      <div className="flex flex-wrap justify-around items-start gap-4">
        {Object.entries(values).map(([name, value], n) => (
          <Parameter
            key={`param-${n}`}
            name={name}
            defaultValue={value}
            onChange={handleParameterChange}
          />
        ))}

        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-center mb-1">Generate Random Cities</span>
          <div className="flex">
            <input
              type="number"
              value={generateNumber}
              onChange={(e) => setGenerateNumber(e.target.valueAsNumber)}
              className="w-20 px-2 py-1 text-center border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ConstraintsButton
              onClick={() => props.onGenerate(generateNumber)}
              className="rounded-l-none"
            >
              Go
            </ConstraintsButton>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <ConstraintsButton onClick={props.onClear} className="mt-4 px-2">
            Clear
          </ConstraintsButton>
        </div>
      </div>
    </header>
  );
}


