import BookForm from '../components/BookForm';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [published_date, setPublishedDate] = useState('');
  const [summary, setSummary] = useState('');
  const [author_id, setAuthorId] = useState('');

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const { data, error } = await supabase.from('authors').select('id');
        if (error) {
          throw error;
        }
        if (data && data.length > 0) {
          setAuthorId(data[0].id);
        }
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
        .insert([{ title, author_id, published_date, summary }]);
      if (error) {
        throw error;
      }
      console.log('Book added successfully:', data);
      setTitle('');
      setPublishedDate('');
      setSummary('');
    } catch (error) {
      console.error('Error adding book:', error.message);
    }
  };

  return (
    <BookForm
      title={title}
      setTitle={setTitle}
      published_date={published_date}
      setPublishedDate={setPublishedDate}
      summary={summary}
      setSummary={setSummary}
      handleSubmit={handleSubmit} />
  );
};

export default AddBook;
