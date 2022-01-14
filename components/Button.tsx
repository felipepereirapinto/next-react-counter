import { ReactChildren } from "react"

type ButtonProps = {
  onClick: () => void
  icon: string
}

function Button({ onClick, icon }: ButtonProps) {
  return <button onClick={onClick}>{icon}</button>
}

export default Button