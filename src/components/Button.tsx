type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  icon: string
  color: string
}

const Button = ({ onClick, icon, color }: ButtonProps) => {
  return (
    <button
      type="button"
      className={'btn btn-lg mx-1 btn-' + color}
      onClick={onClick}
    >
      {icon}
    </button>
  )

}

export default Button