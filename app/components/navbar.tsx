"use client";
import assert from 'assert';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import "./navbar.css";
import Link from 'next/link';
import ThemeSelector from './themeSelector';


interface NavBarProps {
  titles: Array<string>,
  urls: Array<string>
}

// Will need to readjust height if the navbar changes...
export default function NavBar(props: NavBarProps) {

  assert(
    props.titles.length === props.urls.length,
    "Titles and URLs must be the same length!"
  )

  const currentPage = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      console.log(e.target);
      if (e.target !== document.querySelector('.hamburger-icon')) {
        setOpen(false);
      }
      else {
        setOpen(!open);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });


  const links = props.titles.map((title, index) => {
    const className = `link text-nowrap ${currentPage === props.urls[index] ? 'selected' : ''}`
    return <Link
      key={index}
      href={props.urls[index]}
      className={className}
    >
      {title.toUpperCase()}
    </Link>
  });

  return (
    <>
      <div className='filler w-full'>
        <div className='navbar w-[80%] mx-auto flex items-center justify-between'>
          <h1 className='long-name w-1/3 text-nowrap'>Arnav Bista</h1>
          <h1 className='short-name w-1/3 text-nowrap'>AB</h1>
          <div className='navbar-links'>
            {links}
          </div>
          <div className='flex flex-row w-1/6'>
            <ThemeSelector />
            <div className={`hamburger ${open ? "open" : ""}`}>
              <h1 className={`hamburger-icon text-center`}>&#9776;</h1>
              <div className={`hamburger-dropdown ${open ? '' : 'hidden'}`}>
                {links}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='h-8' />
    </>
  );
}
