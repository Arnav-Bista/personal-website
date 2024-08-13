/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Card from "./components/card";
import myself from "@/public/images/myself.jpeg"
import "./home.css"
import Link from "next/link";


export default function Home() {

  return (
    <>
      <div className="intro h-[80vh] w-full felx align-middle justify-center items-center place-content-center text-center">
        <h1>Hi, I'm Arnav</h1>
        <h2>Aspiring Software Engineer & Full Stack Devloper</h2>
      </div>
      <Card className="myself">
        <div className="m-10 p-8 flex felx-row">
          <div className="w-[70%]">
            <h1>About Me</h1>
            <p>
              Hi! I'm a 3rd year Computer Science student at the University of St Andrews. <br />
              I've got a passion for problem solving and am always on the lookout for new challenges. <br />
            </p>
            <br />
            <span>
              I have experience with a variety of programming languages and frameworks and am constantly on the lookout to improve my skills. 
              I'm a full stack developer, able to create and setup servers, web apps, mobile apps and more.
            </span>
            <br/>
            <br/>
            <div className="flex felx-row">
              <div className="w-1/2">
                <h3>Languages Confident In:</h3>
                <ul className="list-disc list-inside">
                  <li>Rust</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Dart</li>
                  <li>C</li>
                </ul>
              </div>
              <div className="w-1/2">
                <h3>Frameworks & Technologies Worked With:</h3>
                <ul className="list-disc list-inside">
                  <li>React.js, Next.js & TailwindCSS</li>
                  <li>Flutter</li>
                  <li>MySQL, Sqlite3, Firebase RTDB</li>
                </ul>
              </div>
            </div>
            <div className="text-s text-center">
              And more, Checkout my <Link href={"/projects"}>Projects</Link> and <Link href={"/experience"}>Experiences</Link>
            </div>
            <br/>
            <p>
              I'm always on the lookout for opportunities. If you have a problem that needs solving, or a project that needs a developer, just shoot me a message!
            </p>
          </div>
          <Image
            src={myself}
            alt="Picture of Me"
            quality={100}
            placeholder="blur"
            className="w-[30%] rounded-xl"
          />
        </div>
      </Card>
    </>
  );
}
