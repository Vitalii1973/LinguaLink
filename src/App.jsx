import { useEffect } from "react"; // Додайте імпорт useEffect з React

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { db, auth } from "./services/firebase"; // імпорт db та auth з вашого firebase.js
import Home from "./pages/Home/HomePage"; // імпорт компонента Home
import Teachers from "./pages/Teachers/TeachersPage"; // імпорт компонента Teachers
import Favorites from "./pages/Favorites"; // імпорт компонента Favorites

function App() {
  // Приклад використання db
  useEffect(() => {
    const usersRef = db.ref("users");
    usersRef.once("value", (snapshot) => {
      const users = snapshot.val();
      console.log("Users:", users);
    });
  }, []);

  // Приклад використання auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in:", user);
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
