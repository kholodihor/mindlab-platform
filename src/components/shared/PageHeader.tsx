import { Link } from "react-router-dom"
import LanguageSwitcher from "../main/header/LanguageSwitcher"
import BellIcon from "../icons/Bell"
import UserIcon from "../icons/UserIcon"
import MobileIcon from "../icons/MobileMenu"

type PageHeaderProps = {
  title?: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="flex h-[64px] w-full items-center justify-between border-b-[lightGray] bg-graphite xs:px-[15px] xs:py-[13px] sm:px-5 md:px-5 md:py-2.5 xl:px-10">
      <div className="flex xs:gap-4 md:gap-[50px] xl:gap-20">
        <div className="pointer">
          <Link to="/home">
            <h2>ML</h2>
          </Link>
        </div>
        <div>
          <h3 className="text-white xs:text-lg xs:leading-[130%] md:text-2xl xl:text-3xl xl:leading-[110%]">
            {title}
          </h3>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="xs:hidden md:block">
          <LanguageSwitcher activeColor="text-white" />
        </div>
        <div className="flex xs:gap-6 md:gap-8">
          <div>
            <BellIcon />
          </div>
          <div>
            <button className="pointer xs:hidden md:block" onClick={() => {}}>
              <UserIcon />
            </button>
            <button className="pointer xs:block md:hidden" onClick={() => {}}>
              <MobileIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
