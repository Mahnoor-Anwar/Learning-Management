import React from 'react';

import Class1to5 from './Class1to5';
import Class6to8 from './Class6to8';
import Class9to10 from './Class9to10';

const schedule = () => {
  const examData = [
    { subject: 'Mathematics', date: '2024-09-15', time: '10:00 AM' },
    { subject: 'Physics', date: '2024-09-16', time: '1:00 PM' },
    { subject: 'Chemistry', date: '2024-09-17', time: '10:00 AM' },
    { subject: 'Biology', date: '2024-09-18', time: '2:00 PM' },
    { subject: 'History', date: '2024-09-19', time: '11:00 AM' },
  ];

  const headers = [
    { label: 'Subject', key: 'subject' },
    { label: 'Date', key: 'date' },
    { label: 'Time', key: 'time' },
  ];

  return (
    <div className="exam-schedule-container">
      <h1 className="exam-title">Exam Schedule for All Classes</h1>
      <Class1to5 />
      <br></br>
      <Class6to8 />
      <br></br>
      <Class9to10 />
    </div>
  );
};

export default schedule;
