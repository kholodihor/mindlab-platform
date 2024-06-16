import { useTranslation } from "react-i18next"

const LanguageSwitcher = ({ activeColor }: { activeColor: string }) => {
  const { i18n } = useTranslation()

  return (
    <div className="flex items-center xl:mr-[80px]">
      <button
        type="submit"
        onClick={() => i18n.changeLanguage("en")}
        className={`text-gray cursor-pointer border-none text-[16px] 
            ${i18n.resolvedLanguage === "en" && activeColor}`}
      >
        ENG
      </button>
      <span className="text-gray inline-block px-[3px] text-[17px]">|</span>
      <button
        type="submit"
        onClick={() => i18n.changeLanguage("ua")}
        className={`text-gray cursor-pointer border-none text-[16px] 
            ${i18n.resolvedLanguage === "ua" && activeColor}`}
      >
        УКР
      </button>
    </div>
  )
}

export default LanguageSwitcher
