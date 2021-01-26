import React from 'react';
import SearchForm from '../Search/Search';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Prelouder from '../Prelouder/Prelouder';
import NoResult from '../NoResult/NoResult';

export default function Main({
  handleSaveCard,
  searchQuery,
  setSearchQuery,
  foundArticles,
  handleFoundArticles,
  handleStartSearching,
  searching,
  handleSearchError,
  isErrorSearch,
  loggedIn,
  savedArticles,
  handleDeleteArticle,
}) {

  return (
    <>
      <SearchForm
        handleFoundArticles={handleFoundArticles}
        handleSearchError={handleSearchError}
        handleStartSearching={handleStartSearching}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {searching && <Prelouder />}
      {foundArticles && foundArticles.length > 0 && <NewsCardList foundArticles={foundArticles} loggedIn={loggedIn} handleSaveCard={handleSaveCard} savedArticles={savedArticles} handleDeleteArticle={handleDeleteArticle} />}
      {foundArticles && foundArticles.length === 0 && <NoResult isErrorSearch={isErrorSearch} />}
      <About/>
    </>
  );
}
