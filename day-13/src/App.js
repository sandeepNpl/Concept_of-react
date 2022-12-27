import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Contact from './pages/Contact';


const App = () => {
  return (
    <div>
     <Router>
        <Routes>
          <Route index  element={<Homepage />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="aboutus" element={<Aboutus/>} />
          <Route path="*" element={<b>Page Not Found</b>} />
        </Routes>
     </Router>
    </div>
  )
}

export default App
