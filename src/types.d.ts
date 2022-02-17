export type TUser = {
  id: string;
  name: string;
};

export type TContact = Pick<TUser, "id" | "name"> & {
  messages: TMessages;
};

export type TContacts = TContact[];

export type TMessage = {
  id: string;
  text: string;
  userId: TUser["id"];
  createdAt: string;
};

export type TMessages = TMessage[];
