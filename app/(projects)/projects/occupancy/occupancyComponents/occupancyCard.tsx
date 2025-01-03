import Card from "@/app/components/card";

interface OccuapncyCardProps {
  endpointName: string,
  name: string,
  refreshWaitSeconds: number,
}
export default function OccupancyCard(props: OccuapncyCardProps) {
  return (
    <Card backdrop className="w-auto">
      <div className="mx-8 my-4">
        <h2 className="w-full text-center">{props.name}</h2>
      </div>
    </Card>
  );
}
