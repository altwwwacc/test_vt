import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sendMessageAction } from "../../module";
import { TState } from "../../module/types";
import { TContact } from "../../types";
import Message from "../Message";
import BackButton from "../BackButton";
import { FIRST_MESSAGE_PLACEHOLDER } from "./constants";
import { TChatParams } from "./types";

export default function Chat() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const { contactId } = useParams<TChatParams>() as TChatParams;

  const contact = useSelector(
    (state: TState) =>
      state.contacts.find((contact) => contactId === contact.id) as TContact
  );

  const onChange = useCallback((event) => {
    setText(event.target.value);
  }, []);
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (text) {
        dispatch(sendMessageAction({ contactId, text }));

        setText("");
      }
    },
    [dispatch, contactId, text]
  );

  const placeholder = !contact.messages.length
    ? FIRST_MESSAGE_PLACEHOLDER
    : undefined;

  return (
    <section>
      <header>
        <BackButton />
        {contact.name}
      </header>
      <ul>
        {contact.messages.map((message) => {
          const isContact = message.userId === contactId;

          return (
            <Message key={message.id} {...message} isContact={isContact} />
          );
        })}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus
        />
        <button type="submit">{">"}</button>
      </form>
    </section>
  );
}
