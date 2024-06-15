import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"
import SocialButton from "./SocialButton"
import { Dispatch, SetStateAction } from "react"

type MobileMenuProps = {
  openMobileMenu: boolean
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({ openMobileMenu, setOpenMobileMenu }: MobileMenuProps) => {
  const { t } = useTranslation("mobileMenu")

  return (
    <div
      className={`fixed right-0 top-0 z-[9999] w-[280px] bg-black transition-all duration-500 md:hidden ${openMobileMenu ? "block translate-x-0" : "translate-x-[100%]"}`}
    >
      <div className="flex h-[64px] items-center justify-between bg-graphite px-4 py-[17px]">
        <h2 className="mt-[5px] text-3xl leading-none">Меню</h2>
        <button onClick={() => setOpenMobileMenu(false)}>
          <img src="/images/header/close.png" alt="" />
        </button>
      </div>
      <div className="no-scrollbar max-h-[calc(100vh-64px)] overflow-y-scroll bg-black px-[40px] py-[80px]">
        <ul className="flex flex-col items-center justify-center gap-[40px]">
          <li className="flex w-full items-center gap-[20px] text-xl">
            <img src="/images/header/user.png" alt="profile" />
            <span>{t("profile")}</span>
          </li>
          <li className="flex w-full items-center gap-[20px] text-xl">
            <img src="/images/header/bell.png" alt="profile" />
            <span>{t("notifications")}</span>
          </li>
          <li className="flex w-full items-center gap-[20px] text-xl">
            <img src="/images/header/chat.png" alt="profile" />
            <span>{t("messages")}</span>
          </li>
          <li className="flex w-full items-center gap-[20px] text-xl">
            <img src="/images/header/help.png" alt="profile" />
            <span>{t("support")}</span>
          </li>
        </ul>
        <div className="py-[40px]">
          <LanguageSwitcher activeColor="text-lime" />
        </div>
        <ul className="flex flex-col items-center justify-center gap-[40px]">
          <li className="flex w-full items-center">
            <SocialButton
              title="instagram"
              image="/images/header/instagram.png"
            />
          </li>
          <li className="flex w-full items-center">
            <SocialButton title="email" image="/images/header/mail.png" />
          </li>
          <li className="flex w-full items-center">
            <SocialButton
              title="facebook"
              image="/images/header/facebook.png"
            />
          </li>
          <li className="flex w-full items-center">
            <SocialButton
              title="telegram"
              image="/images/header/telegram.png"
            />
          </li>
          <li className="flex w-full items-center">
            <SocialButton title={t("website")} image="/images/header/web.png" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
