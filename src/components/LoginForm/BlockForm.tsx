import { useForm } from "react-hook-form";
import { LoginSchema } from "@/components/LoginForm/LoginSchema.ts";
import { yupResolver } from "@hookform/resolvers/yup";

export const BlockForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    reset
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onChange"
  });
  return (
    <form className={"w-[480px] rounded-[6px] bg-white p-[52px_60px]"}>
      Forma
    </form>
  )
}
