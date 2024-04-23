import css from './SearchBar.module.css';
import { Field, Formik, Form } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { IoSearch } from 'react-icons/io5';

export default function SearchBar({ onSearch }) {
  const notify = () => {
    toast.error('Search field must be field!', {
      duration: 2250,
      position: 'top-right',
    });
  };

  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query.trim() !== '') {
            onSearch(values.query);
            actions.resetForm();
          } else {
            notify();
          }
        }}
      >
        <div className={css.wrapper}>
          <Form className={css.searchBox}>
            <button type="submit" className={css.btnSearch}>
              <IoSearch className={css.search} />
            </button>
            <Field
              type="text"
              name="query"
              placeholder="Type to Search..."
              className={css.inputSearch}
            />
          </Form>
        </div>
      </Formik>
      <Toaster></Toaster>
    </header>
  );
}
