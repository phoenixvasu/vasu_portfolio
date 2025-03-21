import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { About, Education, Hero, Navbar, Tech, Works, Achievements,Footer, CourseWork} from './components';
// starting point
function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Navigation */}
        <Navbar />

        {/* Introduction Section */}
        <Hero />

        {/* About Section */}
        <About />
    {/* Tech Section */}
    <Tech />
    {/* Projects Section */}
    <Works />
    {/* Achievements Section */}
    <Achievements/>
    {/* CourseWork Section */}
    <CourseWork/>
        {/* Education Section */}
        <Education />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
