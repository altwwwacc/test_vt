import { configureStore } from "@reduxjs/toolkit";
import reducer from "./module";

export const store = configureStore({
  reducer
});
