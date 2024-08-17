
interface SectionDetailsProps {
  title: string,
  entry: Array<string>,
  score?: Array<string>
}

export default function SectionDetails(props: SectionDetailsProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="flex flex-row">
        <div className="flex-[1]">
          <div className="ml-4 pl-4 border-r-black/100 border-l-2">
            {props.entry.map((entry, index) => {
              return (
                <p key={index}>{entry}</p>
              )
            })}
          </div>
        </div>
        {props.score !== undefined ?
          <div className="flex-[1]">
            {props.score?.map((score, index) => {
              return (
                <p key={index}>{score}</p>
              )
            })}
          </div>
          : null
        }
      </div>
    </div>
  );
}
