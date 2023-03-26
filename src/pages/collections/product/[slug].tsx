import { GetServerSideProps } from "next";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Header from "~/components/Header";

interface Props {
  query: any;
}

const CollectionItem: FC<Props> = (props: Props) => {
  return (
    <div>
      <Header
        title={"Product"}
        listBackLinks={[
          { title: "Home", link: "/" },
          { title: "Collection item", link: "/collections/test" },
        ]}
      />

      <section className="container__cus">
        <div className="flex lg:flex-nowrap flex-wrap items-start lg:justify-between justify-center my-14 lg:gap-5 gap-8">
          <div className="lg:w-5/12 sm:w-6/12 w-full">
            <img
              className="w-full"
              src="/images/product/product1.webp"
              alt="product image"
            />
            <div className="flex items-center w-full mt-4 gap-2">
              <div className="w-1/4 border border-primary">
                <img
                  className="w-full"
                  src="/images/product/product1.webp"
                  alt="product image"
                />
              </div>
              <div className="w-1/4">
                <img
                  className="w-full"
                  src="/images/product/product2.webp"
                  alt="product image"
                />
              </div>
              <div className="w-1/4">
                <img
                  className="w-full"
                  src="/images/product/product3.webp"
                  alt="product image"
                />
              </div>
              <div className="w-1/4">
                <img
                  className="w-full"
                  src="/images/product/product4.webp"
                  alt="product image"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full">
            <div className="pb-5 mb-5 border-b border-borderColor">
              <h3 className="text-2xl font-medium">
                X. Complementary Product 2
              </h3>
              <h2 className="text-3xl font-medium my-3">$29.00</h2>
              <p className="text-base text-[#071c1f]">
                The European languages are members of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                Europe uses the same vocabulary. The languages only differ in
                their grammar
              </p>
            </div>
            <div className="pb-5 mb-5 border-b border-borderColor">
              <div className="flex items-center text-sm mb-5">
                <span className="text-base font-medium min-w-[100px]">
                  SKU:
                </span>
                <p>102</p>
              </div>
              <div className="flex items-center text-sm mb-5">
                <span className="text-base font-medium min-w-[100px]">
                  Vendor:
                </span>
                <p>Vendor E</p>
              </div>
              <div className="flex items-center text-sm mb-5">
                <span className="text-base font-medium min-w-[100px]">
                  Type:
                </span>
                <p>Type E</p>
              </div>
            </div>
            <div className="pb-5 mb-5 border-b border-borderColor">
              <div className="flex items-center">
                <span className="text-base font-medium min-w-[100px]">
                  Size:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <button className="text-sm px-4 py-0.5 font-medium hover:text-white hover:bg-primary border border-borderColor transition-all ease-linear duration-100">
                    S
                  </button>
                  <button className="text-sm px-4 py-0.5 font-medium hover:text-white hover:bg-primary border border-borderColor transition-all ease-linear duration-100">
                    M
                  </button>
                  <button className="text-sm px-4 py-0.5 font-medium hover:text-white hover:bg-primary border border-borderColor transition-all ease-linear duration-100">
                    L
                  </button>
                  <button className="text-sm px-4 py-0.5 font-medium hover:text-white hover:bg-primary border border-borderColor transition-all ease-linear duration-100">
                    XXL
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-5 mb-5 border-b border-borderColor">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center lg:w-3/12 w-6/12 h-14">
                  <button className="flex items-center justify-center text-xl font-medium w-4/12 h-full border border-borderColor">
                    -
                  </button>
                  <button className="flex items-center justify-center text-base font-medium w-4/12 h-full border border-borderColor">
                    1
                  </button>
                  <button className="flex items-center justify-center text-xl font-medium w-4/12 h-full border border-borderColor">
                    +
                  </button>
                </div>
                <div className="lg:w-8/12 sm:flex-nowrap flex-wrap w-full flex items-center h-14 gap-3">
                  <button className="sm:w-6/12 w-full h-full">
                    <Link
                      className="flex items-center justify-center w-full h-full text-base font-medium text-white bg-primary px-4 gap-2 transition-all ease-linear duration-100"
                      href={"/"}
                    >
                      <AiOutlineShoppingCart className="text-2xl" />
                      Add to cart
                    </Link>
                  </button>
                  <button className="sm:w-6/12 w-full h-full">
                    <Link
                      className="flex items-center justify-center w-full h-full text-base font-medium text-white bg-dark hover:bg-primary px-4 transition-all ease-linear duration-100 gap-2"
                      href={"/"}
                    >
                      Buy it now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
