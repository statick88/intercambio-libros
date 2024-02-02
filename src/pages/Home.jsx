import { Link } from 'react-router-dom';
import BookList from '../components/BookList';

const Home = () => {
  return (
    <div>
      <h1>Plataforma de Intercambio de Libros</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link>
          </li>
          <li>
            <Link to="/add-author">Add Author</Link>
          </li>
        </ul>
      </nav>
      <BookList />
      <footer>
        <p>© 2024 Plataforma de Intercambio de Libros</p>
      </footer>
    </div>
  );
};

export default Home;
