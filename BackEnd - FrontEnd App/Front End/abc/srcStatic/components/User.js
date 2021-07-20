import {Link} from 'react-router-dom';

export default function User({name, id, dept, email, deleteUser}){
	return (
		<div className='usermain'>
			<h3>Name: {name}</h3>
			<p>
				ID: {id} <br/>
				DEPT: {dept} <br/>
				Email: {email} <br/>
			</p>			
			<button className = "btn" onClick={()=>deleteUser(id)}>Delete</button>
			<Link className = "btn" to={`/edit/${id}`}>Edit</Link>
		</div>
	)
};