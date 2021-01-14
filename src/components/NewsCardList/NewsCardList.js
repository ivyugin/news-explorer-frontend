import NewsCardListBody from '../NewsCardListBody/NewsCardListBody';

const NewsCards = [{
  _id: 123,
  sourceNname: 'Лента.ру',
  title: 'Национальное достояние – парки',
  description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
  urlToImage: 'https://www4.pictures.gi.zimbio.com/American+High+School+Basketball+Games+tComVKM3Dyax.jpg',
  time: '2 августа, 2019',
},
{
  _id: 123,
  sourceNname: 'Lenta',
  title: 'title',
  description: 'description',
  urlToImage: 'description',
},
{
  _id: 123,
  sourceNname: 'Лента.ру',
  title: 'Национальное достояние – парки',
  description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
  urlToImage: 'https://www4.pictures.gi.zimbio.com/American+High+School+Basketball+Games+tComVKM3Dyax.jpg',
  time: '2 августа, 2019',
},
{
  _id: 123,
  sourceNname: 'Лента.ру',
  title: 'Национальное достояние – парки',
  description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
  urlToImage: 'https://www4.pictures.gi.zimbio.com/American+High+School+Basketball+Games+tComVKM3Dyax.jpg',
  time: '2 августа, 2019',
},
{
  _id: 123,
  sourceNname: 'Лента.ру',
  title: 'Национальное достояние – парки',
  description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
  urlToImage: 'https://www4.pictures.gi.zimbio.com/American+High+School+Basketball+Games+tComVKM3Dyax.jpg',
  time: '2 августа, 2019',
},
];

export default function NewsCardList() {
  return (
    <section className='NewsCardList'>
      <h2 className='NewsCardList__title'>
        Результаты поиска
      </h2>
      <NewsCardListBody
        NewsCards={NewsCards}
        Main
      />
    <button className='NewsCardList__buttonMore'>
      Показать еще
    </button>
    </section>
  );
}
