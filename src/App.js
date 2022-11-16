import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import Add from './Components/Add/Add';
import Private from './Components/Private/Private';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/add' element={
          <Private>
            <Add></Add>
          </Private>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
