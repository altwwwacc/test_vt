import { render } from "react-dom";
import App from "./containers/App";
import "./styles/reset.scss";

const rootElement = document.getElementById("root");

render(<App />, rootElement);
