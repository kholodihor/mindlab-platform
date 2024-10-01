import { useEffect } from "react"
import ReactPlayer from "react-player"

const Video = ({ topic }: any) => {
  useEffect(() => {
    console.log("topic=>", topic)
  }, [topic])
  return (
    <div className="mb-6 px-[14px]">
      <ReactPlayer url={topic.lecture} width="100%" height="228px" />
    </div>
  )
}

export default Video
