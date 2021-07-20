// 2 -------------------------------------------------------------

import './AddUserForm.css';
import {useState} from 'react';

const AddUserForm = ({addUser})=> {


const [newUser, setNewUser] = useState({id: '', name: '', dept: '', email: ''})

const changeUser = (e)=>{
    const attname = e.target.name;
    const attvalue = e.target.value;

    console.log(attname+" || "+attvalue)
    const user = {...newUser, [attname] : attvalue}
    setNewUser(user)
    console.log(user)
}

const formSubmit = (e)=>{
    e.preventDefault();

    addUser(newUser);

    setNewUser({id: '', name: '', dept: '', email: ''})
    
}

    return(
        <div className = "AddUserForm">
            <form onSubmit={formSubmit}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID:</td>
                            <td>
                                <input type= "number" name= "id" value = {newUser.id} onChange = {changeUser}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input type= "text" name= "name" value = {newUser.name} onChange = {changeUser}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Department:</td>
                            <td>
                                <input type= "text" name= "dept" value = {newUser.dept} onChange = {changeUser}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input type= "text" name= "email" value = {newUser.email} onChange = {changeUser}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button class = "btn" type = "submit">Add</button>
                            </td>
                        </tr>
                  </tbody>
                </table>
        </form>
        </div>
    )
}

export default AddUserForm;

//-------------------------------------------------------------------

//or,

/* // 2 -------------------------------------------------------------

import './AddUserForm.css';

const AddUserForm = ({addUser})=> {

const formSubmit = (e)=>{
    e.preventDefault();

   //const id = console.log(e.target[0].value);
   // const name = console.log(e.target[1].value);
   // const dept = console.log(e.target[2].value);
   // const email = console.log(e.target[3].value);

    const id = e.target[0].value;
    const name = e.target[1].value;
    const dept = e.target[2].value;
    const email = e.target[3].value;

    const newUser = {id: id, name: name, dept: dept, email: email};

    addUser(newUser, "Nafi");

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    
}

    return(
        <div className = "AddUserForm">
            <form onSubmit={formSubmit}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID:</td>
                            <td>
                                <input type= "number" name= "id"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input type= "text" name= "name"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Department:</td>
                            <td>
                                <input type= "text" name= "dept"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input type= "text" name= "email"/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type = "submit">Add</button>
                            </td>
                        </tr>
                  </tbody>
                </table>
        </form>
        </div>
    )
}

export default AddUserForm;

//------------------------------------------------------------------- */