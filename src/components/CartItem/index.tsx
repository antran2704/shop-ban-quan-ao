import Link from "next/link";
import { FC, useState, ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { currencyFormat } from "~/helpers/currencyFormat";

interface Props {
  data: any;
  index: number;
  onUpdate: (payload: any) => void;
  onDelete: (payload: any) => void;
}

let timmer: any;

const CartItem: FC<Props> = (props: Props) => {
  const { data, onUpdate, onDelete } = props;
  const [quantity, setQuantity] = useState<number>(data.quantity);

  const onInputQuantity = (value: number) => {
    if (timmer) {
      clearTimeout(timmer);
    }

    timmer = setTimeout(() => {
      if (value <= 0) {
        onDelete({
          product_id: data.product_id._id,
          variation: data.variation_id,
        });

        return;
      }
      const payload = {
        ...data,
        product_id: data.product_id._id,
        quantity: value,
      };
      onUpdate(payload);
    }, 1000);
  };

  const onChangeQuantity = (type: any) => {
    if (type === "SUBTRACT" && quantity - 1 <= 0) {
      onDelete({
        product_id: data.product_id._id,
        variation: data.variation_id,
      });

      return;
    }

    let payload;
    if (type === "ADD") {
      payload = {
        ...data,
        product_id: data.product_id._id,
        quantity: quantity + 1,
      };
    }

    if (type === "SUBTRACT") {
      payload = {
        ...data,
        product_id: data.product_id._id,
        quantity: quantity - 1,
      };
    }
    onUpdate(payload);
  };

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
            onClick={() => {
              setQuantity(quantity - 1);
              onChangeQuantity("SUBTRACT");
            }}
            className="flex items-center justify-center text-xl font-medium w-4/12 h-full border border-borderColor"
          >
            -
          </button>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setQuantity(Number(e.target.value));
              onInputQuantity(Number(e.target.value));
            }}
            value={quantity}
            className="flex items-center justify-center text-base text-center font-medium w-4/12 h-full border border-borderColor"
          />
          <button
            onClick={() => {
              setQuantity(quantity + 1);
              onChangeQuantity("ADD");
            }}
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
          onClick={() =>
            onDelete({
              product_id: data.product_id._id,
              variation: data.variation_id,
            })
          }
        />
      </div>
    </li>
  );
};

export default CartItem;
