import { GirlWithCap } from "@/components/svg/GirlWithCap.tsx"

export const BlockText = () => {
  return (
    <div className="md:mr-[55px] md:w-[425px]">
      <h2 className="mb-[33px] text-[32px] font-medium text-black text-center md:text-left xs:text-[24px] xs:mb-[24px]">
        Ласкаво просимо на платформу!
      </h2>
      <div className="hidden md:block">
        <p className="w-[353px] text-[16px] text-darkGray">
          Освітня платформа підготувала для тебе цікаві курси за різними
          напрямками. Відкрий для себе соціальні науки і стань активним
          громадянином вже сьогодні з нашим{" "}
          <span className={"font-bold text-black"}>безкоштовним курсом</span>{" "}
          Political Science-Sociology.
        </p>
        <div className="flex items-center justify-center w-[318px] h-[318px]">
          <GirlWithCap/>
        </div>
      </div>
    </div>
  )
}
