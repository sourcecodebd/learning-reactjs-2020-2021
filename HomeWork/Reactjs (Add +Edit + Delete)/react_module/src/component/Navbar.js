import {Link} from  'react-router-dom';
import './Navbar.css'

const Navbar = ()=>{
    return (
        <div className = "nav">
            <Link class="topnav" to='/'>Home</Link>
            <Link class="topnav" to='/add'>Create user</Link>
            <Link class="topnav" to='/userlist'>User list</Link>
        </div>
    );  
}
export default Navbar;