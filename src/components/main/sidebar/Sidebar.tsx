import { NavLink, useLocation } from "react-router-dom"
import CoursesIcon from "@/components/icons/dashboard/CourseIcon"
import CalendarIcon from "@/components/icons/dashboard/CalendarIcon"
import EnglishIcon from "@/components/icons/dashboard/SpeakingIcon"
import EventIcon from "@/components/icons/dashboard/EventIcon"
import ForumIcon from "@/components/icons/dashboard/ForumIcon"
import SupportIcon from "@/components/icons/dashboard/SupportIcon"

const Sidebar = () => {
  /*const pathname = useLocation()
  console.log(pathname.pathname)
  const isLinkActive = (link: string) => {
    return pathname.pathname.split("/").includes(link)
  }*/

  return (
    <div className="w-full xs:bg-inherit xs:pl-[15px] xs:pr-[15px] xs:pt-[15px] sm:pl-5 sm:pr-5 sm:pt-[30px] md:bg-graphite md:pt-0 xl:max-w-[130px] xl:px-0 xl:pt-10">
      <ul className="flex flex-row items-center xs:gap-2.5 md:gap-0 xl:flex-col xl:gap-[15px]">
        <li className="xs:w-1/6 xl:w-full">
          <NavLink
            to={"/student/courses"}
            className="flex w-full cursor-pointer flex-col items-center gap-[10px] rounded-lg py-5 xs:bg-graphite xs:px-3 xs:py-2.5 xs:text-lightViolet sm:px-[22px] sm:py-3 md:px-0 md:py-[16px] md:text-lightGray"
          >
            <CoursesIcon width={24} />
            <span className="text-base text-inherit xs:hidden md:block">
              Мої курси
            </span>
          </NavLink>
        </li>
        <li className="xs:w-1/6 xl:w-full">
          <NavLink
            to={"/student/schedule"}
            className="flex w-full cursor-pointer flex-col items-center gap-[10px] rounded-lg py-5 xs:bg-graphite xs:px-3 xs:py-2.5 xs:text-lightViolet sm:px-[22px] sm:py-3 md:px-0 md:py-[16px] md:text-lightGray"
          >
            <CalendarIcon width={24} />
            <span className="text-base text-inherit xs:hidden md:block">
              Календар
            </span>
          </NavLink>
        </li>
        <li className="xs:w-1/6 xl:w-full">
          <NavLink
            to={"/student/speaking"}
            className="flex w-full cursor-pointer flex-col items-center gap-[10px] rounded-lg py-5 xs:bg-graphite xs:px-3 xs:py-2.5 xs:text-lightViolet sm:px-[22px] sm:py-3 md:px-0 md:py-[16px] md:text-lightGray"
          >
            <EnglishIcon width={24} />
            <span className="text-base text-inherit xs:hidden md:block">
              English
            </span>
          </NavLink>
        </li>
        <li className="xs:w-1/6 xl:w-full">
          <NavLink
            to={"/student/events"}
            className="flex w-full cursor-pointer flex-col items-center gap-[10px] rounded-lg py-5 xs:bg-graphite xs:px-3 xs:py-2.5 xs:text-lightViolet sm:px-[22px] sm:py-3 md:px-0 md:py-[16px] md:text-lightGray"
          >
            <EventIcon width={24} />
            <span className="text-base text-inherit xs:hidden md:block">
              Події
            </span>
          </NavLink>
        </li>
        <li className="xs:w-1/6 xl:w-full">
          <NavLink
            to={"/student/board"}
            className="flex w-full cursor-pointer flex-col items-center gap-[10px] rounded-lg py-5 xs:bg-graphite xs:px-3 xs:py-2.5 xs:text-lightViolet sm:px-[22px] sm:py-3 md:px-0 md:py-[16px] md:text-lightGray"
          >
            <ForumIcon width={24} />
            <span className="text-base text-inherit xs:hidden md:block">
              Форум
            </span>
          </NavLink>
        </li>
        <li className="xs:w-1/6 xl:w-full">
          <NavLink
            to={"/student/support"}
            className="flex w-full cursor-pointer flex-col items-center gap-[10px] rounded-lg py-5 xs:bg-graphite xs:px-3 xs:py-2.5 xs:text-lightViolet sm:px-[22px] sm:py-3 md:px-0 md:py-[16px] md:text-lightGray xl:last:mt-[55px]"
          >
            <SupportIcon width={24} />
            <span className="text-base text-inherit xs:hidden md:block">
              Підтримка
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
