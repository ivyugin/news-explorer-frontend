import NewsCardListBody from '../NewsCardListBody/NewsCardListBody';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';


export default function SavedNews({savedArticles, handleDeleteArticle, handleSaveCard}) {
  return (
    <>
      <SavedNewsHeader savedArticles={savedArticles}/>
      <NewsCardListBody NewsCards={savedArticles} handleDeleteArticle={handleDeleteArticle} handleSaveCard={handleSaveCard} />
    </>
  );
}
