import { Link } from "react-router-dom"
import LanguageSwitcher from "../main/header/LanguageSwitcher"
import ReferenceIcon from "../icons/Reference"
import SertificateIcon from "../icons/Sertificate"
import ChangePasswordIcon from "../icons/ChangePassword"
import CloseIcon from "../icons/CloseIcon"

const MobileMenu = () => {
  return (
    <div className="bg-graphite pl-8">
      <div className="flex h-14 items-center justify-between border-b border-solid border-b-darkGray pr-5 text-white">
        <h3 className="text-xl">Меню</h3>
        <button>
          <CloseIcon />
        </button>
      </div>
      <div>
        <ul className="flex gap-6">
          <li>
            <LanguageSwitcher activeColor="text-lime" />
          </li>
          <li>
            <Link
              to="/student/sertificate"
              className="flex gap-4 text-base text-white"
            >
              <SertificateIcon />
              <span>Сертифікати</span>
            </Link>
          </li>
          <li>
            <Link to="/student/sertificate">
              <ChangePasswordIcon />
              <span>Зміна паролю</span>
            </Link>
          </li>
          <li>
            <Link to="/student/support">
              <ReferenceIcon />
              <span>Підтримка</span>
            </Link>
          </li>
          <li>
            <Link to="/student/reference">
              <ReferenceIcon />
              <span>Довідка</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <span className="text-lightGray">Вийти LMS</span>
      </div>
    </div>
  )
}

export default MobileMenu
