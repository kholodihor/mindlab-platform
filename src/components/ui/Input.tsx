import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { useState } from "react";
import { EyeOpen } from "@/components/svg/EyeOpen.tsx";

interface InputProps {
  label: string
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
  icon,
  type,
  togglePasswordVisibility,
  register,
  name
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickEye = () => {
    if (togglePasswordVisibility) {
      setShowPassword(!showPassword)
    }
  }

  if (!icon)
    return (
      <div className={"flex flex-col gap-3"}>
        <label className={"text-[16px] text-darkGray"}>{label}</label>
        <input
          className={
            "w-[360px] border-b border-solid border-b-graphite p-[8px_16px] text-[18px] text-lightGray"
          }
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
            "w-[360px] border-b border-solid border-b-graphite p-[8px_16px] text-[18px] text-lightGray"
          }
          type={showPassword ? "text" : type}
          {...register(name)}
        />
        {icon && (
          <button
            className={"absolute right-[16px] top-[8px]"}
            onClick={handleClickEye}
            type="button"
          >
            {showPassword ? <EyeOpen /> : icon}
          </button>
        )}
      </div>
    </div>
  )
}
