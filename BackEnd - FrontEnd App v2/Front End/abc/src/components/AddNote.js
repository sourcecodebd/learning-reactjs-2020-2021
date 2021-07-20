import React, {useState} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function Add() {

    let redirect= useHistory()

    const [add, setAdd] = useState({
    name: '', 
    email: ''
    })

    const {name, email} = add

    const changeUser = (e)=>{
        setAdd({...add, [e.target.name] : e.target.value})
    }
    
    const formSubmit = (e)=>{
        e.preventDefault();

        axios.post('http://localhost:8000/api/add', add).then((response) => {
            setAdd({name: '', email: ''})
            redirect.push('/')
        
        })

        // axios.post('http://localhost:8000/api/add', add);

        // setAdd({name: '', email: ''})
        // redirect.push('/')
        
    }
    

    return (
        <div>
            This is the add note section
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
                <button type="submit" className="btn btn-success">Create</button>
            </form>
            </div>
        </div>
    )
}
