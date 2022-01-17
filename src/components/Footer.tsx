type FooterProps = {
  children: React.ReactChildren
}

const Footer: React.FC = ({ children }: FooterProps) => {
  return (
    <footer
      className='position-absolute bottom-0 start-50 translate-middle-x'
    >
      <a
        href="https://github.com/felipepereirapinto/next-react-counter"
        className="text-decoration-none text-dark"
      >
        {children}
      </a>
    </footer>
  )
}

export default Footer