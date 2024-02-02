import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [summary, setSummary] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const { data, error } = await supabase.from('authors').select('id, name');
        if (error) {
          throw error;
        }
        setAuthors(data || []);
      } catch (error) {
        console.error('Error fetching authors:', error.message);
      }
    }

    fetchAuthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('books')
        .insert([{ title, author_id: authorId, published_date: publishedDate, summary }]);
      if (error) {
        throw error;
      }
      console.log('Book added successfully:', data);
      setTitle('');
      setPublishedDate('');
      setSummary('');
      setError('');
    } catch (error) {
      console.error('Error adding book:', error.message);
      setError('Error adding book: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="publishedDate">Published Date:</label>
          <input
            type="date"
            id="publishedDate"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <select
            id="author"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            required
          >
            <option value="">Select an author</option>
            {authors.map(author => (
              <option key={author.id} value={author.id}>{author.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
