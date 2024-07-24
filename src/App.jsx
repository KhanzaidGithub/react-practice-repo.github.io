import React from 'react'
import './App.css'
import Student, { Avatar, Testingprops, } from './components/std';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Antdesign from './components/antdesign';
import Array from './components/antdesign';
import Btnsmall from './components/btnsmall';
import Challenge from './components/challengeArray'
import Newarray from './components/newarray';
import States from './components/states'
import StateTest from './components/stateTest';


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
      <Btnsmall />
      <Antdesign />
      <Array />
      <Challenge />
      <Newarray />
      <States />
      <StateTest />
    </>
  )
}