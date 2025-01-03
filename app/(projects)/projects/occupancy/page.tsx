import { ReactElement } from "react";
import OccupancyNavBar from "./occupancyComponents/occupancyNavBar";
import Card from "@/app/components/card";
import OccupancyCard from "./occupancyComponents/occupancyCard";

export default function Page() {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <OccupancyCard 
        endpointName="gym"
        name="The Gym"
        refreshWaitSeconds={5}
      />
    </div>
  );
}
