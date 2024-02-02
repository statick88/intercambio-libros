import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import AddAuthor from './pages/AddAutor'; 
import './index.css';

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/add-author" element={<AddAuthor />} /> 
        </Routes>
      </main>
    </div>
  );
};

export default App;
