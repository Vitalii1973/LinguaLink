import React from "react";
import { db, auth } from "../services/firebase";

const TeacherCard = ({ teacher }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
    return unsubscribe;
  }, []);

  const toggleFavorite = () => {
    if (!user) {
      // Показати модальне вікно або повідомлення для неавторизованих користувачів
      return;
    }
    const userId = user.uid;
    const favoritesRef = db.ref(`users/${userId}/favorites`);
    if (isFavorite) {
      favoritesRef.child(teacher.id).remove();
    } else {
      favoritesRef.child(teacher.id).set(teacher);
    }
    setIsFavorite(!isFavorite);
  };

  // Решта коду для рендерингу компонента

  return <div className="teacher-card">{/* Решта коду */}</div>;
};

export default TeacherCard;
