import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhXEN-ettlTVIpXqjqC8INaeVaNkJlhVA ",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://lingualink-95805-default-rtdb.firebaseio.com/",
  projectId: "lingualink-95805",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "733931400355",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
