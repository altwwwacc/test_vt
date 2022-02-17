import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../store";
import { Provider } from "react-redux";
import UsersList from "../UsersList";
import Chat from "../../components/Chat";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<UsersList />}></Route>
          <Route path="/chat/:contactId" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
