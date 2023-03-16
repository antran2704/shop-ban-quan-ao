import Link from "next/link";
import React, { useState, FC, MouseEvent } from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

import { initItemMobile } from ".";
import { INavItem } from "./interface";
import styles from "./Navbar.module.scss";

// const initNavbar = [
//   {
//     name: "Home",
//   },
//   {
//     name: "Design",
//     children: [
//       {
//         name: "Blog",
//         children: [
//           {
//             name: "test",
//             children: [
//               {
//                 name: "hihi",
//               },
//               {
//                 name: "haha",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Contact",
//   },
// ];

const Navbar: FC = () => {
  const [showNavbar, setShow] = useState<boolean>(false);
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

  return (
    <header>
      <nav className="flex items-center justify-between sm:px-6 px-4 py-3 bg-white">
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
          <li>
            <Link
              href="/"
              className="text-lg font-medium px-5 py-2 text-[#1e1e1e] hover:text-[#9ea18e] transition-all ease-linear duration-100"
            >
              Home
            </Link>
          </li>
          <li className={`${styles.navbarItem} relative`}>
            <Link
              href="/design"
              className="text-lg font-medium px-5 py-2 text-[#1e1e1e] hover:text-[#9ea18e] transition-all ease-linear duration-100"
            >
              Design
            </Link>
            <ul
              className={`${styles.navbarMega} absolute top-10 flex items-start bg-white shadow-lg gap-5 z-10`}
            >
              <div className="px-6 py-4">
                <Link
                  href={"/"}
                  className="block w-full text-lg font-normal text-[#1e1e1e] hover:text-[#9ea18e] whitespace-nowrap mb-2"
                >
                  Arts
                </Link>
                <ul className="flex flex-col items-start gap-2">
                  <li className="w-full">
                    <Link
                      href="#"
                      className="w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap hover:text-[#9ea18e] transition-all ease-linear duration-100"
                    >
                      Architecture Art
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="#"
                      className="w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap hover:text-[#9ea18e] transition-all ease-linear duration-100"
                    >
                      Literature Art
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="#"
                      className="w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap hover:text-[#9ea18e] transition-all ease-linear duration-100"
                    >
                      Theater Art
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="#"
                      className="w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap hover:text-[#9ea18e] transition-all ease-linear duration-100"
                    >
                      Ceramics Art
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4">
                <Link
                  href={"/"}
                  className="block w-full text-lg font-normal text-[#1e1e1e] hover:text-[#9ea18e] whitespace-nowrap mb-2"
                >
                  Arts
                </Link>
                <ul className="flex flex-col items-start gap-2">
                  <li className="w-full">
                    <Link
                      href="#"
                      className="w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap hover:text-[#9ea18e] transition-all ease-linear duration-100"
                    >
                      Architecture Art
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="#"
                      className="w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap hover:text-[#9ea18e] transition-all ease-linear duration-100"
                    >
                      Literature Art
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="#"
                      className="w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap hover:text-[#9ea18e] transition-all ease-linear duration-100"
                    >
                      Theater Art
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="#"
                      className="w-full text-base font-normal text-[#1e1e1e] whitespace-nowrap hover:text-[#9ea18e] transition-all ease-linear duration-100"
                    >
                      Ceramics Art
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <img
                src="https://www.livingspaces.com/globalassets/images/nav/02_d_bedroom_0624.jpg"
                alt=""
                className="h-full "
              /> */}
            </ul>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-lg font-medium px-5 py-2 text-[#1e1e1e] hover:text-[#9ea18e] transition-all ease-linear duration-100"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/aboutUs"
              className="text-lg font-medium px-5 py-2 text-[#1e1e1e] hover:text-[#9ea18e] transition-all ease-linear duration-100"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-medium px-5 py-2 text-[#1e1e1e] hover:text-[#9ea18e] transition-all ease-linear duration-100"
            >
              Contact
            </Link>
          </li>
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
                  className="block w-full text-lg font-medium py-2 text-[#1e1e1e] hover:text-[#9ea18e] transition-all ease-linear duration-100"
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
            <span className="flex items-center justify-center absolute -top-1 -right-2 md:w-5 md:h-5 w-4 h-4 text-xs text-white bg-[#9ea18e] rounded-full z-10">
              0
            </span>
          </div>
          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart className="relative lg:text-3xl md:text-2xl text-xl z-0" />
            <span className="flex items-center justify-center absolute -top-1 -right-2 md:w-5 md:h-5 w-4 h-4 text-xs text-white bg-[#9ea18e] rounded-full z-10">
              0
            </span>
          </div>
        </div>
      </nav>
      {/* layout close modal */}
      <div
        className={`${styles.navbarLayoutClose} ${
          showNavbar ? styles.show : ""
        } lg:hidden block fixed top-0 bottom-0 left-0 right-0 z-10`}
        style={{ backgroundColor: "rgba(1,1,1, 0.6)" }}
        onClick={handleShowModal}
      ></div>
    </header>
  );
};

export default Navbar;
