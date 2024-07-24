import React from 'react'

const Student = (props) => {
  return (
    <div className="container">
      <div className='student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}
export default Student

export let Testingprops = (test) => {
  return (
    <>
      <p>Name: {test.name}</p>
      <p>Age: {test.age ? "Above 18" : "not Eligible"}</p>
    </>
  )
}


export let Avatar = () => {
  return <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
}


// export function Navbar(){
//   <>
//   <ul className='ul'>
//     <li>Home</li>
//     <li>About</li>
//     <li>Services</li>
//     <li>Contact</li>
//   </ul>
//   </>
// }