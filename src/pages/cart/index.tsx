import Link from "next/link";
import { FC, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Header from "~/components/Header";
import ProductQuantity from "~/components/ProductQuantity";

const Cart: FC = () => {
  const [totalProduct, setTotalProduct] = useState<number>(0);
  return (
    <div>
      <Header title={"Cart"} listBackLinks={[{ title: "Home", link: "/" }]} />

      <section className="container__cus">
        <ul className="flex flex-col items-start my-10 lg:gap-5 gap-10">
          <li className="flex lg:flex-row flex-col items-center justify-between w-full lg:pb-5 p-5 lg:border-b border border-borderColor gap-5">
            <Link href={"/"} className="lg:w-1/12 sm:w-6/12 w-10/12">
              <img
                src="images/product/product1.webp"
                alt="image cart"
                className="w-full"
              />
            </Link>
            <div className="lg:w-4/12 w-full text-center">
              <Link
                href={"/"}
                className="text-base font-medium hover:text-primary"
              >
                X. Complementary Product 2
              </Link>
              <div className="flex items-center gap-2">
                {/* {item.size && (
                  <span className="text-sm">Size: {item.size}</span>
                )}
                {item.color && (
                  <span className="text-sm">Color: {item.color}</span>
                )} */}
              </div>
            </div>
            <p className="lg:w-1/12 w-full text-base text-center">$19.00</p>
            <div className="lg:w-2/12 w-full">
              <ProductQuantity
                totalProduct={totalProduct}
                setTotalProduct={setTotalProduct}
              />
            </div>
            <p className="lg:w-1/12 w-full text-base text-center">$19.00</p>
            <div className="flex items-center justify-center lg:w-1/12 w-full">
                <AiOutlineClose className="text-xl"/>
            </div>
          </li>
          <li className="flex lg:flex-row flex-col items-center justify-between w-full lg:pb-5 p-5 lg:border-b border border-borderColor gap-5">
            <Link href={"/"} className="lg:w-1/12 sm:w-6/12 w-10/12">
              <img
                src="images/product/product1.webp"
                alt="image cart"
                className="w-full"
              />
            </Link>
            <div className="lg:w-4/12 w-full text-center">
              <Link
                href={"/"}
                className="text-base font-medium hover:text-primary"
              >
                X. Complementary Product 2
              </Link>
              <div className="flex items-center gap-2">
                {/* {item.size && (
                  <span className="text-sm">Size: {item.size}</span>
                )}
                {item.color && (
                  <span className="text-sm">Color: {item.color}</span>
                )} */}
              </div>
            </div>
            <p className="lg:w-1/12 w-full text-base text-center">$19.00</p>
            <div className="lg:w-2/12 w-full">
              <ProductQuantity
                totalProduct={totalProduct}
                setTotalProduct={setTotalProduct}
              />
            </div>
            <p className="lg:w-1/12 w-full text-base text-center">$19.00</p>
            <div className="flex items-center justify-center lg:w-1/12 w-full">
                <AiOutlineClose className="text-xl"/>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Cart;
