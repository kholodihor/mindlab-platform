import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface InputProps {
  label: string
  placeholder: string
  icon?: JSX.Element
  type: string
  togglePasswordVisibility?: () => void
  register: UseFormRegister<{ name: string; password: string }>
  name: "name" | "password"
  watch: UseFormWatch<{ name: string; password: string }>
}

export const Input = (
  {
  label,
  placeholder,
  icon,
  type,
  togglePasswordVisibility,
  register,
  name
}: InputProps) => {
  const handleClickEye = () => {
    if (togglePasswordVisibility) {
      togglePasswordVisibility()
    }
  }

  if (!icon)
    return (
      <div className={"flex flex-col gap-3"}>
        <label className={"text-[16px] text-darkGray"}>{label}</label>
        <input
          className={
            "w-[360px] border-b border-solid border-b-graphite p-[8px_16px] text-[18px] font-medium text-black placeholder-lightGray"
          }
          placeholder={placeholder}
          type={type}
          {...register(name)}
        />
      </div>
    )

  return (
    <div className={"flex flex-col gap-3"}>
      <label className={"text-[16px] text-darkGray"}>{label}</label>
      <div className={"relative "}>
        <input
          className={
            "w-[360px] border-b border-solid border-b-graphite p-[8px_16px] text-[18px] font-medium text-black placeholder-lightGray"
          }
          placeholder={placeholder}
          type={type}
          {...register(name)}
        />
        {icon && (
          <button
            className={"absolute right-[16px] top-[8px]"}
            onClick={handleClickEye}
            type="button"
          >
            {icon}
          </button>
        )}
      </div>
    </div>
  )
}
