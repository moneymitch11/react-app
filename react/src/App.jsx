import { Customers } from "./components/Customers.jsx"

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
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Pass</th>
            </tr>
        </thead>
        <tbody>
            <Customers />  
        </tbody>
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
