import {useState, useEffect} from 'react';
import {users} from '../usersData';
import {useParams} from 'react-router-dom';
import './AddUserForm.css';

const AddUserForm = ({status, callback})=> {

    const {id:eid}  = useParams();
    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        dept: '',
        email: '',
    });

    useEffect(()=>{
    if(status == "edit"){
    const  data = users.find((user)=> user.id === eid);
    setNewUser({...data});
    }   
},[])

    console.log(newUser);

    const changeUser = (e)=>{
        const attar = e.target.name;
        const value = e.target.value;
        const user = {...newUser, [attar] : value}; 
        setNewUser(user);
    }

    const formSubmit=(e)=>{
        e.preventDefault();

        if(status == 'add'){
            callback(newUser);
            setNewUser({
                id: '',
                name: '',
                dept: '',
                email: '',
            })

        }
        if(status == 'edit'){
            callback(newUser);
            setNewUser({
                id: '',
                name: '',
                dept: '',
                email: '',
            })

        }
    }

    return (
        <div className="form">
            <form onSubmit={formSubmit}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input type="number" name="id" value={newUser.id} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" value={newUser.name} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Dept</td>
                            <td>
                                <input type="text" name="dept" value={newUser.dept} onChange={changeUser} /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name="email" value={newUser.email} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className = "btn" type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default AddUserForm;