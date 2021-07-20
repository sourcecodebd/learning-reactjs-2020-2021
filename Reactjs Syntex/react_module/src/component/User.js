const info = "User Information"

export default function User({name, id, email}){

    return(
      <>
        {console.log({name, id, email})}
        <div className="usermain">
        <h1>{info}</h1>
  
        <p>These values are retrieved by props</p>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick = {()=>alert(name)}>Click</button>
        </div>
  
      </>
    )
  }