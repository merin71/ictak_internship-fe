import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import FeedBackForm from './components/FeedBackForm/FeedBackForm';
import AboutUs from './components/AboutUs/AboutUs';
import Participant from './components/Participant/Participant';
import Iqa from './components/Iqa/Iqa';
import TraingCordinator from './components/TrainingCordinator/TraingCordinator';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<LandingPage/>}></Route>
        <Route path= '/' element={<SignIn/>}></Route>
        <Route path='/signup' element ={<SignUp/>}></Route>
        <Route path='/about-us' element ={<AboutUs/>}></Route>
        <Route path='/feedback' element ={<FeedBackForm/>}></Route>
        <Route path='/participant' element ={<Participant/>}></Route>
        <Route path='/trainer' element ={<TraingCordinator/>}></Route>
        <Route path='/iqa' element ={<Iqa/>}></Route>
        <Route path='/courses' element ={<Courses/>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
