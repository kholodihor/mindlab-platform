import Carousel from "@/components/shared/Carousel"
import TabPanel from "@/components/shared/TabPanel"
import { tabPanel } from "@/data/studying"
import { useWidth } from "@/hooks/useWidth"
import Progress from "@/components/main/studying/Progress"
import { topicsList } from "@/data/studying"

const StudyingPage = () => {
  const widthWiewport = useWidth()
  const lecturesCompleted = topicsList.filter(
    ({ completed }) => completed
  ).length
  const progress = Math.floor((lecturesCompleted / topicsList.length) * 100)
  const courses = [
    "Career guidance",
    "Political science-sociology",
    "Leadership",
    "Business",
    "Art",
    "Innovative technologies"
  ]

  return (
    <div className="pt-5 md:pt-10 3md:pt-0">
      {widthWiewport >= 744 && widthWiewport < 1100 && (
        <Progress
          progress={progress}
          completed={lecturesCompleted}
          course="Career guidance"
        />
      )}
      {widthWiewport < 744 && <Carousel data={courses} index={1} />}
      <TabPanel tabList={tabPanel} />
    </div>
  )
}

export default StudyingPage
