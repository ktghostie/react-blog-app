import { Link } from "react-router";
import { useAuth, useUsername } from "./authWrapper/AuthContext";

function Navbar() {
    const username = useUsername();
    const {logout} = useAuth();
    return (
        <nav>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/posts">Blog posts</Link>
            </button>
            <button>
                <Link to="/contact">Contact</Link>
            </button>
            <button>
                <Link to="/about">About</Link>
            </button>
            <button>
                {/*<Link to="/login">Login</Link>*/}
                {username ? <p onClick={logout}>Hi {username}, Logout</p> : <Link to="/login">Login</Link>}
            </button>
        </nav>
    )
}

export default Navbar;