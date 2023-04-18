import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

import { initItemDesktop, initItemMobile } from "./index";

import { IOrderProduct } from "~/interfaces/apiResponse";
import { IMegaItem, INavItem } from "./interface";

import useClientY from "~/hooks/useClientY";


import { RootState } from "~/store";
import { GetListCart, handleDeleteProductInCart } from "~/store/actions";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const { listCarts, totalCart, totalPrice } = useSelector(
    (state: RootState) => state.data
  );

  const router = useRouter();
  const top = useClientY();

  // const [totalCart, setTotalCart] = useState<number>(0);
  const [showNavbar, setShow] = useState<boolean>(false);
  const [showModalCart, setShowModalCart] = useState<boolean>(false);
  const [currentNav, setCurrentNav] = useState([initItemMobile]);

  const handleShowModal = (): void => {
    if (showNavbar) {
      setCurrentNav([initItemMobile]);
    }
    setShow(!showNavbar);
  };

  const handleAddItem = (items: INavItem[]) => {
    setCurrentNav([...currentNav, items]);
  };

  const handleBack = () => {
    const newCurrentMenu = currentNav.splice(0, currentNav.length - 1);
    setCurrentNav(newCurrentMenu);
  };

  useEffect(() => {
    setShowModalCart(false);
  }, [router.pathname]);

  return (
    <header>
      <nav className="flex items-center justify-between px-5 py-3 bg-white">
        <div className="flex items-center gap-3">
          <HiMenu
            className="lg:hidden block text-3xl cursor-pointer"
            onClick={handleShowModal}
          />
          <Link href="/" className="lg:w-[200px] md:w-[160px] w-[100px]">
            <img src="/images/logo.webp" alt="logo image" className="w-100" />
          </Link>
        </div>

        {/* navbar content on PC */}
        <ul className="lg:flex hidden items-center gap-6">
          {initItemDesktop.map((item: INavItem, index: number) => (
            <li key={index} className={`${styles.navbarItem} relative`}>
              {item.path.length > 1 ? (
                <Link
                  href={item.path}
                  className={`text-lg font-medium px-5 py-2 text-[#1e1e1e] ${
                    router.asPath.includes(item.path) ? "text-primary" : ""
                  } hover:text-primary transition-all ease-linear duration-100`}
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  href={item.path}
                  className={`text-lg font-medium px-5 py-2 text-[#1e1e1e] ${
                    router.asPath === item.path ? "text-primary" : ""
                  } hover:text-primary transition-all ease-linear duration-100`}
                >
                  {item.name}
                </Link>
              )}

              {item?.megaMenu && (
                <ul
                  className={`${styles.navbarMega} absolute top-10 flex items-start bg-white shadow-lg gap-5 z-10`}
                >
                  {item.megaMenu.map((item: IMegaItem, index: number) => (
                    <div key={index} className="px-6 py-4">
                      <Link
                        href={"/"}
                        className="block w-full text-lg font-normal text-[#1e1e1e] hover:text-primary whitespace-nowrap mb-2"
                      >
                        {item.title}
                      </Link>
                      <ul className="flex flex-col items-start gap-2">
                        {item.items.map((item: INavItem, index: number) => (
                          <li key={index} className="w-full">
                            <Link
                              href={item.path}
                              className={`w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap ${
                                router.asPath === item.path
                                  ? "text-primary"
                                  : ""
                              }
                               hover:text-primary transition-all ease-linear duration-100`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {/* <img
                  src="https://www.livingspaces.com/globalassets/images/nav/02_d_bedroom_0624.jpg"
                  alt=""
                  className="h-full "
                /> */}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* navbar content on Tablet & Mobile */}
        <ul
          className={`${styles.navbarMobile} ${
            showNavbar ? styles.show : ""
          } lg:hidden block fixed top-0 bottom-0 left-0  px-6 py-4 md:w-1/2 w-full bg-white shadow-lg z-40`}
        >
          <div className="w-full mb-3">
            {currentNav.length > 1 ? (
              <BsArrowLeftShort
                className="text-2xl cursor-pointer"
                onClick={handleBack}
              />
            ) : (
              <AiOutlineClose
                className="text-2xl ml-auto cursor-pointer"
                onClick={handleShowModal}
              />
            )}
          </div>
          {currentNav[currentNav.length - 1].map(
            (item: INavItem, index: number) => (
              <li
                key={index}
                className="flex items-center justify-between w-full"
              >
                <Link
                  href={item.path}
                  onClick={handleShowModal}
                  className={`block w-full text-lg font-medium py-2 text-[#1e1e1e] ${
                    router.asPath === item.path ? "text-primary" : ""
                  } hover:text-primary transition-all ease-linear duration-100`}
                >
                  {item.name}
                </Link>
                {item?.children && (
                  <BsArrowRightShort
                    className="text-3xl cursor-pointer"
                    onClick={() => handleAddItem(item.children!)}
                  />
                )}
              </li>
            )
          )}
        </ul>

        <div className="flex items-center md:gap-4 gap-3">
          <div className="relative cursor-pointer">
            <AiOutlineSearch className="lg:text-3xl md:text-2xl text-xl" />
          </div>
          <div className="relative cursor-pointer">
            <AiOutlineHeart className="relative lg:text-3xl md:text-2xl text-xl z-0" />
            <span className="flex items-center justify-center absolute -top-1 -right-2 md:w-5 md:h-5 w-4 h-4 text-xs text-white bg-primary rounded-full z-10">
              0
            </span>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setShowModalCart(true)}
          >
            <AiOutlineShoppingCart className="relative lg:text-3xl md:text-2xl text-xl z-0" />
            <span className="flex items-center justify-center absolute -top-1 -right-2 md:w-5 md:h-5 w-4 h-4 text-xs text-white bg-primary rounded-full z-10">
              {totalCart < 100 ? totalCart : "99"}
            </span>
          </div>
        </div>
      </nav>

      {/* navbar on scroll */}
      <nav
        className={`${styles.navbarScroll} ${
          top > 100 ? styles.show : ""
        } fixed w-full flex items-center justify-between px-5 py-3 bg-white shadow-md z-20`}
      >
        <div className="flex items-center gap-3">
          <HiMenu
            className="lg:hidden block text-3xl cursor-pointer"
            onClick={handleShowModal}
          />
          <Link href="/" className="lg:w-[200px] md:w-[160px] w-[100px]">
            <img src="/images/logo.webp" alt="logo image" className="w-100" />
          </Link>
        </div>

        {/* navbar content on PC */}
        <ul className="lg:flex hidden items-center gap-6">
          {initItemDesktop.map((item: INavItem, index: number) => (
            <li key={index} className={`${styles.navbarItem} relative`}>
              {item.path.length > 1 ? (
                <Link
                  href={item.path}
                  className={`text-lg font-medium px-5 py-2 text-[#1e1e1e] ${
                    router.asPath.includes(item.path) ? "text-primary" : ""
                  } hover:text-primary transition-all ease-linear duration-100`}
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  href={item.path}
                  className={`text-lg font-medium px-5 py-2 text-[#1e1e1e] ${
                    router.asPath === item.path ? "text-primary" : ""
                  } hover:text-primary transition-all ease-linear duration-100`}
                >
                  {item.name}
                </Link>
              )}
              {item?.megaMenu && (
                <ul
                  className={`${styles.navbarMega} absolute top-10 flex items-start bg-white shadow-lg gap-5 z-10`}
                >
                  {item.megaMenu.map((item: IMegaItem, index: number) => (
                    <div key={index} className="px-6 py-4">
                      <Link
                        href={"/"}
                        className="block w-full text-lg font-normal text-[#1e1e1e] hover:text-primary whitespace-nowrap mb-2"
                      >
                        {item.title}
                      </Link>
                      <ul className="flex flex-col items-start gap-2">
                        {item.items.map((item: INavItem, index: number) => (
                          <li key={index} className="w-full">
                            <Link
                              href={item.path}
                              className="w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap hover:text-primary transition-all ease-linear duration-100"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {/* <img
                  src="https://www.livingspaces.com/globalassets/images/nav/02_d_bedroom_0624.jpg"
                  alt=""
                  className="h-full "
                /> */}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center md:gap-4 gap-3">
          <div className="relative cursor-pointer">
            <AiOutlineSearch className="lg:text-3xl md:text-2xl text-xl" />
          </div>
          <div className="relative cursor-pointer">
            <AiOutlineHeart className="relative lg:text-3xl md:text-2xl text-xl z-0" />
            <span className="flex items-center justify-center absolute -top-1 -right-2 md:w-5 md:h-5 w-4 h-4 text-xs text-white bg-primary rounded-full z-10">
              0
            </span>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setShowModalCart(true)}
          >
            <AiOutlineShoppingCart className="relative lg:text-3xl md:text-2xl text-xl z-0" />
            <span className="flex items-center justify-center absolute -top-1 -right-2 md:w-5 md:h-5 w-4 h-4 text-xs text-white bg-primary rounded-full z-10">
              {totalCart < 100 ? totalCart : "99"}
            </span>
          </div>
        </div>
      </nav>

      {/* layout close modal */}
      <div
        className={`${styles.navbarLayoutClose} ${
          showNavbar ? styles.show : ""
        } lg:hidden block fixed top-0 bottom-0 left-0 right-0 z-30`}
        style={{ backgroundColor: "rgba(1,1,1, 0.6)" }}
        onClick={handleShowModal}
      ></div>

      {/* modal cart */}
      <div
        className={`${styles.modalCart} ${
          showModalCart ? styles.show : ""
        } fixed top-0 bottom-0 left-0 right-0 z-30`}
      >
        <div
          className={`${styles.modalCartLayout} abosulte w-full h-full z-10`}
          style={{ backgroundColor: "rgba(1, 1, 1, 0.6)" }}
          onClick={() => setShowModalCart(false)}
        ></div>
        <div
          className={`${styles.modalCartContent} absolute flex flex-col items-start h-full top-0 py-6 px-8 sm:w-[400px] w-full bg-white shadow-sm rounded-l-md z-20 gap-5`}
        >
          <div className="flex w-full items-center justify-between pb-3 border-b border-borderColor gap-10">
            <p className="text-base font-medium">Cart</p>
            <AiOutlineClose
              className="text-xl ml-auto mb-2 cursor-pointer"
              onClick={() => setShowModalCart(false)}
            />
          </div>
          <ul className="scrollHidden flex flex-col w-full h-[80vh] pb-3 border-b border-borderColor gap-3 overflow-y-auto ">
            {listCarts.map((item: IOrderProduct, index: number) => (
              <li
                key={index}
                className="flex items-center pb-3 px-2 border-b border-borderColor gap-4"
              >
                <div className="relative h-20">
                  <img
                    src={item.avatarProduct}
                    className="sm:w-[80px] sm:h-[80px] w-[60px] h-[60px]"
                    alt="img"
                  />
                  <AiFillCloseCircle
                    onClick={() => {
                      handleDeleteProductInCart(listCarts, index);
                      dispatch(GetListCart());
                    }}
                    className="absolute -top-0.5 -left-1 text-2xl hover:text-primary cursor-pointer"
                  />
                </div>
                <div className="w-8/12">
                  <Link
                    href={item.slug}
                    className="sm:text-base text-sm font-medium hover:text-primary"
                  >
                    {item.name}
                  </Link>
                  <div className="flex items-center gap-2">
                    {item.size && (
                      <span className="sm:text-sm text-xs">Size: {item.size}</span>
                    )}
                    {item.color && (
                      <span className="sm:text-sm text-xs">Color: {item.color}</span>
                    )}
                  </div>
                  <p className="sm:text-base text-sm mt-2">
                    {item.count} X ${item.price}.00
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex w-full items-center justify-between pb-3 gap-3">
            <p className="text-lg font-medium">Subtotal:</p>
            <p className="text-lg text-primary font-medium">${totalPrice}.00</p>
          </div>
          <div className="flex sm:flex-nowrap flex-wrap justify-between items-center w-full pb-3 border-b border-borderColor gap-2">
            <Link
              href={"/cart"}
              className="flex items-center justify-center sm:w-auto w-full text-lg font-medium text-white whitespace-nowrap hover:text-dark bg-primary hover:bg-white px-8 py-2 gap-2 border border-primary hover:border-dark transition-all ease-linear duration-100"
            >
              View cart
            </Link>
            <button className="flex items-center justify-center sm:w-auto w-full text-lg font-medium text-white whitespace-nowrap bg-dark hover:bg-primary px-8 py-2 transition-all ease-linear border border-transparent duration-100 gap-2">
              Check out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
