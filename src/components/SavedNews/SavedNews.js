import NewsCardListBody from '../NewsCardListBody/NewsCardListBody';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

const NewsCards = [{
  _id: 123,
  sourceNname: 'Лента.ру',
  title: 'Национальное достояние – парки',
  description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
  urlToImage: 'https://www4.pictures.gi.zimbio.com/American+High+School+Basketball+Games+tComVKM3Dyax.jpg',
  time: '2 августа, 2019',
},
{
  _id: 124,
  sourceNname: 'Lenta',
  title: 'title',
  description: 'description',
  urlToImage: 'description',
}];

export default function SavedNews() {
  return (
    <>
      <SavedNewsHeader/>
      <NewsCardListBody NewsCards={NewsCards} />
    </>
  );
}
