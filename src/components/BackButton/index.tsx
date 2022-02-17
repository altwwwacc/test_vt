import React from "react";
import { Link } from "react-router-dom";
import { TProps } from "./types";

export default function BackButton(props: TProps) {
  const { path = "/" } = props;

  return (
    <Link className="link" to={path}>
      <svg
        width="30"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
    </Link>
  );
}
