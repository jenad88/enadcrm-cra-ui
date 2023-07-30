import { useForm } from "react-hook-form"
import { useLogin } from "../../api/login"
import { LoginData } from "../../types"

export type LoginFormProps = {
  onSuccess: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({ onSuccess })

  const { register, handleSubmit, formState } = useForm<LoginData>()

  const onSubmit = (data: LoginData) => {
    login.submit(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>login</form>
    </>
  )
}
