import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import ChangePasswordIcon from "../icons/ChangePassword"
import LogoutIcon from "../icons/Logout"
import CertificateIcon from "../icons/Certificate"

type PersonalMenuProps = {
  openPersonalMenu: boolean
}

const PersonalMenu = ({ openPersonalMenu }: PersonalMenuProps) => {
  const { t } = useTranslation("studentMobileMenu")

  return (
    <div
      className={`absolute right-0 top-[72px] z-[9999] w-[308px] rounded-l-lg rounded-br-lg border-[0.5px] border-solid border-lightGray bg-darkGray px-5 py-10 shadow-[-4px_19px_38px_0_rgba(0,0,0,0.3),-10px_15px_12px_0_rgba(0,0,0,0.22)] transition-all duration-500 ${openPersonalMenu ? "visible translate-x-0" : "translate-x-[350px]"}`}
    >
      <div className="mb-6 flex flex-col gap-4">
        <h3 className="text-xl text-white">Євгенія Коломієць</h3>
        <p className="text-base text-[grayText]">Kolo812@gmail.com</p>
      </div>
      <div className="mb-20 flex flex-col">
        <div>
          <Link
            to="/student/certificate"
            className="flex items-center gap-2.5 border-b border-solid border-b-lightGray px-0 py-[16.5px] text-lg text-[white]"
          >
            <CertificateIcon />
            <span>{t("certificates")}</span>
          </Link>
        </div>
        <div>
          <Link
            to="/student/certificate"
            className="flex items-center gap-2.5 border-b border-solid border-b-lightGray px-0 py-[16.5px] text-lg text-[white]"
          >
            <ChangePasswordIcon />
            <span>{t("changePassword")}</span>
          </Link>
        </div>
      </div>
      <div>
        <button className="pointer flex w-full items-center gap-2.5 py-[16.5px] text-[grayText]">
          <LogoutIcon />
          <span className="text-lg">{t("exit")}</span>
        </button>
      </div>
    </div>
  )
}

export default PersonalMenu
