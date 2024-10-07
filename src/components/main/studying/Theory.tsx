const Theory = ({ topic }: any) => {
  return (
    <div className="p-[14px] md:px-5 3md:mb-12 3md:pl-10 3md:pr-5 3xl:pr-10">
      <div className=" rounded-lg bg-graphite px-5 py-9 ">
        <p className="mb-9">{topic.theory}</p>
        <div className="mb-9">
          <span className="pr-2">Презентація уроку:</span>
          <a href={topic.presentation} className="break-all text-violet">
            {topic.presentation}
          </a>
        </div>
        <div>
          <span className="pr-2">Додаткові матеріали:</span>
          <a href={topic.presentation} className="break-all text-violet">
            {topic.presentation}
          </a>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Theory
