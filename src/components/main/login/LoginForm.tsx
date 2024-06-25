import { BlockText } from "@/components/main/login/BlockText"
import { BlockForm } from "@/components/main/login/BlockForm"

export const LoginForm = ({
  handleClickModal
}: {
  handleClickModal: () => void
}) => {
  return (
    <>
      <BlockText />
      <BlockForm handleClickModal={handleClickModal} />
    </>
  )
}
