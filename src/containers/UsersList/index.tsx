import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { contactsSelector } from "../../module";
import "./styles.scss";

export default function UsersList() {
  const contacts = useSelector(contactsSelector);

  return (
    <ul className="list">
      {contacts.map((contact) => {
        return (
          <li className="item" key={contact.id}>
            <Link className="link" to={`/chat/${contact.id}`}>
              {contact.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
