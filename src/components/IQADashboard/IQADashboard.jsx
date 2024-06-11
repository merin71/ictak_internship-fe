import React, { useState, useEffect } from 'react';
import './IQADashboard.css';
import Footer from '../Footer/Footer';

const IQADashboard = () => {
  const [completedCourses, setCompletedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchCompletedCourses();
  }, []);

  const fetchCompletedCourses = () => {
  
    const mockCourses = [
      {
        courseId: 1,
        courseName: 'Robotic Process Automation',
        ou: 'Academic',
        typeOfTraining: 'LTT',
        startDate: '2023-01-01',
        endDate: '2023-06-30',
        batchCount: 3,
        trainerName: 'John Doe',
        finalFeedback: 4.5
      },
      {
        courseId: 2,
        courseName: 'Certified Program in Data Science & Analytics',
        ou: 'Corporate',
        typeOfTraining: 'MDT',
        startDate: '2023-03-01',
        endDate: '2023-04-30',
        batchCount: 2,
        trainerName: 'Jane Smith',
        finalFeedback: 4.2
      },
      {
        courseId: 3,
        courseName: 'Accelerated Blockchain Competency Development',
        ou: 'Retail',
        typeOfTraining: 'Microskill',
        startDate: '2023-02-01',
        endDate: '2023-02-28',
        batchCount: 1,
        trainerName: 'Alice Johnson',
        finalFeedback: 4.8
      },
      {
        courseId: 4,
        courseName: 'Certified Specialist in Machine Learning & Artificial Intelligence',
        ou: 'Government',
        typeOfTraining: 'LTT',
        startDate: '2023-01-01',
        endDate: '2023-06-30',
        batchCount: 3,
        trainerName: 'Bob Brown',
        finalFeedback: 4.7
      },
      {
        courseId: 5,
        courseName: 'Advanced Java Programming',
        ou: 'Academic',
        typeOfTraining: 'LTT',
        startDate: '2023-01-15',
        endDate: '2023-07-15',
        batchCount: 2,
        trainerName: 'Charlie Green',
        finalFeedback: 4.6
      },
      {
        courseId: 6,
        courseName: 'Cybersecurity Fundamentals',
        ou: 'Corporate',
        typeOfTraining: 'MDT',
        startDate: '2023-02-01',
        endDate: '2023-04-01',
        batchCount: 1,
        trainerName: 'Diana White',
        finalFeedback: 4.4
      },
      {
        courseId: 7,
        courseName: 'Cloud Computing Essentials',
        ou: 'Retail',
        typeOfTraining: 'Microskill',
        startDate: '2023-03-01',
        endDate: '2023-03-31',
        batchCount: 1,
        trainerName: 'Edward Black',
        finalFeedback: 4.3
      },
      {
        courseId: 8,
        courseName: 'Project Management Professional',
        ou: 'Government',
        typeOfTraining: 'MDT',
        startDate: '2023-01-20',
        endDate: '2023-05-20',
        batchCount: 2,
        trainerName: 'Fiona Blue',
        finalFeedback: 4.6
      },
      {
        courseId: 9,
        courseName: 'Big Data Analytics',
        ou: 'Academic',
        typeOfTraining: 'LTT',
        startDate: '2023-02-01',
        endDate: '2023-08-01',
        batchCount: 3,
        trainerName: 'George Red',
        finalFeedback: 4.7
      },
      {
        courseId: 10,
        courseName: 'Machine Learning with Python',
        ou: 'Corporate',
        typeOfTraining: 'MDT',
        startDate: '2023-03-01',
        endDate: '2023-05-01',
        batchCount: 2,
        trainerName: 'Hannah Yellow',
        finalFeedback: 4.5
      }
    ];

    setCompletedCourses(mockCourses);
  };

  const handleMoreClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="iqa-dashboard">
      <h2>Recently Completed Training Programs</h2>
      <ul>
        {completedCourses.map(course => (
          <li key={course.courseId}>
            {course.courseName} - Feedback Score: {course.finalFeedback}
            <button onClick={() => handleMoreClick(course)}>More</button>
          </li>
        ))}
      </ul>
      {selectedCourse && (
        <div className="course-details">
          <h3>{selectedCourse.courseName}</h3>
          <p><strong>OU:</strong> {selectedCourse.ou}</p>
          <p><strong>Type of Training:</strong> {selectedCourse.typeOfTraining}</p>
          <p><strong>Start Date:</strong> {selectedCourse.startDate}</p>
          <p><strong>End Date:</strong> {selectedCourse.endDate}</p>
          <p><strong>Batch Count:</strong> {selectedCourse.batchCount}</p>
          <p><strong>Trainer Name:</strong> {selectedCourse.trainerName}</p>
          <p><strong>Feedback Score:</strong> {selectedCourse.finalFeedback}</p>
          <button onClick={() => setSelectedCourse(null)}>Close</button>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default IQADashboard;

