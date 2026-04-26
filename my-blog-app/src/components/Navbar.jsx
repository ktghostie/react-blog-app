import { Link } from "react-router";

function Navbar() {
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
                <Link to="/login">Login</Link>
            </button>
        </nav>
    )
}

export default Navbar;