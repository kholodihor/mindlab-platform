import { useModalContext } from "@/context/ModalContext"
import LanguageSwitcher from "./LanguageSwitcher"
import SocialButton from "./SocialButton"

const MobileMenu = ({ modalKey }: { modalKey: string }) => {
  const { modals, closeModal } = useModalContext()

  if (!modals[modalKey]) {
    return null
  }

  return (
    <div className="fixed right-0 top-0 z-[9999] min-h-[100vh] w-[280px] overflow-scroll border border-white bg-black">
      <div className="header flex h-[64px] items-center justify-between bg-graphite px-4 py-[17px]">
        <h2 className="mt-[5px] text-3xl leading-none">Меню</h2>
        <button onClick={() => closeModal(modalKey)}>
          <img src="/images/header/close.png" alt="" />
        </button>
      </div>
      <div className="body bg-black px-[40px] py-[80px]">
        <ul className="flex flex-col items-center justify-center gap-[40px]">
          <li className="flex w-full items-center gap-[20px] text-xl">
            <img src="/images/header/user.png" alt="profile" />
            <span>Профіль</span>
          </li>
          <li className="flex w-full items-center gap-[20px] text-xl">
            <img src="/images/header/bell.png" alt="profile" />
            <span>Сповіщення</span>
          </li>
          <li className="flex w-full items-center gap-[20px] text-xl">
            <img src="/images/header/chat.png" alt="profile" />
            <span>Повідомлення</span>
          </li>
          <li className="flex w-full items-center gap-[20px] text-xl">
            <img src="/images/header/help.png" alt="profile" />
            <span>Підтримка</span>
          </li>
        </ul>
        <div className="py-[40px]">
          <LanguageSwitcher activeColor="text-lime" />
        </div>
        <ul className="mb-[80px] flex flex-col items-center justify-center gap-[40px]">
          <li className="flex w-full items-center">
            <SocialButton title="instagram" image="/images/header/user.png" />
          </li>
          <li className="flex w-full items-center">
            <SocialButton title="email" image="/images/header/user.png" />
          </li>
          <li className="flex w-full items-center">
            <SocialButton title="facebook" image="/images/header/user.png" />
          </li>
          <li className="flex w-full items-center">
            <SocialButton title="telegram" image="/images/header/user.png" />
          </li>
          <li className="flex w-full items-center">
            <SocialButton title="веб сайт" image="/images/header/user.png" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
