import { useTranslation } from "react-i18next"
import Title from "./Title"
import coursesSale from "./courseSale.json"
import data from "./data.json"
import Calendar from "@/components/icons/Calendar"
import Clock from "@/components/icons/Clock"

const Courses = () => {
  const { t } = useTranslation()
  return (
    <section className="w-full xl:px-[40px] 3xl:px-[80px] ">
      <Title />
      <div className="flex flex-wrap gap-[20px]">
        <ul className="flex flex-wrap gap-[20px]">
          {coursesSale?.map((item) => {
            return (
              <li
                key={item.id}
                className="relative h-[335px] w-[573px] overflow-hidden bg-[#202227] px-[32px] py-[24px]"
                style={{
                  background: `radial-gradient(circle at left bottom,${item.gradient.color1} , ${item.gradient.color2} `
                }}
              >
                <div className="mb-[63px]">
                  <h2 className="mb-[4px] font-['Oswald',_sans-serif] text-[32px] font-medium uppercase  leading-[1.5] ">
                    {item.title}
                  </h2>
                  <p className=" text-[18px] leading-[1.5]">{item.items}</p>
                </div>
                <img
                  src={item.img_url}
                  alt={item.title}
                  width={247}
                  height={288}
                  className="absolute bottom-0 left-[17px]"
                />
                <div className="mb-[24px] ml-[247px]">
                  {item?.info.map((it) => (
                    <li key={it.id}>
                      <p className="text-[18px]  leading-[1.5] tracking-[0px]">
                        {it.title}
                      </p>
                    </li>
                  ))}
                  <p className="text-[28px] font-medium leading-[2.1] text-lime">
                    {t("Main.courses_section.sale")}
                  </p>
                </div>
              </li>
            )
          })}
          {data?.map((item) => {
            return (
              <li
                key={item.id}
                className="relative h-[335px] w-[573px] overflow-hidden bg-[#202227] px-[32px] py-[24px]"
                style={{
                  background: `radial-gradient(circle at left bottom,${item.gradient.color1} , ${item.gradient.color2}`
                }}
              >
                <h2 className="mb-[22px] font-['Oswald',_sans-serif] text-[32px] font-medium uppercase  leading-[1.5] ">
                  {item.title}
                </h2>
                <div className="flex gap-[32px]">
                  <img
                    src={item.img_url}
                    alt={item.title}
                    width={220}
                    height={230}
                  />
                  <div>
                    <ul className="mb-[32px] pt-[44px]">
                      <li className="flex items-center gap-[8px]">
                        <Clock className="h-[14px] w-[14px] fill-none stroke-white" />
                        <p className="font-['Inter',_sans-serif] text-[16px] font-light  leading-[1.5] tracking-[0px]">
                          {item.time}
                        </p>
                      </li>
                      <li className="flex items-center gap-[8px]">
                        <Calendar className="h-[14px] w-[14px] fill-none stroke-white" />
                        <p className="font-['Inter',_sans-serif] text-[16px] font-light  leading-[1.5] tracking-[0px]">
                          {item.lesson}
                        </p>
                      </li>
                    </ul>
                    <ul className="flex flex-wrap gap-[8px]">
                      {item?.skills.map((skill) => (
                        <li
                          key={skill.id}
                          className="rounded-[6px] px-[16px] py-[7.5px] [border:1px_solid_#eaeaeb]"
                        >
                          {skill.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
export default Courses
