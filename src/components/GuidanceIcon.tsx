import type { SVGProps } from "react";

export function RiGuideLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4l-5 4V7h-3a1 1 0 0 0-1 1M5 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
      ></path>
    </svg>
  );
}
