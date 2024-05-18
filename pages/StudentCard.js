import React from 'react';
import styles from './StudentCard.module.css'; // Import the CSS module for styling

const StudentCard = ({ student }) => {
  return (
    <div className={styles.studentCard}>
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Address: {student.address}</p>
      <p>Date of Birth: {student.dateOfBirth}</p>
      <p>Course: {student.course}</p>
    </div>
  );
};

export default StudentCard;
