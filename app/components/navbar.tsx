"use client";
import assert from 'assert';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import "./navbar.css";
import Link from 'next/link';
import ThemeSelector from './themeSelector';


interface NavBarProps {
  titles: Array<string>,
  urls: Array<string>
}

export default function NavBar(props: NavBarProps) {
  assert(
    props.titles.length === props.urls.length,
    "Titles and URLs must be the same length!"
  )

  const currentPage = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = props.titles.map((title, index) => {
    const className = `link text-nowrap ${currentPage === props.urls[index] ? 'selected' : ''}`
    return <Link
      key={index}
      href={props.urls[index]}
      className={className}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {title.toUpperCase()}
    </Link>
  });

  return (
    <>
      <div className='navbar-container'>
        <div className='navbar-island'>
          <div className='navbar-content'>
            <div className='navbar-links-container'>
              {links}
            </div>
            <div className='navbar-mobile-menu'>
              <button
                className='dropdown-button'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span className='dropdown-text'>LINKS</span>
                <span className={`dropdown-arrow ${isMobileMenuOpen ? 'open' : ''}`}>›</span>
              </button>
              {isMobileMenuOpen && (
                <div className='mobile-dropdown'>
                  {links}
                </div>
              )}
            </div>
            <div className='navbar-controls'>
              <ThemeSelector />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
