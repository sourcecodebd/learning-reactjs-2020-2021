import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {userArray} from './userArray';
import User from './component/User';
import AddUserForm from './component/AddUserForm';
import EditUserForm from './component/EditUserForm';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './component/AddUserForm.css';


function UserList(){

const info = "User Information"

const [list, setUsers] = useState(userArray)


//Add User
const addUser = (newUser)=>{

  const newList = [...list, newUser]

  console.log(newUser)
  setUsers(newList)
}

//Delete User
const deleteUser = (id)=>{

  console.log(id)
  setUsers(list.filter((userId)=>userId.id != id))
}

//Edit User
const editUser = (newUser)=>{

  const newList = [...userArray, newUser]

  console.log(newUser)
  setUsers(newList)
}
  return(

    <Router>    
      <Navbar/> 

      <Switch>

          <Route exact path='/'>
              <h1>Welcome Home!</h1>
          </Route>

          <Route exact path='/add'>
              <AddUserForm addUser={addUser} /> 
          </Route>

          <Route path='/userlist'>
          <h1 className = "title">{info}</h1>
              {
                  list.map((user, index)=>{
                    return <User key={index} {...user} editUser={editUser} deleteUser={deleteUser} />;
                  })
              }
          </Route>

          <Route exact path='/edit/:id'> 
              <EditUserForm editUser = {editUser}/>
          </Route>
          
          <Route path='*'> <h1>404 not found</h1></Route>
      </Switch>

</Router>

    // <table>
    //   <thead></thead>
    //   <tbody>
    //     <tr>
    //       <td><AddUserForm addUser={addUser}/></td>

    //       <td>
    //         <h1 className = "title">{info}</h1>
    //           {
    //           list.map((ob, index) => <User key = {index} {...ob} deleteUser = {deleteUser}/>)
    //           }
    //       </td>

    //     </tr>
    // </tbody>
    // </table>
        )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//-------------------------------------------------------------------



/* // 1 -------------------------------------------------------------

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {userArray} from './userArray';
import User from './component/User';
import AddUserForm from './component/AddUserForm';
import './component/AddUserForm.css';

//Add User
function UserList(){

const [name, setName] = useState('xyz')
//let name = "xyz"


const addUser = (newUser, myname)=>{

  const newList = [...userArray, newUser]

  console.log(newUser)
  setName(myname)
  //name = myname
}

  return(
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td><AddUserForm addUser={addUser}/></td>

          <td>
              {
              userArray.map((ob, index) => <User key = {index} {...ob}/>)
              }
              {name}
          </td>

        </tr>
    </tbody>
    </table>
        )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//------------------------------------------------------------------- */