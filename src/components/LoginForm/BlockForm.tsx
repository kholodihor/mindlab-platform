import { useForm } from "react-hook-form";
import { LoginSchema } from "@/components/LoginForm/LoginSchema.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/Input.tsx";
import { EyeOpen } from "@/components/svg/EyeOpen.tsx";

interface User {
  name: string
  password: string
}

export const BlockForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onChange"
  })
  const [showPassword, setShowPassword] = useState(false)
  const [valueInput, setValueInput] = useState('');
  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  useEffect(() => {
    const subscription = watch((value) => {
      console.log("value-->", value)
      setValueInput(value)
      reset()
    });
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = async (user: User) => {
    try {
      console.log("user-->", user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      className={"w-[480px] rounded-[6px] bg-[#FFFFFF] p-[52px_60px]"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={"mb-10 flex flex-col gap-6 text-left"}>
        <h2 className={"text-[28px] font-medium text-black"}>
          Вхід
        </h2>
        <p className={"text-[16px] font-medium text-darkGray"}>
          Будь ласка, увійдіть в систему
        </p>
      </div>
      <ul className={"flex flex-col gap-12"}>
        <li>
          <Input
            label={"Ім’я"}
            placeholder={"Василина"}
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
            placeholder={"*************"}
            type={"password"}
            register={register}
            name="password"
            watch={watch}
            icon={showPassword ? <EyeOpen /> : <EyeOpen />}
            togglePasswordVisibility={togglePasswordVisibility}
          />
          {errors.password && (
            <span className={"absolute text-[12px] text-[var(--error)]"}>
              {errors.password.message}
            </span>
          )}
        </li>
      </ul>
    </form>
  )
}
