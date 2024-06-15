import { useState } from "react"
import { useModalContext } from "@/context/ModalContext"
import LanguageSwitcher from "./LanguageSwitcher"
import MobileMenu from "@/components/main/header/MobileMenu"

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  
  return (
    <header className="flex h-[64px] w-full items-center justify-between bg-graphite px-4 py-[17px]  xl:px-[40px] 3xl:px-[80px]">
      <img src="/images/header/logo.png" alt="ML" className="hidden md:block" />
      <img src="/images/header/mobile.png" alt="ML" className="md:hidden" />
      <nav>
        <ul className="hidden gap-10 md:flex xl:gap-[80px]">
          <li>
            <LanguageSwitcher activeColor="text-lightViolet" />
          </li>
          <li>
            <img src="/images/header/bell.png" alt="notifications" />
          </li>
          <li>
            <img src="/images/header/chat.png" alt="chat" />
          </li>
          <li>
            <img src="/images/header/user.png" alt="profile" />
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setOpenMobileMenu(true)}>
          <img src="/images/header/bars.png" alt="" />
        </button>
        <MobileMenu
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      </nav>
    </header>
  )
}

export default Header
