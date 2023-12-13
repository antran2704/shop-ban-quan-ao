import Link from "next/link";
import { FC, useState, useEffect, ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";

import ProductQuantity from "~/components/ProductQuantity";
import { currencyFormat } from "~/helpers/currencyFormat";

interface Props {
  data: any;
  index: number;
  onUpdate: (payload: any) => void;
}

const CartItem: FC<Props> = (props: Props) => {
  const { data, onUpdate } = props;

  // const [totalProduct, setTotalProduct] = useState<number>(data.quantity);

  const onChangeQuantity = (type: any) => {
    let payload;
    if (type === "ADD") {
      payload = {
        ...data,
        product_id: data.product_id._id,
        quantity: data.quantity + 1,
      };
    }

    if (type === "SUBTRACT") {
      payload = {
        ...data,
        product_id: data.product_id._id,
        quantity: data.quantity - 1,
      };
    }

    onUpdate(payload);
  };

  // const handleDecreaseTotal = (): void => {
  //   if (totalProduct > 1) {
  //     setTotalProduct(totalProduct - 1);
  //   }
  // };

  const handleDeleteItemCart = () => {};

  return (
    <li className="flex lg:flex-row flex-col items-center justify-between w-full lg:pb-5 p-5 border border-borderColor gap-5">
      <Link
        href={`/collections/product/${data.product_id._id}`}
        className="lg:w-1/12 sm:w-6/12 w-10/12"
      >
        <img
          src={data.product_id.thumbnail}
          alt="image cart"
          className="w-full"
        />
      </Link>
      <div className="lg:w-4/12 w-full lg:text-start text-center">
        <Link
          href={`/collections/product/${data.product_id._id}`}
          className="text-base font-medium hover:text-primary"
        >
          {data.product_id.title}
        </Link>
        {/* <div className="flex items-center lg:justify-start justify-center gap-2">
          {data.size && <span className="text-sm">Size: {data.size}</span>}
          {data.color && <span className="text-sm">Color: {data.color}</span>}
        </div> */}
      </div>
      <p className="lg:w-1/12 w-full text-base text-center">{`${currencyFormat(
        data.price
      )} VND`}</p>
      <div className="lg:w-2/12 w-full">
        <div className="flex items-center w-full h-14">
          <button
            onClick={() => onChangeQuantity("SUBTRACT")}
            className="flex items-center justify-center text-xl font-medium w-4/12 h-full border border-borderColor"
          >
            -
          </button>
          <input
            type="text"
            // onChange={(e: ChangeEvent<HTMLInputElement>) =>
            //   setTotalProduct(Number(e.target.value))
            // }
            value={data.quantity}
            className="flex items-center justify-center text-base text-center font-medium w-4/12 h-full border border-borderColor"
          />
          <button
            onClick={() => onChangeQuantity("ADD")}
            className="flex items-center justify-center text-xl font-medium w-4/12 h-full border border-borderColor"
          >
            +
          </button>
        </div>
      </div>
      <p className="lg:w-1/12 w-full text-base text-center">
        {`${currencyFormat(data.price * data.quantity)} VND`}
      </p>
      <div className="flex items-center justify-center lg:w-1/12 w-full">
        <AiOutlineClose
          className="text-xl cursor-pointer"
          onClick={handleDeleteItemCart}
        />
      </div>
    </li>
  );
};

export default CartItem;
