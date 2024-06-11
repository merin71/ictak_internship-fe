import React, { useState } from 'react';
import './SignUp.css';
import { Box, Grid, TextField, Button, FormHelperText, Alert } from '@mui/material';
import Form from 'react-bootstrap/Form'
import { Copyright } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailFormatValid, setIsEmailFormatValid] = useState(true);
  const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(true);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const inputHandler = (event) => {
    setInput({...input, [event.target.name]: event.target.value});

    if(event.target.name === "name") {
      setIsNameValid(event.target.value !== "");
    }

    if(event.target.name === "email") {
      setIsEmailValid(event.target.value !== "");
      setIsEmailFormatValid(validateEmail(event.target.value));

      if (validateEmail(event.target.value)) {
        axios.get("http://localhost:8080/emailexists?email=" + event.target.value).then(
          (response) => {
            setIsEmailExist(response.data.code === 200);
            setIsEmailValid(response.data.code !== 200);
          }
        );
      }
    }

    if(event.target.name === "password") {
      setIsPasswordValid(event.target.value !== "");
      setIsPasswordLengthValid(event.target.value.length >= 8);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if(input.name === "" || input.email === "" || input.password === "") {
      input.name === "" && setIsNameValid(false);
      input.email === "" && setIsEmailValid(false);
      input.password === "" && setIsPasswordValid(false);
    } else {
      if (isNameValid && isEmailValid && !isEmailExist && isPasswordValid) {
        axios.post("http://localhost:8080/signup", input).then(
          (response) => {
            console.log(response.data);
            if (response.data.status === "success") {
              sessionStorage.setItem("id", response.data.id);
              sessionStorage.setItem("name", response.data.name);
              navigate("/home");
            }
          }
        ).catch((err) => {
          console.log(err);
          setAlert(err.message);
          setTimeout(() => {
            setAlert("");
          }, 3000);
        });
      }
    }
  };

  return (
    <div className='sign-up'>
      <div className='sign-up-wrapper'>
        <Grid container component="main" className='wrapper-main'>
          <Grid className='sign-up-input' item xs={12} sm={8} md={6}>
            <Box
              sx={{
                mx: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start'
              }}
            >
              <h3 style={{ textAlign: 'left', color: '#014f86'}}>Welcome!</h3>
              <Box className='box-signup-form' component="form" noValidate sx={{ mt: 1 }}>
              <div>
                {/* <Form.Group id="role">
                   <Form.Label>Role</Form.Label>
                    <Form.Select name="role" value={input.role} onChange={inputHandler}>
                      <option value="">Select Role</option>
                      <option value="participant">Participant</option>
                      <option value="trainer">Trainer</option>
                      <option value="iqa">IQA</option>
                     </Form.Select>
                </Form.Group> */}
                </div>
                <TextField className='signup-field'
                  error={!isNameValid}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={input.name}
                  onChange={inputHandler}
                />
                <TextField
                  error={!isEmailValid}
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="E-mail Id"
                  id="email"
                  autoComplete="email"
                  value={input.email}
                  onChange={inputHandler}
                  helperText={isEmailFormatValid ? (isEmailExist ? "Email already exists." : "") : "Please enter a valid email-id."}
                />
                <TextField
                  error={!isPasswordValid}
                  type='password'
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="password"
                  value={input.password}
                  onChange={inputHandler}
                  helperText={isPasswordLengthValid ? "" : "Password must have at least 8 characters."}
                />
                <div className="input-group">
                  <Form.Check className='checkbox'
                    name='checkedCode'
                    type={'checkbox'}
                    id={`default-checkbox`}
                    label={`I agree`}
                  />
                </div>
                <Button className='signup-button'
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 2, backgroundColor: "#014f86",color:"#fff",fontFamily: "Poppins",cursor:"pointer",}}
                  onClick={handleRegister}
                >
                  Register
                </Button>
                <div className='login'>
                  <h5>Already have an account? <a href="/">Login</a></h5>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid className='sign-up-img'
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage: 'url("sign.png")',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              borderRadius: 3
            }}
          >
            <div className='sign-up-img-content'>
              <div className='img-size'>
                <img style={{height: '25px'}} src="ict_logo.png" alt="ict_logo"/>
              </div>
              <div className='img-content'>
                <h5><p className='title'>Get Started By Creating Account</p></h5>
              </div>
              <div className='copyright'>
                <p><Copyright /> ICT ACADEMY OF KERALA</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SignUp;
