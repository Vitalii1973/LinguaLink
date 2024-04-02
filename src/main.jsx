import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { db, auth } from "./services/firebase"; // імпортуємо db та auth з вашого firebase.js

// Використовуємо createRoot замість ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App db={db} auth={auth} />
    </BrowserRouter>
  </React.StrictMode>
);
