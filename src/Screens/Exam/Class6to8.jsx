import React from 'react'
import { CSVLink } from 'react-csv';

const Class6to8 = () => {
    const examData = [
        { subject: 'Mathematics', date: '2024-09-15', time: '10:00 AM' },
        { subject: 'Science', date: '2024-09-16', time: '1:00 PM' },
        { subject: 'Social Studies', date: '2024-09-17', time: '10:00 AM' },
        { subject: 'Urdu', date: '2024-09-18', time: '2:00 PM' },
        { subject: 'English', date: '2024-09-19', time: '11:00 AM' },
      ];
    
      const headers = [
        { label: 'Subject', key: 'subject' },
        { label: 'Date', key: 'date' },
        { label: 'Time', key: 'time' },
      ];
    
  return (
    <div>
        <div className="exam-schedule-container">
      <h3 className="exam-title">Exam Schedule for class VI to VIII</h3>
      <table className="exam-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {examData.map((exam, index) => (
            <tr key={index}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
              <td>{exam.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CSVLink
        data={examData}
        headers={headers}
        filename="exam_schedule.csv"
        className="btn btn-primary mt-3 csv-btn"
      >
        Download Schedule
      </CSVLink>
    </div>
    </div>
  )
}

export default Class6to8
