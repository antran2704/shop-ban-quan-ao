import Link from "next/link";
import { FC } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Header from "~/components/Header";

import { useAppDispatch, useAppSelector } from "~/store/hooks";
import CartItem from "~/components/CartItem";
import { currencyFormat } from "~/helpers/currencyFormat";
import { toast } from "react-toastify";
import { updateItem } from "~/store/slice/cartSlice";
import axios from "axios";

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const cart = useAppSelector((state) => state.cart);

  const hanldeUpdateCart = async (payload: any) => {
    console.log("payload:::", payload)
    try {
      const response = await axios
        .post(
          `${process.env.NEXT_PUBLIC_ENDPOINT_API}/carts/update/${user.infor._id}`,
          payload
        )
        .then((res) => res.data);
      if (response.status === 201) {
        const payload = {
          cart_count: response.payload.cart_count,
          cart_total: response.payload.cart_total,
          cart_products: response.payload.cart_products,
        };

        dispatch(updateItem(payload));
        toast.success("Updated success", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Add product failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <Header title={"Cart"} listBackLinks={[{ title: "Home", link: "/" }]} />

      {user.infor._id && (
        <section className="container__cus">
          {cart.cart_products.length > 0 ? (
            <div>
              <ul className="flex flex-col items-start my-10 lg:gap-5 gap-10">
                {cart.cart_products.map((item: any, index: number) => (
                  <CartItem
                    onUpdate={hanldeUpdateCart}
                    data={item}
                    index={index}
                    key={index}
                  />
                ))}
              </ul>
              <div className="flex lg:flex-nowrap flex-wrap items-start justify-between gap-5">
                <div className="lg:w-4/12 w-full">
                  <button
                    // onClick={() => dispatch(ClearCarts())}
                    className="flex items-center justify-center sm:w-auto w-full text-lg font-medium text-white whitespace-nowrap hover:text-dark bg-primary hover:bg-white px-8 py-2 gap-2 border border-primary hover:border-dark transition-all ease-linear duration-100"
                  >
                    Clear cart
                  </button>
                </div>
                <div className="lg:w-6/12 w-full sm:mt-0 mt-8">
                  <h3 className="text-xl font-medium mb-5">Cart Totals</h3>
                  <table className="table-auto flex items-center">
                    <thead className="w-6/12 md:text-lg text-base">
                      <tr className="block w-full">
                        <th className="block w-full text-start p-4 border border-borderColor">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="w-6/12 md:text-lg text-base">
                      <tr className="block w-full">
                        <td className="block w-full text-start p-4 border border-borderColor">
                          {`${currencyFormat(cart.cart_total)} VND`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link
                    href={"/checkout"}
                    className="flex items-center justify-center w-full text-lg font-medium text-white whitespace-nowrap hover:text-dark bg-primary hover:bg-white px-8 py-3 mt-4 gap-2 border border-primary hover:border-dark transition-all ease-linear duration-100"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-10">
              <h2 className="text-3xl font-medium">Shopping Cart</h2>
              <h3 className="text-xl font-medium mt-2">
                Your cart is currently empty.
              </h3>
            </div>
          )}
        </section>
      )}

      {!user.infor._id && (
        <section className="container__cus">
          <div className="py-10">
            <h2 className="text-3xl font-medium">Shopping Cart</h2>
            <h3 className="text-xl font-medium mt-2">Please login</h3>
          </div>
        </section>
      )}

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

export default Cart;
