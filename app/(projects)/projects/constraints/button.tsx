import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ConstraintsButton({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center cursor-pointer font-medium border border-transparent rounded px-4 h-9 text-sm text-[#241c15] bg-gray-200 transition-colors duration-200 hover:text-[#241c15] hover:bg-gray-500 ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
