
interface ParameterProps {
  name: string,
  defaultValue: string | number,
  onChange: (name: string, value: string | number) => void
}

export default function Parameter(props: ParameterProps) {
  return (
    <div className="flex flex-col items-center">
      <span>{props.name}</span>
      <label className="w-full">
        <input
          type="text"
          defaultValue={props.defaultValue}
          onChange={(e) => {
            const newValue = e.target.value
            const parsedValue = isNaN(Number(newValue)) ? newValue : Number(newValue)
            props.onChange(props.name, parsedValue);
          }}
          className="w-full px-3 py-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
    </div>
  );
}
