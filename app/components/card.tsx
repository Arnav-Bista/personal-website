import React, { ReactNode } from 'react';
import "./card.css";

interface CardProps {
  children: ReactNode,
  className?: string
  backdrop?: boolean
  // because i dont wanna update it everywhere
  notRounded?: boolean
}

export default function Card(props: CardProps) {
  let className = "";
  if (props.backdrop) {
    className = "card-backdrop";
  }
  if (props.notRounded) {
    className += "rounded-none"
  }
  return (
    <div className={`w-[80%] mx-auto rounded-xl ${props.className} ${className}`}>
      {props.children}
    </div>
  );
}
