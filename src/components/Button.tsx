type ButtonProps = {
  onClick: () => void
  icon: string
  className: string
}

function Button({ onClick, icon, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={'btn btn-lg ' + className}
      onClick={onClick}
    >
      {icon}
    </button>
  )

}

export default Button