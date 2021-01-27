import React from 'react';
import * as NewsApi from '../../utils/NewsApi';

export default function SearchForm({searchQuery, setSearchQuery, handleFoundArticles, handleStartSearching, handleSearchError}) {

  function onInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleStartSearching();
    if (searchQuery !== '') {
      NewsApi.getUserInfo(searchQuery)
      .then((res) => {
        if (res) {
          handleFoundArticles(res.articles);
        } else {
          handleSearchError();
        }

      })
    } else {}

  }

  return (
    <section className='Search'>
      <div className='Search__body'>
        <h1 className='Search__title'>
          Что творится в мире?
        </h1>
        <p className='Search__subtitle'>
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
        </p>
        <form className='Search__form' onSubmit={handleSubmit}>
          <input
            required
            className='Search__form-input'
            placeholder='Введите тему новости'
            onChange={onInputChange}
            value={searchQuery || ''}
          />
          <button className='Search__form-button'>Искать</button>
        </form>
      </div>
    </section>
  );
}
