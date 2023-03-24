import { GetServerSideProps } from "next";
import Link from "next/link";
import { FC, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import FilterItem from "~/components/Filter";

import Header from "~/components/Header";
import ProductItem from "~/components/ProductItem";

interface Props {
  query: any;
}

const CollectionItem: FC<Props> = (props: Props) => {
  const btnSubmitFilterRef = useRef<HTMLButtonElement>(null);
  const { query } = props;
  console.log(query);
  return (
    <div>
      <Header title={"Collection item"} link={"/"} />
      <div className="container__cus">
        <div className="flex lg:flex-nowrap flex-wrap items-start justify-between my-10 gap-10">
          <div className="lg:w-3/12 w-full">
            <form>
              <FilterItem
                titleFilter="Availability"
                typeFilter="checkBox"
                listFilterItem={[
                  {
                    labelFilter: "In stock",
                    valueFilter: "1",
                    paramFilter: "availability",
                  },
                ]}
                query={query}
              />
              <FilterItem
                titleFilter="Color"
                listFilterItem={[
                  {
                    labelFilter: "Cream",
                    valueFilter: "cream",
                    paramFilter: "color",
                  },
                  {
                    labelFilter: "Blue",
                    valueFilter: "blue",
                    paramFilter: "color",
                  },
                ]}
                typeFilter="checkBox"
                query={query}
              />
              <FilterItem titleFilter="Price" typeFilter="price" />
              <FilterItem
                titleFilter="Brand"
                listFilterItem={[
                  {
                    labelFilter: "Vendor A",
                    valueFilter: "vendorA",
                    paramFilter: "brand",
                  },
                  {
                    labelFilter: "Vendor B",
                    valueFilter: "vendorB",
                    paramFilter: "brand",
                  },
                ]}
                typeFilter="checkBox"
                query={query}
              />
              <button
                ref={btnSubmitFilterRef}
                type="submit"
                className="w-full flex items-center justify-center bg-[#f8796c] text-white text-lg font-medium px-5 py-2 mt-3"
              >
                Filter Now
              </button>
            </form>
          </div>
          <div className="lg:w-9/12 w-full">
            <p className="text-lg text-right font-medium">
              Showing 1 - 12 of 26 result
            </p>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-5 gap-4">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>

            {/* pagination */}
            <ul className="flex items-center justify-center mt-10 gap-3">
              <li className="sm:w-12 sm:h-12 w-10 h-10">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-[#f8796c] hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  <MdKeyboardArrowLeft className="sm:text-3xl text-xl" />
                </Link>
              </li>
              <li className="sm:w-12 sm:h-12 w-10 h-10">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-[#f8796c] hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  1
                </Link>
              </li>
              <li className="sm:w-12 sm:h-12 w-10 h-10">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-[#f8796c] hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  2
                </Link>
              </li>
              <li className="sm:w-12 sm:h-12 w-10 h-10">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-[#f8796c] hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  3
                </Link>
              </li>
              <li className="sm:w-12 sm:h-12 w-10 h-10">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-[#f8796c] hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  <MdKeyboardArrowRight className="sm:text-3xl text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      query,
    },
  };
};
