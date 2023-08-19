import React from 'react';
import './CareerDetailCard.css'; // Import your CSS file for styling

const CareerDetailCard = ({ career }) => {
  return (
    <div className="career-card">
      <h2>{career.title}</h2>
      <p>Qualifications: {career.qualifications}</p>
      <p>Pay: {career.pay}</p>
      <p>Total Posts: {career.totalPosts}</p>
      <p>Exam: {career.exam}</p>
    </div>
  );
}

export default CareerDetailCard;
