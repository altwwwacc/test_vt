import { TMessage } from "../../types";

export type TProps = Pick<TMessage, "text" | "createdAt"> & {
  isContact: boolean;
};
