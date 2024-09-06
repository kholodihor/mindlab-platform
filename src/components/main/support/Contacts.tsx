import { Link } from "react-router-dom"
import MailIcon from "@/components/icons/contacts/Mail"
import WebsiteIcon from "@/components/icons/contacts/Website"
import FacebookIcon from "@/components/icons/contacts/Facebook"
import InstagramIcon from "@/components/icons/contacts//Insta"
import TelegramIcon from "@/components/icons/contacts/Telegram"
import ArrowIcon from "@/components/icons/contacts/Arrow"
import Character from "/images/support/Character.png"

const Contacts = () => {
  return (
    <div className="flex justify-center xs:flex-col xs:gap-5 sm:gap-[84px] md:gap-14 xl:flex-row xl:gap-5 xl:gap-[20px] 3xl:gap-[30px] 5xl:gap-[68px]">
      <div className="rounded-md md:m-auto xl:m-0 xl:w-[50%] xl:bg-graphite xl:p-10 5xl:w-[676px] 5xl:p-[60px]">
        <h3 className="text-white xs:hidden xl:mb-10 xl:block xl:text-[28px]">
          Контакти
        </h3>
        <ul className="flex flex-col xs:gap-5 sm:gap-8 md:gap-10">
          <li>
            <Link
              to="https://mindlab-platform.vercel.app/"
              className="flex items-center gap-4 text-white xs:text-sm sm:text-base 5xl:text-xl"
            >
              <WebsiteIcon />
              <span>https://mindlab-platform.vercel.app/</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://mindlab-platform.vercel.app/platform"
              className="flex items-center gap-4 text-white xs:text-sm sm:text-base 5xl:text-xl"
            >
              <TelegramIcon />
              <span>https://mindlab-platform.vercel.app/platform</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://mindlab-platform"
              className="flex items-center gap-4 text-white xs:text-sm sm:text-base 5xl:text-xl"
            >
              <MailIcon />
              <span>https://mindlab-platform</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://mindlab-platform.vercel.app/"
              className="flex items-center gap-4 text-white xs:text-sm sm:text-base 5xl:text-xl"
            >
              <InstagramIcon />
              <span>https://mindlab-platform.vercel.app/</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://mindlab-platform.vercel.app/"
              className="flex items-center gap-4 text-white xs:text-sm sm:text-base 5xl:text-xl"
            >
              <FacebookIcon />
              <span>https://mindlab-platform.vercel.app/</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="content-center rounded-md text-center xl:w-[50%] xl:bg-graphite xl:p-10 5xl:w-[676px] 5xl:p-[60px]">
        <img src={Character} alt="character" className="mx-auto mb-4" />
        <h4 className="mb-2 xs:text-lg sm:text-2xl xl:text-[28px]">
          Потрібна допомога?
        </h4>
        <p className="mb-6 xs:text-sm sm:text-base md:text-lg">
          Зв’яжіться з нашим менеджером
        </p>
        <button className="m-auto flex items-center gap-3 rounded-md border border-solid border-lime bg-black pr-3">
          <span className=" bg-lime py-2.5 text-graphite xs:w-[242px] xs:text-lg sm:w-[277px]">
            Зв'язатись з менеджером
          </span>
          <ArrowIcon />
        </button>
      </div>
    </div>
  )
}

export default Contacts
