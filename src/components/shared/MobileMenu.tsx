import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Dispatch, SetStateAction } from "react"
import LanguageSwitcher from "../main/header/LanguageSwitcher"
import ReferenceIcon from "../icons/Reference"
import SertificateIcon from "../icons/Sertificate"
import ChangePasswordIcon from "../icons/ChangePassword"
import CloseIcon from "../icons/CloseIcon"
import LogoutIcon from "../icons/Logout"
import SupportIcon from "../icons/dashboard/SupportIcon"

type MobileMenuProps = {
  openMobileMenu: boolean
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({ openMobileMenu, setOpenMobileMenu }: MobileMenuProps) => {
  const { t } = useTranslation("studentMobileMenu")

  return (
    <div
      className={`fixed right-0 top-0 z-[9999] w-[280px] bg-graphite transition-all duration-500 md:hidden ${openMobileMenu ? "visible translate-x-0" : "translate-x-full"}`}
    >
      <div className="mb-[58px] flex h-14 items-center justify-between border-b border-solid border-b-darkGray pl-8 pr-5 text-white">
        <h3 className="text-xl">Меню</h3>
        <button onClick={() => setOpenMobileMenu(false)}>
          <CloseIcon />
        </button>
      </div>
      <div className="no-scrollbar h-[calc(100vh-56px)] overflow-y-scroll pl-8">
        <ul className="mb-[52px] flex flex-col gap-6">
          <li>
            <LanguageSwitcher activeColor="text-lime" />
          </li>
          <li>
            <Link
              to="/student/sertificate"
              className="flex items-center gap-4 text-base text-white"
            >
              <SertificateIcon />
              <span>{t("sertificates")}</span>
            </Link>
          </li>
          <li>
            <Link
              to="/student/sertificate"
              className="flex items-center gap-4 text-base text-white"
            >
              <ChangePasswordIcon />
              <span>{t("changePassword")}</span>
            </Link>
          </li>
          <li>
            <Link
              to="/student/support"
              className="flex items-center gap-4 text-base text-white"
            >
              <ReferenceIcon />
              <span>{t("support")}</span>
            </Link>
          </li>
          <li>
            <Link
              to="/student/reference"
              className="flex items-center gap-4 text-base text-white"
            >
              <SupportIcon width={30} />
              <span>{t("reference")}</span>
            </Link>
          </li>
        </ul>
        <button className="pointer flex w-full items-center gap-4 border-t border-solid border-t-darkGray px-0 py-4 text-lightGray">
          <LogoutIcon />
          <span className="text-base text-lightGray">{t("exit")}</span>
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
