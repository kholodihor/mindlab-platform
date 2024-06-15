type Props = {
  title: string
  image: string
}

const SocialButton = ({ title, image }: Props) => {
  return (
    <div className="flex w-[90%] items-center rounded-md border-2 border-lightGray">
      <div className="w-[25%] p-2">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <div className="h-[2.85rem] w-[2px] bg-lightGray"></div>
      <div className="flex flex-1 items-center justify-center bg-darkGray p-2 uppercase">
        <span className="mt-[5px] ">{title}</span>
      </div>
    </div>
  )
}

export default SocialButton
