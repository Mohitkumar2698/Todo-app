import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// import TodoState from "./context/TodoState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <TodoState>
  <Provider store={store}>
    <App />
  </Provider>
  // </TodoState>
);
