import { Container, Input } from "./styles"

interface IInputText {
  label: string,
  placeholder: string,
  register: any,
  errors: any,
  defaultValue: string
}

function InputTextUI({ label, placeholder, register, errors, defaultValue }: IInputText) {
  return (
    <Container>
      <label htmlFor="">{label}</label>
      <Input
        type="text"
        placeholder={placeholder}
        {...register}
        $error={errors ? true : false}
        defaultValue={defaultValue}
      />
    </Container>
  )
}

export default InputTextUI