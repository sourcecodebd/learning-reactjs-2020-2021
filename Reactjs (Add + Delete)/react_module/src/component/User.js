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
        <button class = "btn" onClick = {()=> deleteUser(id)}>Ban</button>
        </div>
  
      </>
    )
  }