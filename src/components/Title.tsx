import { ReactChildren } from "react"

type TitleProps = {
  children: ReactChildren
}

const Title: React.FC = ({ children }: TitleProps) => {
  return (
    <h1 className='text-center h1'>
      {children}
    </h1>
  )
}

export default Title