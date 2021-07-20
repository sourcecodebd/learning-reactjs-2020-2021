import {Link} from 'react-router-dom'

export default function User({name, id, dept, email, deleteUser}){

    return(
      <>
        {console.log({name, id, dept, email})}
        <div className="usermain">

  
        <p> 
            <h1>{name}</h1>
            Id: {id}<br/>
            Department: {dept}<br/>
            Email: {email}<br/>
        </p>
        <Link class = "btn" to={`/edit/${id}`}>Edit</Link>
        <button class = "btn" onClick = {()=>  deleteUser(id)}>Ban</button>
        </div>
  
      </>
    )
  }