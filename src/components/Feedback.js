import React, { useState } from 'react';
// import background from './public/images/Background.jpg'; // Adjust path as needed
import './Feedback.css'; 

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    feedback: '',
    rating: 0
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    // Add form submission logic here
  };

  const handleStarClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    setFormData((prev) => ({
      ...prev,
      rating: newRating
    }));
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        onClick={() => handleStarClick(index)}
        className={`star-icon ${rating > index ? 'filled' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.6-.921 1.899 0l1.1 3.413a1.8 1.8 0 001.704 1.171l3.565.261c.964.071 1.353 1.247.653 1.881l-2.68 2.303a1.8 1.8 0 00-.526 1.872l.712 3.63c.206 1.021-1.055 1.799-1.979 1.271L12 15.658l-3.378 2.11c-.924.528-2.185-.25-1.979-1.271l.712-3.63a1.8 1.8 0 00-.526-1.872l-2.68-2.303c-.7-.634-.311-1.81.653-1.881l3.565-.261a1.8 1.8 0 001.704-1.171l1.1-3.413z"
        />
      </svg>
    ));
  };

  return (
    <div
      className="feedback-container"
    //   style={{ backgroundImage: `url(${background})` }}
    >
      <div className="feedback-form">
        <h1 className="feedback-title">Feedback Form</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              value={formdata.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="department" className="form-label">Department</label>
            <select
              id="department"
              name="department"
              value={formdata.department}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select a department</option>
              <option value="water-sewer">Water and Sewer Department</option>
              <option value="road">Road Department</option>
              <option value="electricity">Electricity Department</option>
              <option value="waste-management">Waste Management Department</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="feedback" className="form-label">Feedback</label>
            <textarea
              id="feedback"
              value={formdata.feedback}
              onChange={handleChange}
              placeholder="Enter your feedback here"
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Rating</label>
            <div className="stars">
              {renderStars()}
            </div>
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
