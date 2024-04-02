import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import TeacherCard from "../../Card/TeacherCard";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);
  const teachersPerPage = 4;

  useEffect(() => {
    const teachersRef = db.ref("teachers");
    teachersRef.on("value", (snapshot) => {
      const teachersData = snapshot.val();
      const teachersList = [];
      for (const key in teachersData) {
        teachersList.push({ ...teachersData[key], id: key });
      }
      setTeachers(teachersList.slice(0, 4));
    });

    return () => {
      teachersRef.off();
    };
  }, []);

  const handleLoadMore = () => {
    const startIndex = page * teachersPerPage;
    db.ref("teachers")
      .orderByChild("id")
      .startAt(startIndex)
      .limitToFirst(teachersPerPage)
      .on("value", (snapshot) => {
        const teachersData = snapshot.val();
        const newTeachers = [];
        for (const key in teachersData) {
          newTeachers.push({ ...teachersData[key], id: key });
        }
        setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers]);
        setPage((prevPage) => prevPage + 1);
      });
  };

  return (
    <div className="teachers-page">
      <h1 className="title">Our Teachers</h1>
      <div className="teachers-container">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
      <button
        className="load-more-button"
        onClick={handleLoadMore}
        style={{ opacity: teachers.length < 4 ? 0 : 1 }}
      >
        Load more
      </button>
      {/* Тут можна додати фільтри, за якими буде проводитись фільтрація вчителів */}
    </div>
  );
};

export default Teachers;
