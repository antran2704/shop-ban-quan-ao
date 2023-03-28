import { GetServerSideProps } from "next";
import Link from "next/link";
import { FC, useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import FilterItem from "~/components/Filter";

import Header from "~/components/Header";
import ProductItem from "~/components/ProductItem";

interface Props {
  query: any;
}

const sizes: string[] = ["S", "M", "L", "XL"];

const CollectionItem: FC<Props> = (props: Props) => {
  const btnSubmitFilterRef = useRef<HTMLButtonElement>(null);
  const { query } = props;
  return (
    <div>
      <Header title={"Collection item"} listBackLinks={[{title: "Home", link: "/"}]} />
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
              <FilterItem
                titleFilter="Price"
                typeFilter="price"
                query={query}
              />
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
                className="w-full flex items-center justify-center bg-primary text-white text-lg font-medium px-5 py-2 mt-3"
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
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-primary hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  <MdKeyboardArrowLeft className="sm:text-3xl text-xl" />
                </Link>
              </li>
              <li className="sm:w-12 sm:h-12 w-10 h-10">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-primary hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  1
                </Link>
              </li>
              <li className="sm:w-12 sm:h-12 w-10 h-10">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-primary hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  2
                </Link>
              </li>
              <li className="sm:w-12 sm:h-12 w-10 h-10">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-primary hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  3
                </Link>
              </li>
              <li className="sm:w-12 sm:h-12 w-10 h-10">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full bg-white hover:bg-primary hover:text-white text-lg font-medium border border-[#e5e5e5] transition-all ease-linear duration-100"
                >
                  <MdKeyboardArrowRight className="sm:text-3xl text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Category */}
      <section className="category my-10">
        <div className="container__cus">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xl font-normal text-[#1e1e1e]">
              Shop By Category
            </p>
            <div className="flex items-center gap-2">
              <button className="category__btn-prev flex items-center justify-center w-8 h-8 bg-[#f0f0f0] hover:bg-primary rounded-full transition-all duration-100">
                <MdKeyboardArrowLeft className="text-3xl text-[#9ea18e] hover:text-white" />
              </button>
              <button className="category__btn-next flex items-center justify-center w-8 h-8 bg-[#f0f0f0] hover:bg-primary rounded-full transition-all duration-100">
                <MdKeyboardArrowRight className="text-3xl text-[#9ea18e] hover:text-white" />
              </button>
            </div>
          </div>
          <div className="lg:p-8 md:p-6 p-4 rounded-md border border-[#e5e5e5] ">
            <Swiper
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={20}
              navigation={{
                nextEl: ".category__btn-next",
                prevEl: ".category__btn-prev",
              }}
              breakpoints={{
                478: {
                  slidesPerView: 3,
                },
                650: {
                  slidesPerView: 4,
                },
                990: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-1.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Architecture Art Lorem
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-2.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Theater Art
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-3.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Ceramics Art
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-4.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Sculpture Art
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-5.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Painting Art
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-1.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Architecture Art Lorem
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-2.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Theater Art
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-3.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Ceramics Art
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-4.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Sculpture Art
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-2/12">
                <Link href={"/"} className="w-ful">
                  <img
                    src="/images/category-5.avif"
                    alt="image category"
                    className="w-full rounded-xl"
                  />
                </Link>
                <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                  Painting Art
                </p>
                <a
                  href="#"
                  className="block w-full text-sm font-medium text-primary text-center hover:underline"
                >
                  View more
                </a>
              </SwiperSlide>
            </Swiper>
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
