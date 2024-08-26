import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  
  
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
        <label>Name: <input type="name" /></label>
        <label>Email: <input type="email" /></label>
        <label>Pass: <input type="password" /></label>
      </form>
      <button>Delete</button>
      <button>Save</button>
      <button>Cancel</button>
    </div>
  </>
  )
}

export default App
