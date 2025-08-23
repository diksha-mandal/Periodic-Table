import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="app-header">
            <h1>Periodic Table Explorer 🔬</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
}
