import { BlockText } from "@/components/main/login/BlockText"
import { BlockForm } from "@/components/main/login/BlockForm"
import { GirlWithCap } from "@/components/svg/GirlWithCap.tsx"

export const LoginForm = ({
  handleClickModal
}: {
  handleClickModal: () => void
}) => {
  return (
    <div className="flex h-full w-full min-w-[70vw] flex-col items-center justify-center 3md:flex-row">
      <BlockText />
      <BlockForm handleClickModal={handleClickModal} />
      <div className="3md:hidden">
        <GirlWithCap />
      </div>
    </div>
  )
}
