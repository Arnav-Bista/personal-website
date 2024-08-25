/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Card from "./components/card";
import myself from "@/public/images/myself.jpeg"
import Link from "next/link";
import Techs from "./techs";
import "./home.css"


export default function Home() {
  return (
    <>
      <div className="intro h-[80vh] w-full align-middle justify-center items-center place-content-center text-center">
        <h1>Hi, I'm Arnav</h1>
        <h2>Aspiring Software Engineer & Full Stack Developer</h2>
      </div>
      <Card backdrop>
        <div className="m-10 p-8 flex felx-row gap-4">
          <div className="flex flex-col">
            <h1>About Me</h1>
            <p className="my-4">
              I'm a 3rd year Computer Science student at the University of St Andrews. <br />
              I've got a passion for problem solving and am always on the lookout for new challenges. <br />
            </p>
            <p>
              I have experience with a variety of programming languages and frameworks and am constantly on the lookout to improve my skills.
              I'm a full stack developer, able to create and setup servers, web apps, mobile apps and anything in between. If I can't yet, I'm up for the challenge.
            </p>
            <p className="my-4">
              I'm always on the lookout for opportunities. If you have a problem that needs solving, or a project that needs a developer, let's talk.
            </p>
            <div className="mt-auto">
              <Link href="/contact" className="link">GET IN TOUCH</Link>
            </div>
          </div>
          <Image
            src={myself}
            alt="Picture of Me"
            quality={100}
            placeholder="blur"
            className="rounded-md aboutmeimg"
          />
        </div>
      </Card>
      <Techs />
    </>
  );
}
