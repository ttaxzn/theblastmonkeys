import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {Helmet} from 'react-helmet'

import Enter from "./pages/Enter"
import Contact from './pages/Contact';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';



function App() {
  return (
    <>
    <Helmet>
      <meta charSet='utf-8'/>
      <title>The Blast Monkeys</title>
      <meta name="description" content="Testing"/>
    </Helmet>
    <Router>
      <Routes>
      <Route path="/" element={<Enter/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/tour" element={<Tour/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/about" element={<About/>}/>




   

      </Routes>
        
        
    </Router>

   
    </>
  );
}

export default App;