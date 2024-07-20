import React from 'react'
import './App.css'
import Student, { Avatar, Testingprops, } from './assets/components/std';
import Navbar from './assets/components/navbar';
import Hero from './assets/components/hero';


export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Student name="Zaid Khan" age="17" isStudent={true} />
      <Student name='Daniyal' age='18' isStudent={!true} />
      <Student name='Jannat' age='17' isStudent={!false} />
      <Avatar />
      <Testingprops name="Zain" age={false} />
    </>
  )
}