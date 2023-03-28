import { FC, ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
    totalProduct: number;
    setTotalProduct: Dispatch<SetStateAction<number>>;
  }

const ProductQuantity: FC<Props> = (props: Props) => {
    const {totalProduct, setTotalProduct} = props;

  const handleDecreaseTotal = (): void => {
    if (totalProduct > 1) {
      setTotalProduct(totalProduct - 1);
    }
  };
  return (
    <div className="flex items-center w-full h-14">
      <button
        onClick={handleDecreaseTotal}
        className="flex items-center justify-center text-xl font-medium w-4/12 h-full border border-borderColor"
      >
        -
      </button>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTotalProduct(Number(e.target.value))
        }
        value={totalProduct}
        className="flex items-center justify-center text-base text-center font-medium w-4/12 h-full border border-borderColor"
      />
      <button
        onClick={() => setTotalProduct(totalProduct + 1)}
        className="flex items-center justify-center text-xl font-medium w-4/12 h-full border border-borderColor"
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
