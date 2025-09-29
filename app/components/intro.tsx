"use client";

import { useState, useEffect } from "react";
import "./intro.css";
import Card from "./card";
import Button from "./button";

const normalMode = '-- NORMAL --';
const insertMode = '-- INSERT --';

const defaultTopText = "Hi, I'm Arnav Bista";
const defaultBottomText = "A Software Developer";
const bottomPrefix = "A ";
const bottomSuffix = " Developer";
const developerTypes = ["Rust", "Web", "Backend", "FullStack", "Mobile", "Software"];

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Intro() {
  const [vimMode, setVimMode] = useState(insertMode);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [cursorPosition, setCursorPosition] = useState([0, 0]);

  const renderTextWithCursor = (text: string, lineNumber: number) => {
    const [cursorLine, cursorPos] = cursorPosition;

    if (cursorLine !== lineNumber) {
      return text;
    }

    const beforeCursor = text.slice(0, cursorPos);
    const atCursor = text[cursorPos];
    const afterCursor = text.slice(cursorPos + 1);

    return (
      <>
        {beforeCursor}
        <span
          className={`${vimMode === insertMode ? "insert-cursor whitespace-pre" : "vimcursor"}`}
        >
          {atCursor}
        </span>
        {afterCursor}
      </>
    );
  };

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    async function typeText(text: string, setText: (value: string) => void, lineNum: number, fromIndex?: number) {
      let start = fromIndex || 0;
      for (let i = start; i <= text.length; i++) {
        await new Promise(resolve => {
          setText(text.slice(0, i));
          setCursorPosition([lineNum, i]);
          const delay = 40 + Math.random() * 30;
          const timeout = setTimeout(resolve, delay);
          timeouts.push(timeout);
        });
      }
    }

    async function startTyping() {
      setCursorPosition([0, 0]);
      await typeText(defaultTopText, setTopText, 0);
      await wait(700);

      setCursorPosition([1, 0]);
      await typeText(defaultBottomText, setBottomText, 1);
      await wait(700);

      setVimMode(normalMode);
      setCursorPosition([1, defaultBottomText.length - 1]);
      await wait(1000);
    }

    async function goBackAndDelete() {
      // At the D of Developer
      setCursorPosition([1, defaultBottomText.length - "Developer".length]);
      await wait(250);
      // At the start of the new word
      setCursorPosition([1, 2]);
      await wait(250);
      setVimMode(insertMode);
      setBottomText(bottomPrefix + bottomSuffix);
    }

    async function RetypeAndDeleteCycle() {
      while (true) {
        for (let i = 0; i < developerTypes.length; i++) {
          const devType = developerTypes[i]

          // Write
          for (let i = 0; i <= devType.length; i++) {
            await wait(40 + Math.random() * 25);
            setBottomText(bottomPrefix + devType.slice(0, i) + bottomSuffix);
            setCursorPosition([1, bottomPrefix.length + i]);
          }

          await wait(250);

          setCursorPosition([1, bottomPrefix.length + devType.length - 1]);
          setVimMode(normalMode);

          await wait(1000)

          // Delete
          await wait(250);
          setVimMode(insertMode);
          setBottomText(bottomPrefix + bottomSuffix);
          setCursorPosition([1, 2]);

          await wait(500);
        }
      }
    }


    startTyping().then(goBackAndDelete).then(RetypeAndDeleteCycle);

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="h-[60vh] flex flex-col justify-center items-center ">
      <Card backdrop className="max-w-screen-md p-10 border-gray-500 border-[2px]">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col text-gray-500 pr-2">
            {
              topText && <span className="h-7 leading-7">1</span>
            }
            {
              bottomText && <span className="h-7 leading-7">2</span>
            }
          </div>
          <div className="flex flex-col">
            <h4 className="h-7 leading-7">{renderTextWithCursor(topText, 0)}</h4>
            <h4 className="h-7 leading-7">{renderTextWithCursor(bottomText, 1)}</h4>
          </div>
        </div>
        <p className="">{vimMode}</p>
      </Card>
      <div className="flex flex-row gap-3 md:gap-4 justify-center items-center mt-8 mb-10 flex-wrap px-4">
        <Button href="/contact" variant="primary">
          Contact Me
        </Button>
        <Button href="https://www.linkedin.com/in/arnav-bista/" variant="secondary" external>
          LinkedIn
        </Button>
        <Button href="https://github.com/Arnav-Bista" variant="outline" external>
          GitHub
        </Button>
      </div>
    </div>
  );
}
