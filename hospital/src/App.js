import React from 'react';
import{
 BrowserRouter as Router,
 Routes,
 Route,
} from "react-router-dom";
import Body from './pages/Body';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  return (
    <>
    <div className="container-fluid p-0 m-0">
      <Router>
      <Routes>
        <Route path="/" element={<Body/>}></Route>
        <Route path="/Contact"element={<Contact/>}></Route>
        <Route path="/About"element={<About/>}></Route>
        <Route path="/Login"element={<Login/>}></Route>
      </Routes>
      </Router>
      </div>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
export default App; 
