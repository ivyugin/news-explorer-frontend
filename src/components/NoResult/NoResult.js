export default function NoResult({isErrorSearch}) {
  return(
    <section className='NoResult'>
      <div className='NoResult__img'></div>
      <h2 className='NoResult__title'>
        {isErrorSearch
          ? 'Во время запроса произошла ошибка.'
          : 'Ничего не найдено'}
      </h2>
      <p className='NoResult__subtitle'>
        {isErrorSearch
          ? 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          : 'К сожалению по вашему запросу ничего не найдено.'}
      </p>
    </section>
  )
}