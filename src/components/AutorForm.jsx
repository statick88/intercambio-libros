import { useState } from 'react';
import PropTypes from 'prop-types';

const AuthorForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="authorName">Author Name:</label>
      <input
        type="text"
        id="authorName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Author</button>
    </form>
  );
};

AuthorForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AuthorForm;
