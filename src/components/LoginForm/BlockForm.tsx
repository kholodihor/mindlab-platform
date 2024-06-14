import { useForm } from "react-hook-form"
import { LoginSchema } from "@/components/LoginForm/LoginSchema.ts"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/Input.tsx"
import { EyeClose } from "@/components/svg/EyeClose.tsx"
import { Button } from "@/components/ui/button.tsx";
import { toast } from "react-toastify";

interface User {
  name: string
  password: string
}

const customId = "toastId"

export const BlockForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onChange"
  })
  const [showPassword, setShowPassword] = useState(false)
  const [valueInput, setValueInput] = useState("")
  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  useEffect(() => {
    const subscription = watch((value: any) => {
      setValueInput(value)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = async (user: User): Promise<void> => {
    try {
      toast.success(
        `На бек підуть такі дані: name: ${user.name}, password: ${user.password}`,
        {
          toastId: customId
      })
      console.log("valueInput-->", valueInput)
    } catch (error: any) {
      toast.error(error.message, {
        toastId: customId
      })
    }
  }

  return (
    <form
      className={"w-[480px] rounded-[6px] bg-[#FFFFFF] p-[52px_60px]"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={"mb-10 flex flex-col gap-6 text-left"}>
        <h2 className={"text-[28px] font-medium leading-[150%] text-black"}>
          Вхід
        </h2>
        <p className={"text-[16px] font-medium text-darkGray"}>
          Будь ласка, увійдіть в систему
        </p>
      </div>
      <ul className={"mb-16 flex flex-col gap-12"}>
        <li>
          <Input
            label={"Ім’я"}
            type={"text"}
            register={register}
            name="name"
            watch={watch}
          />
          {errors.name && (
            <span className={"absolute text-[12px] text-[var(--error)]"}>
              {errors.name.message}
            </span>
          )}
        </li>
        <li>
          <Input
            label={"Пароль"}
            type={"password"}
            register={register}
            name="password"
            watch={watch}
            icon={<EyeClose />}
            togglePasswordVisibility={togglePasswordVisibility}
          />
          {errors.password && (
            <span className={"absolute text-[12px] text-[var(--error)]"}>
              {errors.password.message}
            </span>
          )}
        </li>
      </ul>
      <Button
        type="submit"
        variant={"outline"}
        className={
          "mb-6 flex h-12 w-full cursor-pointer items-center justify-center rounded-[6px] bg-black p-[18px_24px] text-[18px] font-medium text-white"
        }
      >
        Увійти
      </Button>
      <Button
        type="button"
        variant={"outline"}
        className={
          "m-[0_auto] flex h-10 w-[202px] cursor-pointer items-center justify-center border-none bg-inherit p-[10px_20px] text-[16px] font-medium text-lightGray underline"
        }
      >
        Не пам’ятаю пароль
      </Button>
    </form>
  )
}
