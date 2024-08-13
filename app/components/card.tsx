import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode,
  className?: string
}

export default function Card(props: CardProps) {
  return (
    <div className={`w-[80%] mx-auto rounded-xl ${props.className}`}>
      {props.children}
    </div>
  );
}
