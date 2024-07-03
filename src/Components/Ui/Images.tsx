interface IProps{
  imgurl:string,
  alt:string,
  className?:string
}


const Images = ({imgurl,alt,className}:IProps) => {
  return (
    <img src={imgurl} alt={alt} className={className} />
  )
}

export default Images