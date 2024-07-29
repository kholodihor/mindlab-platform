import { BlockText } from "@/components/main/login/BlockText"
import { BlockForm } from "@/components/main/login/BlockForm"
import {GirlWithCap} from "@/components/svg/GirlWithCap.tsx";

export const LoginForm = ({
  handleClickModal
}: {
  handleClickModal: () => void
}) => {
  return (
    <div className="flex items-center justify-center w-full h-full flex-col md:flex-row">
      <BlockText />
      <BlockForm handleClickModal={handleClickModal} />
      <div className=" md:hidden">
        <GirlWithCap />
      </div>
    </div>
  )
}
