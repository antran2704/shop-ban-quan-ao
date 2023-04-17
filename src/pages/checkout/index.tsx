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
        <div className="flex items-start justify-between mt-10">
          <div className="lg:w-6/12">
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
                  className="w-6/12 h-12 px-4 border border-[#e5e5e5] rounded-md"
                >
                  <option disabled value="District...">
                    Choose your district
                  </option>
                  <option value="test">test</option>
                </select>
                <select
                  defaultValue="District..."
                  className="w-6/12 h-12 px-4 border border-[#e5e5e5] rounded-md"
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

              <div className="flex lg:flex-nowrap flex-wrap items-center justify-between w-full gap-3">
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
          <div className="lg:w-6/12"></div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
