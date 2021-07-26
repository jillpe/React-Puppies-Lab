import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        usersService.logOut();
        setUser(null);
    }
    return (
        <nav>
            <Link to="/puppies">Puppies</Link>
            &nbsp; | &nbsp;
            <Link to="/puppies/new">New Puppies</Link>
            &nbsp; | &nbsp;
            <span>
                <b>Welcome, {user.name}</b>
            </span>
            &nbsp; | &nbsp;
            <Link to='' onClick={handleLogOut}>
                Log Out
            </Link>
        </nav>
    );
}