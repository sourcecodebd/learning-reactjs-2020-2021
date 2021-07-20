import {Link} from 'react-router-dom';

export default function User({name, id, dept, email, date, note, deleteUser}){
	return (
		<div className='usermain'>
			<div className = "name"><h2>{name}</h2></div>
			
			<p>
				ID: {id} <br/><br/>
				DEPT: {dept} <br/><br/>
				Email: {email} <br/><br/>
				Date: {date} <br/><br/>
				Note: {note} <br/><br/>
			</p>			
			<button className = "btn" onClick={()=>deleteUser(id)}>Delete</button>
			<Link className = "btn" to={`/edit/${id}`}>Edit</Link>
		</div>
	)
};