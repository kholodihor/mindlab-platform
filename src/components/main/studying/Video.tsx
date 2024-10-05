import { useEffect } from "react"
import ReactPlayer from "react-player"

const Video = ({ topic }: any) => {
  useEffect(() => {
    console.log("topic=>", topic)
  }, [topic])
  return (
    <div className="mb-6 h-[180px] px-[14px] sm:h-[229px] md:h-[390px] md:px-5 3md:mb-12 3md:w-[100%] 3md:pl-10 5xl:pr-10">
      <ReactPlayer url={topic?.lecture} width="100%" height="100%" />
    </div>
  )
}

export default Video
