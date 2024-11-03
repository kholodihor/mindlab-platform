import { GirlWithCap } from "@/components/svg/GirlWithCap.tsx"

export const BlockText = () => {
  return (
    <div className="3md:mr-[55px] 3md:w-[425px]">
      <h2 className="mb-[33px] text-center font-medium text-black xs:mb-[24px] xs:text-[24px] 3md:text-left 3md:text-[32px]">
        Ласкаво просимо на платформу!
      </h2>
      <div className="hidden 3md:block">
        <p className="w-[353px] text-[16px] text-darkGray">
          Освітня платформа підготувала для тебе цікаві курси за різними
          напрямками. Відкрий для себе соціальні науки і стань активним
          громадянином вже сьогодні з нашим{" "}
          <span className={"font-bold text-black"}>безкоштовним курсом</span>{" "}
          Political Science-Sociology.
        </p>
        <div className="flex h-[318px] w-[318px] items-center justify-center">
          <GirlWithCap />
        </div>
      </div>
    </div>
  )
}
