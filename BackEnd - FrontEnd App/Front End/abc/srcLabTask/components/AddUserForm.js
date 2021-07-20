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
        date: '',
        note: '',
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
                date: '',
                note: '',
            })

        }
        if(status == 'edit'){
            callback(newUser);
            setNewUser({
                id: '',
                name: '',
                dept: '',
                email: '',
                date: '',
                note: '',
                
            })

        }
    }

    return (
        <div className="form">
            <form onSubmit={formSubmit}>
                <center>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input type="number" className = "field" name="id" value={newUser.id} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" className = "field" name="name" value={newUser.name} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Dept</td>
                            <td>
                                <input type="text" className = "field" name="dept" value={newUser.dept} onChange={changeUser} /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" className = "field" name="email" value={newUser.email} onChange={changeUser}/> 
                            </td>   
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>
                                <input type="date" className = "field" name="date" value={newUser.date} onChange={changeUser}/> 
                            </td>   
                        </tr>
                        <tr>
                            <td>Note</td>
                            <td>
                                <textarea className = "fieldnote" name="note" rows="10" value={newUser.note} onChange={changeUser}/> 
                            </td>   
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className = "btn" type="submit">CREATE</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </center>
            </form>
        </div>
    );
}

export default AddUserForm;