import LanguageSwitcher from "./LanguageSwitcher"

const Header = () => {
  return (
    <header className="flex h-[64px] w-full items-center justify-between bg-graphite px-4 py-[17px]  xl:px-[40px] 3xl:px-[80px]">
      <img src="/images/header/logo.png" alt="ML" />
      <div className="flex gap-10 xl:gap-[80px]">
        <LanguageSwitcher />
        <img src="/images/header/bell.png" alt="notifications" />
        <img src="/images/header/chat.png" alt="chat" />
        <img src="/images/header/user.png" alt="profile" />
      </div>
    </header>
  )
}

export default Header
