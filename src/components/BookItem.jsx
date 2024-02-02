import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import PropTypes from 'prop-types';

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const BookItem = ({ book }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(book.title);
  const [newAuthorId, setNewAuthorId] = useState(book.author_id);
  const [newPublishedDate, setNewPublishedDate] = useState(book.published_date);
  const [newSummary, setNewSummary] = useState(book.summary);
  const [error, setError] = useState('');

  const handleUpdate = async () => {
    try {
      const { data, error } = await supabase
        .from('books')
        .update({ title: newTitle, author_id: newAuthorId, published_date: newPublishedDate, summary: newSummary })
        .eq('id', book.id);
      if (error) {
        throw error;
      }
      console.log('Book updated successfully:', data);
      setEditing(false);
      setError('');
    } catch (error) {
      console.error('Error updating book:', error.message);
      setError('Error updating book: ' + error.message);
    }
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newAuthorId}
            onChange={(e) => setNewAuthorId(e.target.value)}
          />
          <input
            type="date"
            value={newPublishedDate}
            onChange={(e) => setNewPublishedDate(e.target.value)}
          />
          <textarea
            value={newSummary}
            onChange={(e) => setNewSummary(e.target.value)}
          />
          <button onClick={handleUpdate}>Guardar</button>
          <button onClick={() => setEditing(false)}>Cancelar</button>
          {error && <p>{error}</p>}
        </div>
      ) : (
        <div>
          <h3>{book.title}</h3>
          <p>Autor ID: {book.author_id}</p>
          <p>Fecha de Publicación: {book.published_date}</p>
          <p>Resumen: {book.summary}</p>
          <button onClick={() => setEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
