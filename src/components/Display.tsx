type DisplayProps = {
  children: React.ReactChildren
}

const Display: React.FC = ({ children }: DisplayProps) => {
  return (
    <p className='text-center display-1 m-5'>
      {children}
    </p>
  )
}

export default Display