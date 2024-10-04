import { useState } from 'react';
import './App.css';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Transition } from './components/Transitiion';

import About from './components/About';
import { Footer } from './components/Footer';



export default function App() {
  
  const [secContact, setSecContact] = useState(false)

  return (
    <>
      <Transition/>
      <Navbar secContact = {secContact} setSecContact = {setSecContact} />
      
      <main className='h-full w-full text-white bg-gray-900'>
        <Header />
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
      </main>
      
    </>
  )
}
