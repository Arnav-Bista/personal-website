
interface NavBarProps {
}

export default function OccupancyNavBar(props: NavBarProps) {
  return (
    <>
      <div className="fixed z-[1000] backdrop-filter backdrop-blur-lg w-full">
        <div className="text-center">
          <h1>MyOccupancy</h1>
        </div>
      </div>
      <div className="h-12"/>
    </>
  );
}
