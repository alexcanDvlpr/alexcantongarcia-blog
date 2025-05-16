/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
}

const baseStyles: Record<HeadingLevel, string> = {
  1: "text-7xl font-semibold",
  2: "text-5xl font-semibold",
  3: "text-4xl font-semibold",
  4: "text-3xl font-semibold",
  5: "text-2xl font-semibold",
  6: "text-xl font-semibold",
};

export const Heading = ({ level, children, className = "" }: HeadingProps) => {
  const Tag = `h${level}` as any;

  return <Tag className={`${baseStyles[level]} ${className}`}>{children}</Tag>;
};
