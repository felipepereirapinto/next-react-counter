type ContainerProps = {
  children: JSX.Element[]
}

const Container: React.FC = ({ children }: ContainerProps) => {
  return(
    <div className='vh-100 vw-100 d-flex flex-column justify-content-center align-items-center'>
      {children}
    </div>
  )
}

export default Container