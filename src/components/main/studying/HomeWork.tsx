const HomeWork = ({ topic }: any) => {
  return (
    <div className="mb-9 rounded-lg bg-graphite px-5 py-9 md:px-5 3md:mb-12 3md:w-[54.9%] 3md:px-10 3xl:w-[59.22%]">
      <div className="mb-9">
        <span className="pr-2">Тестове завдання:</span>
        <a href={topic.presentation} className="break-all text-violet">
          {topic.presentation}
        </a>
      </div>
      <div className="mb-9">
        <span className="pr-2">Додаткові матеріали:</span>
        <a href={topic.presentation} className="break-all text-violet">
          {topic.presentation}
        </a>
      </div>
      <p>Максимальний бал: 100</p>
    </div>
  )
}

export default HomeWork
