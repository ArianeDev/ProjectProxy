import { Link } from 'react-router-dom';
import './style.sass';

export function Header(){
  return (
    <header>
        <div>
            <h1>ProjectProxy</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="header-nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/tutoriais" className="header-nav-link">
                            Tutoriais
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Link to="/Cadastrar" className="header-button-link">
            <button>
                Adicionar
            </button>
        </Link>
    </header>
  );
}