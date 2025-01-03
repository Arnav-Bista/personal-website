/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Page() {
  // Idea: Maybe add a mailme system...
  return (
    <div className="h-[80vh] w-full align-middle justify-center items-center place-content-center text-center">
      <h1>Let's Talk</h1>
      <h3>Shoot me a message <Link className="link" href="https://www.linkedin.com/in/arnav-bista/">@LinkedIn</Link></h3>
    </div>
  );
}
