import { createClient } from '@supabase/supabase-js';
import AuthorForm from '../components/AutorForm';

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const AddAuthor = () => {
  const handleSubmit = async (name) => {
    try {
      const { data, error } = await supabase.from('authors').insert([{ name }]);
      if (error) {
        throw error;
      }
      console.log('Author added successfully:', data);
    } catch (error) {
      console.error('Error adding author:', error.message);
    }
  };

  return (
    <div>
      <h2>Add New Author</h2>
      <AuthorForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddAuthor;
