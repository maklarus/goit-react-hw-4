import { useEffect, useState } from 'react';
import './App.css';
import { fetchUnsplashApi } from './UnsplashApi';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');

  function openModal(imgUrl) {
    toggle();
    setUrl(imgUrl);
  }

  const toggle = () => {
    setIsOpen(!modalIsOpen);
  };

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getArticles() {
      try {
        setIsLoading(true);
        const data = await fetchUnsplashApi(query, page);
        setArticles(prevArticles => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getArticles();
  }, [query, page]);

  const inputHandler = newQuery => {
    setArticles([]);
    setPage(1);
    const inputValue = newQuery;
    setQuery(inputValue);
  };

  const loadMoreHandler = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={inputHandler}></SearchBar>

      {error && <p>Oops, some error. Please reload!</p>}

      <ImageGallery openModal={openModal} items={articles}></ImageGallery>

      {isLoading && <Loader></Loader>}

      {articles.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={loadMoreHandler}></LoadMoreBtn>
      )}
      <ImageModal
        url={url}
        modalIsOpen={modalIsOpen}
        toggle={toggle}
      ></ImageModal>
    </>
  );
}

// try {
//   setIsLoading(true);
//   const data = await fetchUnsplashApi(newQuery);
//   setArticles(data);
// } catch (error) {
//   setError(true);
// } finally {
//   setIsLoading(false);
// }

// useEffect(() => {
//   async function getArticles() {
//     try {
//       setIsLoading(true);
//       const data = await fetchUnsplashApi('cat');
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   getArticles();
// }, []);
