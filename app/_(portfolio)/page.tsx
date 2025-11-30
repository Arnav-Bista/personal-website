/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Card from "../components/card";
import myself from "@/public/images/myself.jpeg"
import Link from "next/link";
import Techs from "./techs";
import Intro from "../components/intro";
import Button from "../components/button";

export default function Home() {
  return (
    <div className="pb-10">
      <Intro />
      <Card backdrop>
        <div className="m-4 md:m-10 p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col">
            <h1>About Me</h1>
            <p className="my-4">
              Final year Computer Science student at St Andrews (Dean's List, graduating June 2026).
            </p>
            <p className="mb-4">
              Comfortable in Rust, TypeScript and Python. Daily driving Linux ;) 
            </p>
            <div className="mt-auto">
              <Button href="/contact" variant="primary">Get In Touch</Button>
            </div>
          </div>
          <Image
            src={myself}
            alt="Picture of Me"
            quality={100}
            placeholder="blur"
            className="rounded-md w-[25vw] object-cover max-[930px]:hidden"
          />
        </div>
      </Card>
      <div className="mt-10">
        <Techs />
      </div>
    </div>
  );
}
