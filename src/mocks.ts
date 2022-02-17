import { TUser, TMessage, TContacts, TMessages, TContact } from "./types";

export const createUser = (() => {
  let id = 0;

  return (name: TUser["name"]): TUser => {
    return {
      id: (id++).toString(),
      name
    };
  };
})();

export const createContact = (
  user: ReturnType<typeof createUser>,
  ...messages: TMessages
): TContact => {
  return {
    ...user,
    messages
  };
};

export const createMessage = (() => {
  let id = 0;

  return (userId: TUser["id"], text: TMessage["text"]): TMessage => {
    return {
      id: (id++).toString(),
      text,
      userId,
      createdAt: new Date().toString()
    };
  };
})();

export const me = createUser("Vlad");

const Nikolai = createUser("Nikolai");
const Anton = createUser("Anton");
const Denis = createUser("Denis");

const NikolaiContact = createContact(
  Nikolai,
  createMessage(me.id, "Hi"),
  createMessage(Nikolai.id, "Hi"),
  createMessage(Nikolai.id, "Whats up?")
);
const AntonContact = createContact(Anton);
const DenisContact = createContact(Denis);

export const contacts: TContacts = [NikolaiContact, AntonContact, DenisContact];
