import Link from "next/link";
import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Interface
import { ICategory, ICategoryPayload } from "~/interfaces/apiResponse";

import { AppDispatch, RootState } from "~/store";
import { GetCategories } from "~/store/actions";

import ProductItem from "~/components/ProductItem";

const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.data);

  console.log(categories);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const data: ICategoryPayload = await axios
          .get(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}/category/getAllCategories`
          )
          .then((res) => res.data);

        dispatch(GetCategories(data.payload));
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);
  return (
    <div>
      {/* banner */}
      <section
        id="banner"
        className="w-full lg:h-[500px] md:h-[450px] sm:h-[400px] h-[340px] "
      >
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          slidesPerView={1}
          loop={true}
          enabled={true}
          speed={600}
          autoplay={{
            delay: 8000,
          }}
          breakpoints={{
            960: {
              navigation: {
                enabled: true,
              },
            },
          }}
          navigation={{ enabled: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          <SwiperSlide
            className="relative flex items-center sm:justify-start justify-center w-full h-full bg-cover bg-center md:pl-24 px-5"
            style={{ backgroundImage: "url(/images/banner1.webp)" }}
          >
            <div className="lg:w-6/12 sm:w-8/12 w-full">
              <p className="banner__subtitle text-xl text-normal text-[#1e1e1e]">
                Best Wooden Products
              </p>
              <h2 className="banner__title lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-[#1e1e1e] font-semibold mt-4 md:mb-8 mb-4">
                New Sell Handmade Collection
              </h2>
              <button className="banner__btn border-0">
                <Link
                  href={"/"}
                  className="flex items-center justify-center text-base text-medium text-white bg-primary hover:bg-[#1e1e1e] transition-all duration-100 ease-linear px-5 py-2 rounded-md"
                >
                  Shop Now
                </Link>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="relative flex items-center sm:justify-start justify-center w-full h-full bg-cover bg-center md:pl-24 px-5"
            style={{ backgroundImage: "url(/images/banner2.webp)" }}
          >
            <div className="lg:w-6/12 sm:w-8/12 w-full">
              <p className="banner__subtitle text-xl text-normal text-[#1e1e1e]">
                Best Wooden Products
              </p>
              <h2 className="banner__title lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-[#1e1e1e] font-semibold mt-4 md:mb-8 mb-4">
                New Sell Handmade Collection
              </h2>
              <button className="banner__btn border-0">
                <Link
                  href={"/"}
                  className="flex items-center justify-center text-base text-medium text-white bg-primary hover:bg-[#1e1e1e] transition-all duration-100 ease-linear px-5 py-2 rounded-md"
                >
                  Shop Now
                </Link>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

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
              {categories.map((category: ICategory, index: number) => (
                <SwiperSlide key={index} className="w-2/12">
                  <Link href={`/collections/${category.slug}`} className="w-ful">
                    <img
                      src={category.thumbnail}
                      alt="image category"
                      className="w-full rounded-xl"
                    />
                  </Link>
                  <p className="text-base font-normal text-[#1e1e1e] text-center mt-3 truncate">
                    {category.title}
                  </p>
                  <a
                    href="#"
                    className="block w-full text-sm font-medium text-primary text-center hover:underline"
                  >
                    View more
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Best Seller */}
      <section className="trending my-10">
        <div className="container__cus">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xl font-normal text-[#1e1e1e]">Best Seller</p>
            <div className="flex items-center gap-2">
              <button className="trending__btn-prev flex items-center justify-center w-8 h-8 bg-[#f0f0f0] hover:bg-primary rounded-full transition-all duration-100">
                <MdKeyboardArrowLeft className="text-3xl text-[#9ea18e] hover:text-white" />
              </button>
              <button className="trending__btn-next flex items-center justify-center w-8 h-8 bg-[#f0f0f0] hover:bg-primary rounded-full transition-all duration-100">
                <MdKeyboardArrowRight className="text-3xl text-[#9ea18e] hover:text-white" />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={10}
            navigation={{
              nextEl: ".trending__btn-next",
              prevEl: ".trending__btn-prev",
            }}
            breakpoints={{
              478: {
                slidesPerView: 3,
                spaceBetween: 14,
              },
              650: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              990: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Brands */}
      <section className="my-10">
        <div className="container__cus">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
            }}
            slidesPerView={2}
            loop={true}
            enabled={true}
            breakpoints={{
              478: {
                slidesPerView: 3,
                spaceBetween: 14,
              },
              650: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              990: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <img src="/images/brand-1.avif" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-2.avif" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-3.webp" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-4.webp" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-1.avif" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-2.avif" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-3.webp" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-4.webp" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-2.avif" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-3.webp" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-4.webp" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-2.avif" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-3.webp" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/brand-4.webp" alt="banner" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;
