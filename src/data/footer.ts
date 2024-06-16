import EmailIcon from "@/components/icon/EmailIcon"
import FacebookIcon from "@/components/icon/FacebookIcon"
import InstagramIcon from "@/components/icon/InstagramIcon"
import TelegramIcon from "@/components/icon/TelegramIcon"
import WebsiteIcon from "@/components/icon/WebSiteIcon"
import { FC } from "react"

type SocialeList = {
  title: string
  titleMob?: string
  Component: FC
  href: string
  style: string
}

export const socialeList: Array<SocialeList> = [
  {
    title: "Telegram",
    Component: TelegramIcon,
    href: "https://t.me/+Q8t3dkMH84hiYmNitest",
    style:
      "left-[16%] top-[50%] sm:left-[4%] sm:top-[79%] sm:rotate-[-11deg] md:top-[80%] md:left-[9%] xl:left-[10%] xl:top-[270px]"
  },
  {
    title: "instagram",
    Component: InstagramIcon,
    href: "https://www.instagram.com/",
    style:
      "right-[21%] top-[37%] sm:rotate-[32deg] sm:top-[64%] sm:right-[17%] md:top-[71%] md:right-[48%] 2md:right-[37%] 3md:right-[46%] xl:rotate-[42deg]"
  },
  {
    title: "facebook",
    Component: FacebookIcon,
    href: "https://www.facebook.com/profile.php?id=100008100491583",
    style:
      "bottom-[9%] right-[8%] rotate-[21deg] sm:bottom-[38%] sm:right-[6%] md:bottom-[12%] md:right-[26%] 2md:right-[20%] 3md:right-[33%] 3md:bottom-[16%] xl:rotate-[22deg]"
  },
  {
    title: "Email",
    Component: EmailIcon,
    href: "mailto:mind.lab.hub@gmail.com",
    style:
      "bottom-[60%] left-[26%] rotate-[20deg] sm:bottom-[67%] sm:left-[26%] sm:rotate-[-52deg] md:bottom-[16%] md:left-[82%] md:rotate-[-41deg] 3md:left-[70%] xl:rotate-[-32deg]"
  },
  {
    title: "блог",
    titleMob: "блог",
    Component: WebsiteIcon,
    href: "",
    style:
      "right-[41%] bottom-[9%] rotate-[-10deg] sm:bottom-[33%] sm:right-[63%] sm:rotate-0 md:bottom-[25%] md:right-[14%] 3md:right-[5%] 3md:rotate-[30deg] 3md:bottom-[15%] xl:rotate-[8deg]"
  }
]
