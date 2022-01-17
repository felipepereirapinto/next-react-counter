type TitleProps = {
  children: React.ReactChildren
}

const Title: React.FC = ({ children }: TitleProps) => {
  return (
    <a
      href="https://github.com/felipepereirapinto/next-react-counter"
      className="text-decoration-none text-dark"
    >
      <h1 className='text-center h1'>
        {children}
      </h1>
    </a>
  )
}

export default Title