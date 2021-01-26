import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

export default function SavedNewsHeader({savedArticles}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [keywords, setKeywords] = React.useState('');

  React.useEffect(() => {
    let keywordsArr = savedArticles.map(article => article.keyword)

    let keywordsCountArr = keywordsArr.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {})

    const keywordsSortArr = Object.entries(keywordsCountArr).sort((a, b) => b[1] - a[1]);

    if (keywordsSortArr.length <= 3) {
      setKeywords(keywordsSortArr.reduce((acc, el, index) => {
        acc = acc + el[0];
        if (index + 1 !== keywordsSortArr.length) {
          acc = acc + ', ';
        }
        return acc;
      }, ''));
    } else {
      setKeywords(`${keywordsSortArr[0][0]}, ${keywordsSortArr[1][0]} и ${keywordsSortArr.length - 2}-м другим`)
    }

  }, [savedArticles])

  return (
    <section className='SavedNewsHeader'>
      <h1 className='SavedNewsHeader__title'>Сохранённые статьи</h1>
      <h2 className='SavedNewsHeader__newsCount'>
        {`${currentUser.name}, у вас ${savedArticles.length} сохранённых статей`}
      </h2>
      <p className='SavedNewsHeader__keyword'>{`По ключевым словам: ${keywords}`}</p>
    </section>
  );
}
