import EmailIcon from "@/components/icon/EmailIcon"
import FacebookIcon from "@/components/icon/FacebookIcon"
import InstagramIcon from "@/components/icon/InstagramIcon"
import TelegramIcon from "@/components/icon/TelegramIcon"
import BlogIcon from "@/components/icon/BlogIcon"
import { FC } from "react"
import TelegramBigIcon from "@/components/icon/TelegramBigIcon"
import InstagramBigIcon from "@/components/icon/InstagramBigColor"
import FacebookBigIcon from "@/components/icon/FacebookBigIcon"
import EmailBigIcon from "@/components/icon/EmailBigIcon"
import BlogBigIcon from "@/components/icon/BlogBigIcon"

type SocialeList = {
  title: string
  titleLeptop?: string
  Component: FC
  ComponentMob: FC
  href: string
  style: string
}

export const socialeList: Array<SocialeList> = [
  {
    title: "Telegram",
    Component: TelegramIcon,
    ComponentMob: TelegramBigIcon,
    href: "https://t.me/+Q8t3dkMH84hiYmNitest",
    style:
      "left-[16%] bottom-[71px] sm:left-[4%] sm:bottom-[28px] sm:rotate-[-11deg] md:top-[80%] md:left-[9%] xl:left-[10%] xl:top-[232px]"
  },
  {
    title: "instagram",
    Component: InstagramIcon,
    ComponentMob: InstagramBigIcon,
    href: "https://www.instagram.com/",
    style:
      "right-[21%] top-[37%] sm:rotate-[32deg] sm:top-[63%] sm:right-[18%] md:top-[71%] md:right-[48%] 2md:right-[37%] 3md:right-[46%] xl:rotate-[42deg] xl:right-[51%] xl:top-[40%]"
  },
  {
    title: "facebook",
    Component: FacebookIcon,
    ComponentMob: FacebookBigIcon,
    href: "https://www.facebook.com/profile.php?id=100008100491583",
    style:
      "bottom-[9%] right-[8%] rotate-[10deg] sm:rotate-[21deg] sm:bottom-[36%] sm:right-[5%] md:bottom-[12%] md:right-[26%] 2md:right-[20%] 3md:right-[33%] 3md:bottom-[16%] xl:rotate-[22deg] xl:bottom-[57px] xl:right-[35%]"
  },
  {
    title: "Email",
    Component: EmailIcon,
    ComponentMob: EmailBigIcon,
    href: "mailto:mind.lab.hub@gmail.com",
    style:
      "bottom-[60%] left-[26%] rotate-[18deg] sm:bottom-[68%] sm:left-[26%] sm:rotate-[-52deg] md:bottom-[16%] md:left-[82%] md:rotate-[-41deg] 2md:left-[84%] 3md:left-[70%] xl:rotate-[-32deg] xl:left-[68%]"
  },
  {
    title: "блог",
    titleLeptop: "наш блог",
    Component: BlogIcon,
    ComponentMob: BlogBigIcon,
    href: "",
    style:
      "right-[42%] bottom-[20px] rotate-[-8deg] sm:bottom-[88px] sm:right-[63%] sm:rotate-0 md:bottom-[25%] md:right-[14%] 3md:right-[5%] 3md:rotate-[30deg] 3md:bottom-[24%] xl:rotate-[8deg] xl:bottom-[28px] xl:right-[6%]"
  }
]
