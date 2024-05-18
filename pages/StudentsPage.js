import React, { useEffect, useState } from 'react';
import StudentCard from './StudentCard'; // Import the StudentCard component

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the server
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <div className="student-cards">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
