import Card from "@/app/components/card";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Card backdrop>
        <div className="m-10 p-8">
          <h2>Top Projects</h2>
        </div>
      </Card>
      <div className="h-[80vh] w-full align-middle justify-center items-center place-content-center text-center">
        <h1>Working on more showcases!</h1>
        <h5 className="opacity-60">(And finishing unfinished projects 🗿)</h5>
        <h2>Checkout my <Link className="link" href="https://github.com/Arnav-Bista">Github</Link></h2>
      </div>
    </>
  );
}
