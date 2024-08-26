"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./themeSelector.css"
import sun from "@/public/icons/sun.svg"
import moon from "@/public/icons/moon.svg"
import system from "@/public/icons/system.svg"

enum Theme {
  Light = "light",
  Dark = "dark",
  System = "system"
}

export default function ThemeSelector() {

  const storedTheme = (localStorage.getItem("theme") ?? Theme.System).toString() as Theme;
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    switch (storedTheme) {
      case Theme.Dark:
        setAttribute(Theme.Dark);
        break;
      case Theme.Light:
        setAttribute(Theme.Light);
        break;
      case Theme.System:
      default:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.setAttribute("data-theme", Theme.Dark);
          setAttribute(Theme.Dark);
        }
        else {
          setAttribute(Theme.Light);
        }
        break;
    }
  });

  function handleThemeChange(oldTheme: Theme) {
    // Cycle from Light -> Dark -> System -> Light....
    let newTheme: Theme;
    switch (oldTheme) {
      case Theme.Light:
        newTheme = Theme.Dark;
        break;
      case Theme.Dark:
        newTheme = Theme.System;
        break;
      default:
        newTheme = Theme.Light;
    }
    setTheme(newTheme);
    if (newTheme === Theme.System) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setAttribute(Theme.Dark);
      }
      setAttribute(Theme.Light);
    }
    else {
      setAttribute(newTheme);
    }
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button id="theme-button" onClick={() => handleThemeChange(theme)} className="theme-button">
      <Image src={getThemeIcon(theme)} alt="Theme Icon" objectFit="contain" />
    </button>
  );
}

function setAttribute(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("theme-button")?.setAttribute("data-theme", theme);
}


function getThemeIcon(theme: Theme) {
  switch (theme) {
    case Theme.Light:
      return sun;
    case Theme.Dark:
      return moon;
    default:
      return system;
  }
}
