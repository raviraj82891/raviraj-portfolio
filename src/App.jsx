import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"
import { Navbar } from './components/Navbar';
import { Home } from './components/section/Home';
import { About } from './components/section/About';
import { Projects } from './components/section/Projects';
import { MoblieMenu } from './components/MoblieMenu';
import { Contact } from './components/section/Contact';

function App() {
  
  const [isLoaded,setIsLoaded]= useState(false);
  const [menuOpen, setMenuOpen ]= useState(false)
  return (
    <>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
          <div className= {`min-h-screen transition-opacity duration-700 ${isLoaded? "opacity-100": "opacity-0" } bg-black text-grey-100 `}> 
          <Navbar menuOpen={menuOpen} setMenuOpen= {setMenuOpen}/> 
          <MoblieMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home/>
          <About/>
          <Projects />
          <Contact/>


          </div>
    </>
  );
}

export default App
