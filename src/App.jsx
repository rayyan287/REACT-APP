import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from "./component/landingpage";
import Footer from "./component/footer"; 

function App() {
  return (
    <div>
      <LandingPage />
       <Footer />
    </div>
  )
}

export default App;
