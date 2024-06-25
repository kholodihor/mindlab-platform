import { GirlWithCap } from "@/components/svg/GirlWithCap.tsx"

export const BlockText = () => {
  return (
    <div className="mr-[55px] w-[425px]">
      <h2 className="mb-[33px] text-[32px] font-medium text-black">
        Ласкаво просимо на платформу!
      </h2>
      <p className="w-[353px] text-[16px] text-darkGray">
        Освітня платформа підготувала для тебе цікаві курси за різними
        напрямками. Відкрий для себе соціальні науки і стань активним
        громадянином вже сьогодні з нашим{" "}
        <span className={"font-bold text-black"}>безкоштовним курсом</span>{" "}
        Political Science-Sociology.
      </p>
      <div className="flex items-center justify-center w-[318px] h-[318px]">
        <GirlWithCap />
      </div>
    </div>
  )
}
