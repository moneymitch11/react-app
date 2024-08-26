import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  
  const ondeleteclick = () =>{
    return console.log("In On Delete Click")
  } 

  const onsaveclick = () =>{
    return console.log("In On Save Click")
  } 

  const oncancelclick = () =>{
    return console.log("In On canclel Click")
  } 

  return (
  <>
    <h1>Customers List</h1>
    <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Pass</th>
        </tr>
        <tr>
          <td>mitchell</td>
          <td>mitch@example.com</td>
          <td>pass123</td>
        </tr>
    </table>
    <div>
      <h2>Update</h2>
      <form action="update">
        <div>
            <label>Name: </label><input type="name" />
        </div>
        <div>
            <label>Email: </label><input type="email" />
        </div>
        <div>
            <label>Pass: </label><input type="password" />
        </div>
      </form>
      <button onClick={ondeleteclick}>Delete</button>
      <button onClick={onsaveclick}>Save</button>
      <button onClick={oncancelclick}>Cancel</button>
    </div>
  </>
  )
}

export default App
