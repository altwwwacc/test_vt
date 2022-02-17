import { TContacts, TUser } from "../types";

export type TState = {
  me: TUser;
  contacts: TContacts;
};
