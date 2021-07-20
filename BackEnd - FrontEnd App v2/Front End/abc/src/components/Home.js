import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Home() {

    const [data, setData] = useState([])

    useEffect(async()=>
    await axios.get('/api').then(response => {
        setData(response.data.reverse())
    }),[]
    );

    const deleteProfile = async (id)=>{
        await axios.delete(`/api/delete/${id}`)
        axios.get('/api').then(response => {
        setData(response.data.reverse())
    })
    }

    return (
        <div>
            This is the home section
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">User Id.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(user=>{
                            return(
                                <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                                <td><Link className="btn btn-primary" to={`/View/${user.id}`}>View</Link></td>
                                <td><Link className="btn btn-warning" to={`/Edit/${user.id}`}>Edit</Link></td>
                                <td><button className="btn btn-danger" onClick = {()=>  deleteProfile(user.id)}>Ban</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}