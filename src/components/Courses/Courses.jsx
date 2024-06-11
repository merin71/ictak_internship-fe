import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Courses.css';
import Footer from '../Footer/Footer';
import FeedBackForm from '../FeedBackForm/FeedBackForm';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [ouFilter, setOuFilter] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null); // For showing feedback form

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
   
    const initialCourses = [
      {
        courseId: 1,
        courseName: 'ROBOTIC PROCESS AUTOMATION',
        ou: 'Academic',
        description: 'Robotic Process Automation (RPA) is the use of software with artificial intelligence (AI) and machine learning capabilities to handle high-volume, repeatable tasks that previously required humans to perform.',
        availableForFeedback: true,
      },
      {
        courseId: 2,
        courseName: 'CERTIFIED PROGRAM IN DATA SCIENCE & ANALYTICS',
        ou: 'Corporate',
        description: 'Data Scientist or Data Analyst is a hot job title right now. Their challenges are often pretty amazing things which amuse people. So what do they do?',
        availableForFeedback: false,
      },
      {
        courseId: 3,
        courseName: 'ACCELERATED BLOCKCHAIN COMPETENCY DEVELOPMENT',
        ou: 'Retail',
        description: 'Accelerated Blockchain Development Program(ABCD) is a technology training programme facilitated by Govt. of Kerala, that will be of high industry relevance in the coming years. The interested candidates will have to register for an Entrance test.',
        availableForFeedback: false,
      },
      {
        courseId: 4,
        courseName: 'CERTIFIED SPECIALIST IN MACHINE LEARNING & ARTIFICIAL INTELLIGENCE',
        ou: 'Government',
        description: 'Machine Learning jobs are high in demand and continue to be the winners in today’s world. This course is complemented with the Data science course offering students a wider platform of recognition of Diploma.',
        availableForFeedback: false,
      }
    ];

    setCourses(initialCourses);
    setFilteredCourses(initialCourses);
  };

  const handleOuFilterChange = (event) => {
    setOuFilter(event.target.value);
    if (event.target.value === '') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course => course.ou === event.target.value);
      setFilteredCourses(filtered);
    }
  };

  const handleDeleteCourse = (courseId) => {
    const updatedCourses = courses.filter(course => course.courseId !== courseId);
    setCourses(updatedCourses);
    setFilteredCourses(updatedCourses);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseFeedback = () => {
    setSelectedCourse(null);
  };

  return (
    <div>
      <h2>Course Management</h2>
      <select value={ouFilter} onChange={handleOuFilterChange}>
        <option value="">All</option>
        <option value="Academic">Academic</option>
        <option value="Corporate">Corporate</option>
        <option value="Retail">Retail</option>
        <option value="Government">Government</option>
      </select>
      <ul>
        {filteredCourses.map(course => (
          <li key={course.courseId}>
            {course.courseName} - {course.ou}
            <button onClick={() => handleDeleteCourse(course.courseId)}>Delete</button>
            <button onClick={() => handleCourseClick(course)}>Details</button>
          </li>
        ))}
      </ul>
      <h3>Add New Course</h3>
      <form>
        <input type="text" placeholder="Course Name" />
        <select>
          <option value="Academic">Academic</option>
          <option value="Corporate">Corporate</option>
          <option value="Retail">Retail</option>
          <option value="Government">Government</option>
        </select>
        {/* Other input fields for course details */}
        <button type="submit">Add Course</button>
      </form>
      <div className="container">
        {filteredCourses.map((course, index) => (
          <div className="p-box" key={index}>
            <h4>{course.courseName}</h4>
            <p>{course.description}</p>
            <a href="#" onClick={() => handleCourseClick(course)}>Read more</a>
          </div>
        ))}
      </div>
      {selectedCourse && (
        <div>
          <h3>Course Details</h3>
          <p>{selectedCourse.courseName}</p>
          <p>{selectedCourse.description}</p>
          {/* Show feedback form if available for participant */}
          {selectedCourse.availableForFeedback && <FeedBackForm courseId={selectedCourse.courseId} />}
          <button onClick={handleCloseFeedback}>Close</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Courses;
