import './App.css';
import Button from './Components/Button/Button';
import Count from './Components/Change Button Color/ChangeBtnColor';
import ChangeBtnColor from './Components/Change Button Color/ChangeBtnColor';
import Demo from './Components/Demo/Demo';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {

  const redbg = { background: 'red' };
  const greenbg = { background: 'green' };
  return (
    // <div className="App">
    //   {/* <Button textContent="Click Me" style={greenbg} />
    //   <Button textContent="Slap Me" style={redbg} /> */}
    //   {/* <Count style={greenbg} /> */}


    // </div>

    <Router>
        {/* <Demo /> */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
