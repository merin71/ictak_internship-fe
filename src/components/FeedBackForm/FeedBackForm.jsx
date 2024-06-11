import React, { useState } from 'react';
import {
  Container, Typography, Box, TextField, Button, Rating,
  FormControl, InputLabel, TextareaAutosize
} from '@mui/material';
import './FeedBackForm.css'
import { useNavigate } from 'react-router-dom';

const FeedBackForm = () => {
  const [formData, setFormData] = useState({
    relevance: 0,
    clarity: 0,
    confidence: 0,
    trainerRating: 0,
    enjoyment: '',
    comments: '',
    userId:''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleRatingChange = (event, newValue, name) => {
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.relevance = formData.relevance ? "" : "This field is required.";
    tempErrors.clarity = formData.clarity ? "" : "This field is required.";
    tempErrors.confidence = formData.confidence ? "" : "This field is required.";
    tempErrors.trainerRating = formData.trainerRating ? "" : "This field is required.";
    tempErrors.enjoyment = formData.enjoyment ? "" : "This field is required.";
    tempErrors.comments = formData.comments ? "" : "This field is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if(validate()){
    setSubmitted(true);
    setTimeout(() => {
      navigate("/home")
      // window.location.href = 'https://ictkerala.org';
    }, 1000);
   }
  };
  return (
    <div className="FeedBackForm">
      <Container maxWidth="sm">
      {/* <Typography variant="h4" gutterBottom>
        Training Feedback Form
      </Typography> */}
      {submitted ? (
        <Typography variant="h6" color="primary">
          Thank you for your valuable feedback.
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Box my={2}>
            <Typography variant="h6">
              The training course was relevant and helpful for me to relate.
            </Typography>
            <Rating
              name="relevance"
              value={formData.relevance}
              onChange={(event, newValue) => handleRatingChange(event, newValue, 'relevance')}
              max={5}
            />
            {errors.relevance && <Typography color="error">{errors.relevance}</Typography>}
          </Box>
          <Box my={2}>
            <Typography variant="h6">
              Delivery of the content was clear and understandable.
            </Typography>
            <Rating
              name="clarity"
              value={formData.clarity}
              onChange={(event, newValue) => handleRatingChange(event, newValue, 'clarity')}
              max={5}
            />
            {errors.clarity && <Typography color="error">{errors.clarity}</Typography>}
          </Box>
          <Box my={2}>
            <Typography variant="h6">
              I am confident in applying the learnings into practice.
            </Typography>
            <Rating
              name="confidence"
              value={formData.confidence}
              onChange={(event, newValue) => handleRatingChange(event, newValue, 'confidence')}
              max={5}
            />
            {errors.confidence && <Typography color="error">{errors.confidence}</Typography>}
          </Box>
          <Box my={2}>
            <Typography variant="h6">
              How would you rate the trainer?
            </Typography>
            <Rating
              name="trainerRating"
              value={formData.trainerRating}
              onChange={(event, newValue) => handleRatingChange(event, newValue, 'trainerRating')}
              max={5}
            />
            {errors.trainerRating && <Typography color="error">{errors.trainerRating}</Typography>}
          </Box>
          <Box my={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor="enjoyment"></InputLabel>
              <TextareaAutosize
                id="enjoyment"
                name="enjoyment"
                minRows={3}
                placeholder="What did you enjoy the most about the training session?"
                style={{ width: '100%', padding: '10px', fontSize: '16px', marginTop: '10px' }}
                value={formData.enjoyment}
                onChange={handleChange}
              />
              {errors.enjoyment && <Typography color="error">{errors.enjoyment}</Typography>}
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor="comments"></InputLabel>
              <TextareaAutosize
                id="comments"
                name="comments"
                minRows={3}
                placeholder="Any additional comments/suggestions"
                style={{ width: '100%', padding: '10px', fontSize: '16px', marginTop: '10px' }}
                value={formData.comments}
                onChange={handleChange}
              />
              {errors.comments && <Typography color="error">{errors.comments}</Typography>}
            </FormControl>
          </Box>
          <Box mt={3}>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{backgroundColor: "#014f86"}}>
              Submit
            </Button>
          </Box>
        </form>
      )}
    </Container>
    </div>
  )
}

export default FeedBackForm