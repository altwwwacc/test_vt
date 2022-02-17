import { createAction, createReducer } from "@reduxjs/toolkit";
import { TContact, TMessage } from "../types";
import { TState } from "./types";
import { me, contacts, createMessage } from "../mocks";

const initialState: TState = {
  me,
  contacts
};

export const contactsSelector = (state: TState) => state.contacts;

export const sendMessageAction = createAction<{
  contactId: TContact["id"];
  text: TMessage["text"];
}>("message/send");

export default createReducer(initialState, (builder) =>
  builder.addCase(sendMessageAction, (state, action) => {
    const { contactId, text } = action.payload;
    const { me, contacts } = state;

    state.contacts = contacts.map((contact) => {
      if (contactId !== contact.id) return contact;

      const message = createMessage(me.id, text);

      return {
        ...contact,
        messages: [...contact.messages, message]
      };
    });
  })
);
