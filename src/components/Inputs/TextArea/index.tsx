import { Container, TextArea } from "./styles"

interface IInputText {
  label: string,
  placeholder: string,
  register: any,
  errors: any,
  rows:number
}

function TextAreaUI({ label, placeholder, register, errors, rows }: IInputText) {
  return (
    <Container>
      <label htmlFor="">{label}</label>
      <TextArea
        type="textarea"
        placeholder={placeholder}
        {...register}
        $error={errors ? true : false}
        rows={rows}
      />
    </Container>
  )
}

export default TextAreaUI