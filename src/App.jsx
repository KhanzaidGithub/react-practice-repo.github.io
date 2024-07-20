import React from 'react'
import './App.css'
import Student, {Avatar, Testingprops } from './assets/components/std';
import Navbar from './assets/components/navbar';
export function App() {
  return (
    <>
      <Navbar />
      <Student name="Zaid Khan" age="17" isStudent={true} />
      <Student name='Daniyal' age='18' isStudent={!true} />
      <Student name='Jannat' age='17' isStudent={!false} />
      <Avatar />
      <Testingprops name="Zain" age={false} />
    </>
  )
}
