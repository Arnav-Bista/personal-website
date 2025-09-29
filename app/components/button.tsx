import Link from "next/link";
import { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const baseClasses = "button";
  const variantClass = `button-${variant}`;
  const allClasses = `${baseClasses} ${variantClass} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={allClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={allClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
}