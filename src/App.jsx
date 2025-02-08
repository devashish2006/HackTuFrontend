import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import './index.css';
import Navbar from "./components/Navbar";


// function Home() { return <h1 className="text-white">Home Page</h1>; }
function About() { return <h1 className="text-white">About Page</h1>; }
function Learn() { return <h1 className="text-white">Learn Page</h1>; }
function Login() { return <h1 className="text-white">Login Page</h1>; }

function App() {
  return (

    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
