import { IProduct } from "../../interfaces/interface";
import Button from "../Ui/Button";
import { textSlice } from "../../utils/functions";
import Images from "../Ui/Images";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <>
      <div className=" border rounded-md  max-w-sm md:max-w-lg    ">
        <Images
          imgurl={product.imageURL}
          alt="prod-card1   "
          className="rounded-md h-[200px] w-full"
        />

        <div className="px-1 py-2  ">
          <h3 className="text-md font-bold">{product.title}</h3>
          <p className="text-sm text-black opacity-60 ">
            {textSlice(`${product.description}`,50)}
          </p>
          <div className="flex gap-1 py-3">
            <div
              className={`w-[15px] h-[15px] rounded-full bg-blue-600 cursor-pointer `}
            ></div>
            <div
              className={`w-[15px] h-[15px] rounded-full bg-red-600 cursor-pointer `}
            ></div>
            <div
              className={`w-[15px] h-[15px] rounded-full bg-green-600 cursor-pointer `}
            ></div>
          </div>
          <div className="flex justify-between items-center pb-3 ">
            <span className="text-blue-700 font-semibold">{product.price}</span>
            <div className="flex items-center gap-1">
              <Images
                imgurl={product.category.imageURL}
                alt="prod-catg1"
                className="w-10 h-10  rounded-full object-bottom"
              />
              <span>{product.category.name}</span>
            </div>
          </div>
          <div className="flex justify-between gap-2 ">
            <Button
              bgColor="bg-blue-700"
              widths="w-full"
              onClick={() => alert("hello amine")}
            >
              Edit{" "}
            </Button>
            <Button bgColor="bg-red-700">Remove</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
