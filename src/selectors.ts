import { createSelector } from "reselect";
import { formatTime } from "./utils";

export const formatTimeSelector = createSelector(
  (time: string) => time,
  formatTime
);
