import Button from "./components/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center h-screen items-center gap-6">
      <div className="text-2xl">
        Hey! I'm Arnav
      </div>
      <div className="text-2xl">Final Year CS @ The University of St Andrews</div>
      <div className="text-4xl">
        🚧 Under Construction 🚧
      </div>
      <div className="flex gap-4">
        <Button href="https://github.com/Arnav-Bista" external variant="outline">
          GitHub
        </Button>
        <Button href="https://linkedin.com/in/arnav-bista" external variant="outline">
          LinkedIn
        </Button>
      </div>
    </div>
  );
}
