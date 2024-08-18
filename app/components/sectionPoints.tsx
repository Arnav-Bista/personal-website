import { ReactNode } from "react";

interface SectionPointsProps {
  points: Array<string>,
  className?: string
}

export default function SectionPoints(props: SectionPointsProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      {constructUl(props.points, "\t")}
    </div >
  );
}

/**
  * Given an array of points and a delimeter, construct a nested <ul> list.
  * This function will recursively construct the nested unordered list where
  * the sub lists will be specified by delimeter and those after are 
  * delimeter + delimeter.
  *
  * So,
  * First
  * \tSecond
  * \t\tThird
  * \tSecond
  *
  * Would translate to:
  * - First
  *   - Second
  *     - Third
  *   - Second
  *
  * Except with the circle and the default icons.
  * 
  * This function will call constructUlRecursive() for the recursive step.
  */
function constructUl(data: Array<string>, indicator: string): ReactNode {
  const [result, _] = constructUlRecursive(data, "", indicator, 0);
  return (
    <ul className="list-disc list-inside marker:text-black/60 [&_ul]:list-[revert]">
      {...result}
    </ul>
  );
}

/**
 * This is the recursive step
 * This is complex only because I did not want to use dangerouslySetInnerHTML....
 * :|
  */
function constructUlRecursive(data: Array<string>, oldIndicator: string, newIndicator: string, index: number): [Array<ReactNode>, number] {
  const result: Array<ReactNode> = [];

  let i = index;
  while (i < data.length) {
    const point = data[i];
    // If we're at the end of this scope
    if (!point.startsWith(oldIndicator) && !point.startsWith(newIndicator)) {
      return [result, i];
    }
    // If we've gone deeper
    // We can only go deeper if there are elements afterwards
    // Otherwise, we're probably in the same scope
    if (i + 1 < data.length) {
      const nextPoint = data[i + 1];
      if (nextPoint.startsWith(newIndicator)) {
        const [subPoint, newIndex] = constructUlRecursive(data, newIndicator, newIndicator + newIndicator, i + 1);
        i = newIndex;
        // Needed to put the point here otherwise the list contains a blank dot
        result.push(
          <li key={i}>{point.substring(oldIndicator.length)}
            <ul className="list-inside ml-8">
              {...subPoint}
            </ul>
          </li>
        );
        continue;
      }
    }
    // Still in the current scope
    result.push(<li key={i}>{point.substring(oldIndicator.length)}</li>);
    i++;
  }

  return [result, i];
}
