import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import FeedBackForm from './components/FeedBackForm/FeedBackForm';
import AboutUs from './components/AboutUs/AboutUs';
import Participant from './components/Participant/Participant';
import TraingCoordinator from './components/TrainingCoordinator/TraingCoordinator';
import Courses from './components/Courses/Courses';
import IQADashboard from './components/IQADashboard/IQADashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path= '/login' element={<SignIn/>}></Route>
        <Route path='/signup' element ={<SignUp/>}></Route>
        <Route path='/about-us' element ={<AboutUs/>}></Route>
        <Route path='/feedback' element ={<FeedBackForm/>}></Route>
        <Route path='/participant-home' element ={<Participant/>}></Route>
        <Route path='/trainer-home' element ={<TraingCoordinator/>}></Route>
        <Route path='/iqa-home' element ={<IQADashboard/>}></Route>
        <Route path='/courses' element ={<Courses/>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
