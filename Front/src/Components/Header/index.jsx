import { Link } from 'react-router-dom';
import './style.sass';

export function Header(){
  return (
    <header>
        <h1>ProjectProxy</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/" className="header-nav-link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/category" className="header-nav-link">
                        Categorias
                    </Link>
                </li>
                <li>
                    <Link to="/category" className="header-nav-link">
                        Alguma coisa
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}