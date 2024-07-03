import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement>  {

}

const InputForm = ({...rest}: IProps) => {
  return (
    <input className="border-[1px] border-gray-300 shadow-md px-3 py-3 focus:border-indigo-500 focus:outline-none focus:right-1 focus:ring-indigo-500 rounded-md text-md"  {...rest} />
  )
}

export default InputForm