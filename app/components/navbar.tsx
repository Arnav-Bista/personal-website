"use client";

import assert from 'assert';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import "./navbar.css";
import Link from 'next/link';


interface NavBarProps {
  titles: Array<string>,
  urls: Array<string>
}

// Will need to readjust height if the navbar changes...
export default function NavBar(props: NavBarProps) {

  assert(
    props.titles.length === props.urls.length,
    "Titles and URLs must be the same length"
  )

  const [page, setPage] = useState(0);
  const currentPage = usePathname();

  return (
    <>
      <div className='filler w-full'>
        <div className='navbar w-[80%] mx-auto flex items-center'>
          <div className='flex h-10 w-full'>
            <div className='flex-[4] text-3xl'>
              Arnav Bista
            </div>
            <div className='flex-[1] flex flex-row justify-evenly items-center w-[60%]'>
              {
                ...props.titles.map((title, index) => {
                  const className = `link mx-8 text-nowrap ${currentPage === props.urls[index] ? 'selected' : ''}`
                  return <Link
                    key={index}
                    href={props.urls[index]}
                    className={className}
                  >
                    {title.toUpperCase()}
                  </Link>
                }
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div className='h-8' />
    </>
  );
}
