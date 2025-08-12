interface SectionDetailsProps {
  title?: string,
  entry: Array<string>,
  score?: Array<string>
}

export default function SectionDetails(props: SectionDetailsProps) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
      <div className="ml-4 pl-4 border-l-2 border-gray-300">
        {props.entry.map((entry, index) => {
          return (
            <div key={index} className={`grid ${props.score !== undefined ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mb-1`}>
              <p className="text-sm">{entry}</p>
              {props.score !== undefined && (
                <p className="text-sm font-medium text-center">{props.score[index]}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}
