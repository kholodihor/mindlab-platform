import { useTranslation } from "react-i18next"

const LanguageSwitcher = ({ activeColor }: { activeColor: string }) => {
  const { i18n } = useTranslation()

  return (
    <div className="flex items-center xl:mr-[80px]">
      <button
        type="submit"
        onClick={() => i18n.changeLanguage("en")}
        className={`cursor-pointer border-none text-[16px] text-gray 
            ${i18n.resolvedLanguage === "en" && activeColor}`}
      >
        ENG
      </button>
      <span className="inline-block px-[3px] text-[17px] text-gray">|</span>
      <button
        type="submit"
        onClick={() => i18n.changeLanguage("ua")}
        className={`cursor-pointer border-none text-[16px] text-gray 
            ${i18n.resolvedLanguage === "ua" && activeColor}`}
      >
        УКР
      </button>
    </div>
  )
}

export default LanguageSwitcher
