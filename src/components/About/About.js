export default function About() {
  return (
    <section className='About'>
      <img className='About__avatar' src="https://metaratings.ru/upload/iblock/cc9/cc9d225a741a922d65a236b0d69ae2ce.jpg" alt='Аватар' />
      <div className='About__description-container'>
        <h2 className='About_title'>
          Об авторе
        </h2>
        <p className='About_description'>
          Это блок с описанием автора проекта.
          Здесь следует указать, как вас зовут, чем вы занимаетесь,
          какими технологиями разработки владеете.
          Также можно рассказать о процессе обучения в Практикуме,
          чему вы тут научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
}
