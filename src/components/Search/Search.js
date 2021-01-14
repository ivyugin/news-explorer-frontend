export default function SearchForm() {
  return (
    <section className='Search'>
      <div className='Search__body'>
        <h1 className='Search__title'>
          Что творится в мире?
        </h1>
        <p className='Search__subtitle'>
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
        </p>
        <form className='Search__form'>
          <input
            className='Search__form-input'
            placeholder='Введите тему новости'
          />
          <button className='Search__form-button'>Искать</button>
        </form>
      </div>
    </section>
  );
}
