type Props = {
  title: string
  image: string
}

const SocialButton = ({ title, image }: Props) => {
  return (
    <div className="flex w-full items-center rounded-md border border-lightGray">
      <div className="border-r border-lightGray p-2">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="flex flex-1 items-center justify-center bg-darkGray p-2 uppercase">
        <span className="mt-[5px] ">{title}</span>
      </div>
    </div>
  )
}

export default SocialButton
