import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "/images/header/logo.png"
import LogoMobile from "/images/header/mobile.png"
import LanguageSwitcher from "../main/header/LanguageSwitcher"
import BellIcon from "../icons/Bell"
import UserIcon from "../icons/UserIcon"
import MobileIcon from "../icons/MobileMenu"
import MobileMenu from "./MobileMenu"
import PersonalMenu from "./PersonalMenu"

type PageHeaderProps = {
  title?: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [openPersonalMenu, setOpenPersonalMenu] = useState(false)

  return (
    <div className="fixed right-0 top-0 z-[9999] w-full">
      <div className="flex w-full items-center justify-between border-b border-solid border-b-lightGray bg-graphite xs:px-[15px] xs:py-[13px] sm:px-5 md:h-[64px] md:px-5 md:py-2.5 xl:px-10">
        <div className="flex items-center xs:gap-4 md:gap-[50px] xl:gap-20">
          <div className="pointer">
            <Link to="/home">
              <img src={Logo} alt="ML" className="hidden md:block" />
              <img src={LogoMobile} alt="ML" className="md:hidden" />
            </Link>
          </div>
          <div>
            <h3 className="text-white xs:text-lg xs:leading-[130%] md:text-2xl xl:text-3xl xl:leading-[110%]">
              {title}
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between md:gap-10 xl:gap-0">
          <div className="xs:hidden md:block">
            <LanguageSwitcher activeColor="text-lime" />
          </div>
          <div className="flex xs:gap-6 md:gap-8">
            <div className="pointer">
              <BellIcon />
            </div>
            <div className="relative">
              <button
                className="pointer xs:hidden md:block"
                onClick={() => setOpenPersonalMenu(!openPersonalMenu)}
              >
                <UserIcon />
              </button>
              <button
                className="pointer xs:block md:hidden"
                onClick={() => setOpenMobileMenu(true)}
              >
                <MobileIcon />
              </button>

              <PersonalMenu openPersonalMenu={openPersonalMenu} />

              <MobileMenu
                openMobileMenu={openMobileMenu}
                setOpenMobileMenu={setOpenMobileMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
