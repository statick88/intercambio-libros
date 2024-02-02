import { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch('/api/books', {
          headers: {
            'apikey': import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY
          }
        });
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    }

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
            <div>Published Date: {book.published_date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
