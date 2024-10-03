import { useState } from 'react';
import './App.css';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Transition } from './components/Transitiion';
import { Skills } from './components/Skills';



export default function App() {
  
  const [secContact, setSecContact] = useState(false)

  return (
    <>
      <Navbar secContact = {secContact} setSecContact = {setSecContact} />
      
      <main className='h-full w-full text-white bg-gray-900'>
        <Header />
        <Skills/>
        <Contact secContact = {secContact} setSecContact = {setSecContact} />
      </main>
    </>
  )
}
