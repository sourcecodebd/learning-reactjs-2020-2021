import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

export default function Edit() {

    let redirect = useHistory()

    const {id} = useParams();
    
    const [edit, setEdit] = useState({
    name: '', 
    email: ''
    })

    const {name, email} = edit

    const changeUser = (e)=>{
        setEdit({...edit, [e.target.name] : e.target.value})
    }

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/edit/${id}`)
        console.log(result)
        setEdit(result.data)
        }

    const formSubmit = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/update/${id}`, edit).then((response) => {
            setEdit({name: '', email: ''})
            redirect.push('/')
        })

        // axios.post(`http://localhost:8000/api/update/${id}`, edit);

        // setEdit({name: '', email: ''})
        // redirect.push('/')
    }
    

    return (
        <div>
            This is the edit note section
            <div class="centerStyle">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name= "name" value={name} onChange= {changeUser} className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name= "email" value={email} onChange= {changeUser} className="form-control"  placeholder="Enter Email"/>
                </div>
                <button type="submit" className="btn btn-warning">Save</button>
            </form>
            </div>
        </div>
    )
}
