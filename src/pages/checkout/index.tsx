import Link from "next/link";
import { FC } from "react";

import Header from "~/components/Header";

const CheckOut: FC = () => {
  return (
    <div>
      <Header
        title={"Payment"}
        listBackLinks={[{ title: "Home", link: "/" }]}
      />

      <div className="container__cus">
        <div className="flex lg:flex-nowrap flex-wrap items-start justify-between mt-10 gap-10">
          <div className="lg:w-6/12 w-full">
            <h3 className="lg:text-2xl md:text-xl text-lg font-medium mb-3">
              Contact
            </h3>
            <form className="flex flex-col gap-3">
              <div className="flex lg:flex-nowrap flex-wrap w-full items-center justify-between gap-3">
                <input
                  type="email"
                  placeholder="Email..."
                  className="lg:w-8/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md"
                />
                <input
                  type="text"
                  placeholder="Phone number..."
                  className="lg:w-4/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md"
                />
              </div>
              <div className="flex lg:flex-nowrap flex-wrap w-full items-center justify-between gap-3">
                <input
                  type="text"
                  placeholder="First name..."
                  className="lg:w-6/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last name..."
                  className="lg:w-6/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md"
                />
              </div>
              <div className="flex lg:flex-nowrap flex-wrap w-full items-center justify-between gap-3">
                <input
                  type="text"
                  placeholder="Address..."
                  className="w-full h-12 px-4 border border-[#e5e5e5] rounded-md"
                />
              </div>
              <div className="flex lg:flex-nowrap flex-wrap w-full items-center justify-between gap-3">
                <select
                  defaultValue="District..."
                  className="lg:w-6/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md"
                >
                  <option disabled value="District...">
                    Choose your district
                  </option>
                  <option value="test">test</option>
                </select>
                <select
                  defaultValue="District..."
                  className="lg:w-6/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md"
                >
                  <option disabled value="District...">
                    Choose your district
                  </option>
                  <option value="test">test</option>
                </select>
              </div>
              <div className="flex items-center w-full mt-3 cursor-pointer gap-2">
                <input type="checkbox" id="checkSaveInfor" />
                <label className="cursor-pointer" htmlFor="checkSaveInfor">
                  Save this information for next time
                </label>
              </div>

              <div className="flex lg:flex-nowrap flex-wrap items-center w-full mt-4 sm:gap-5 gap-2">
                <Link
                  href={"/cart"}
                  className="flex items-center justify-center sm:w-auto w-full text-lg font-medium text-white whitespace-nowrap hover:text-dark bg-primary hover:bg-white px-8 py-2 gap-2 border border-primary hover:border-dark transition-all ease-linear duration-100"
                >
                  Return your cart
                </Link>
                <button className="flex items-center justify-center sm:w-auto w-full text-lg font-medium text-white whitespace-nowrap bg-dark hover:bg-primary px-8 py-2 transition-all ease-linear border border-transparent duration-100 gap-2">
                  Continute payment
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-5/12 w-full">
            <ul className="flex flex-col gap-6">
              <li className="flex items-center justify-between w-full pb-5 border-b border-borderColor">
                <div className="flex items-center gap-5">
                  <div className="relative border border-borderColor rounded-xl">
                    <span className="flex items-center justify-center absolute -top-2 -right-2 md:w-5 md:h-5 w-4 h-4 text-xs text-white bg-primary rounded-full z-10">
                      99
                    </span>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0027/0952/0502/products/product_64x64.png?v=1675522269"
                      alt=""
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium my-0">
                      New99 Gift Card
                    </h3>
                    <p className="text-sm">$10.00</p>
                  </div>
                </div>
                <p className="text-base font-medium">$10.00</p>
              </li>
              <li className="flex items-center justify-between w-full pb-5 border-b border-borderColor">
                <div className="flex items-center gap-5">
                  <div className="relative border border-borderColor rounded-xl">
                    <span className="flex items-center justify-center absolute -top-2 -right-2 md:w-5 md:h-5 w-4 h-4 text-xs text-white bg-primary rounded-full z-10">
                      99
                    </span>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0027/0952/0502/products/product_64x64.png?v=1675522269"
                      alt=""
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium my-0">
                      New99 Gift Card
                    </h3>
                    <p className="text-sm">$10.00</p>
                  </div>
                </div>
                <p className="text-base font-medium">$10.00</p>
              </li>
            </ul>
            <div className="flex items-center justify-between mt-5 gap-5">
              <p className="text-base font-medium">Total:</p>
              <p className="text-base font-medium">$10.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
