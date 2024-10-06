import Modal from "react-modal"
import { Dispatch, SetStateAction } from "react"
import { partners } from "@/data/partners"
import { useHeight } from "@/hooks/useHeight"
import { useTranslation } from "react-i18next"

type PartnersProps = {
  isOpen: boolean
  onClosePartners: Dispatch<SetStateAction<boolean>>
}
const Partners = ({ isOpen, onClosePartners }: PartnersProps) => {
  const currentHeight = useHeight()
  const { t } = useTranslation("Footer")

  return (
    <Modal
      isOpen={isOpen}
      className={`${currentHeight < 480 ? " h-full" : ""} md:h-${currentHeight < 676 ? "full" : "auto"} fixed bottom-0 right-0 z-[9999]  w-[100vw] justify-end overflow-y-auto bg-black p-10 ${isOpen ? "slide-in" : "slide-out"} overflow-y-scroll md:p-[64px] 3md:bottom-[220px] xl:bottom-[240px] xl:px-[30px] xl:py-[48px] 2xl:px-[110px] 3xl:bottom-[300px]`}
      overlayClassName="fixed bottom-0 left-0  w-[100vw] h-[100vh] flex flex-col items-center bg-[var(--overlay-modal)] z-[var(--z-index-modal)] overflow-y-scroll"
      ariaHideApp={false}
      closeTimeoutMS={250}
      onRequestClose={() => onClosePartners(false)}
      bodyOpenClassName="overflow-hidden"
    >
      <button
        type="button"
        onClick={() => onClosePartners(false)}
        className="absolute right-[14px] top-[14px] sm:right-[16px] sm:top-[16px] md:right-[24px] md:top-[24px]"
      >
        <img src="/images/header/close.png" alt="icon" width={24} height={24} />
      </button>
      <ul className="flex flex-wrap justify-between gap-x-[39px] gap-y-[105px] sm:gap-x-[38px] sm:gap-y-[105px] md:justify-center md:gap-x-[101px] md:gap-y-[204px] 3md:justify-between 3md:gap-x-0 4xl:justify-center 4xl:gap-x-[116px]">
        {partners.map(({ id, name, link, logo }, index) => (
          <li
            key={id}
            className={`w-[41.7%] sm:w-[44.2%] sm:max-w-[250px] md:max-w-[157px] ${index === 1 ? "3md:max-w-[320px]" : ""}`}
          >
            <a
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              className={`flex flex-wrap justify-center gap-2 sm:gap-3 ${index === 1 ? "3md:justify-start 3md:gap-x-10" : ""}`}
            >
              <img
                src={logo}
                alt={name}
                width={100}
                height={100}
                className="md:h-[136px] md:w-[136px]"
              />
              <h2 className="text-center text-sm sm:text-base sm:font-medium">
                {name}
              </h2>
            </a>
          </li>
        ))}
      </ul>
      <p
        className={`${currentHeight < 480 ? "top-[226px] sm:top-[210px] md:top-[320px] 3md:top-[50%]" : "top-[50%] translate-y-[-50%]"} absolute left-[50%] w-[180px] translate-x-[-50%] text-center text-lg  sm:w-[136px] sm:text-[28px] sm:leading-8`}
      >
        {`${t("partners")} MIND LAB`}
      </p>
    </Modal>
  )
}
export default Partners
