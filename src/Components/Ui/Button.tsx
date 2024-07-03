import { ButtonHTMLAttributes, ReactNode } from "react"




// ici pour faire un evenement avec le button j'ai extends  le type ButtonHTMLAttributes<HTMLButtonElement> et j'ai utilisé ...rest comme props
// dans le button j'ai utilisé l'objet {...rest} pour pouvoir utilisé nimporte quel evenements

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:ReactNode,
  bgColor?:string,
  widths?: "w-fit" | "w-full"

}
const Button = ({bgColor,children,widths="w-full",...rest}:IProps) => {
  return (
    <button className={`${bgColor} ${widths}  p-2   w-full rounded-md text-white `} {...rest}>{children}</button>
  )
}

export default Button