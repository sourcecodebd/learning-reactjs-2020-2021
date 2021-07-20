import {Link} from  'react-router-dom';
import './Navbar.css'

const Navbar = ()=>{
    return (
        <div>
            <br/>
            <Link className = "topnav" to='/'>Home</Link> 
            <Link className = "topnav" to='/add'>Create user</Link>
            <Link className = "topnav" to='/userlist'>User list</Link>
            <br/>
        </div>
    );  
}
export default Navbar;