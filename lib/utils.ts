// Utility function for combining class names
// If clsx and tailwind-merge are not installed, this will still work for basic use
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

// If you want to use clsx and tailwind-merge, install them:
// npm install clsx tailwind-merge
// Then uncomment the code below and comment the code above:
/*
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
*/
