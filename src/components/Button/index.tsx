import { BasicButton, OutlineButton } from "./styles"

interface IButton {
  text: string,
  type: "button" | "submit" | "reset",
  model: "basic" | "outline",
  action?: () => any
}

function ButtonUI({ text, type, model, action }: IButton) {
  switch (model) {
    case "basic":
      return (
        <BasicButton onClick={action} type={type}>
          {text}
        </BasicButton>
      )
    case "outline":
      return (
        <OutlineButton onClick={action} type={type}>
          {text}
        </OutlineButton>
      )
  }

}

export default ButtonUI