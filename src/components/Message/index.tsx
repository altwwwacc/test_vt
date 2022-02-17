import React from "react";
import cn from "classnames";
import { formatTimeSelector } from "../../selectors";
import { TProps } from "./types";
import "./styles.scss";

export default function Message(props: TProps) {
  const { text, createdAt, isContact } = props;

  const time = formatTimeSelector(createdAt);

  return (
    <li className={cn("message", isContact && "contact")}>
      <p>{text}</p>
      <aside>{time}</aside>
    </li>
  );
}
