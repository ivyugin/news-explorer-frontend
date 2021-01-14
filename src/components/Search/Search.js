export default function SearchForm() {
  return (
    <section className='Search'>
      <h1 className='Search_title'>
        Что творится в мире?
      </h1>
      <p className='Search_subtitle'>
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
      </p>
      <form className='Search_form'>
        <input
          className='Search_form-input'
          placeholder='Введите тему новости'
        />
        <button className='Search_form-button'>Искать</button>
      </form>
    </section>
  );
}
