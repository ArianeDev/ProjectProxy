import { Link } from 'react-router-dom';
import './style.sass';

export function Header(){
  return (
    <header>
        <h1>ProjectProxy</h1>
        <nav>
            <ul>
                <Link to="/" className="header-nav-link">
                    <li>Home</li>
                </Link>
                <Link to="/category" className="header-nav-link">
                    <li>Categorias</li>
                </Link>
                <Link to="/category" className="header-nav-link">
                    <li>Alguma coisa</li>
                </Link>
            </ul>
        </nav>
    </header>
  );
}