import React from 'react';

import 'bulma/css/bulma.css';
import './App.css';

import Navbar from './components/navigation';
import Education from './components/education';
import HomeSection from './components/home';
import AboutSection from './components/details';
import Qualifications from './components/qualification';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeSection/>
      <AboutSection/>
      <Education/>
      <Qualifications/>
    </div>
  );
}

export default App;
