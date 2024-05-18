import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path= '/login' element={<SignIn/>}></Route>
        <Route path='/signup' element ={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
