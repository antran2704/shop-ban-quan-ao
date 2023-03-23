import Link from "next/link";
import { FC, useRef } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import FillterItem from "~/components/Fillter";

import Header from "~/components/Header";

const CollectionItem: FC = () => {
  const btnSubmitFilterRef = useRef<HTMLButtonElement>(null);

  const onChangeFilter = (): void => {
    const button = btnSubmitFilterRef.current;
    if (button) {
      button.click();
    }
  };
  return (
    <div>
      <Header title={"Collection item"} link={"/"} />
      <div className="container__cus">
        <div className="flex items-start justify-between my-10 gap-10">
          <div className="w-3/12">
            <form>
              <button ref={btnSubmitFilterRef} type="submit"></button>
              <FillterItem
                titleFilter="Availability"
                listFilterItem={[
                  {
                    labelFilter: "In stock",
                    valueFilter: "1",
                    paramFilter: "availability",
                  },
                ]}
                onChangeFilter={onChangeFilter}
              />
              <FillterItem
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
                onChangeFilter={onChangeFilter}
              />
              <FillterItem
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
                onChangeFilter={onChangeFilter}
              />
            </form>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-9/12 gap-4">
            <div className="relative md:p-4 p-3 rounded-md border border-[#e5e5e5]">
              <Link href={"/"} className="w-ful">
                <img
                  src="/images/category-1.avif"
                  alt="image category"
                  className="w-full rounded-xl"
                />
              </Link>
              <p className="md:text-base text-sm font-normal text-[#1e1e1e] text-start mt-3 truncate">
                Chinese Style Black Iron Table Lamp
              </p>
              <div className="flex items-center my-1">
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#1e1e1e]">
                  $250.00
                </span>
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#666] line-through">
                  $290.00
                </span>
              </div>
              <button className="md:w-auto w-full mt-3">
                <Link
                  href={"/"}
                  className="flex items-center justify-center md:text-base sm:text-sm text-xs font-normal bg-[#f0f0f0] hover:bg-[#9ea18e] text-[#1e1e1e] hover:text-white py-2 md:px-4 px-2 rounded"
                >
                  Select option
                </Link>
              </button>
              <span className="absolute top-2 left-2 text-xs font-medium py-0.5 px-2 bg-[#7e7e7e] text-[#ffffff] rounded">
                -13%
              </span>
            </div>
            <div className="relative md:p-4 p-3 rounded-md border border-[#e5e5e5]">
              <Link href={"/"} className="w-ful">
                <img
                  src="/images/category-1.avif"
                  alt="image category"
                  className="w-full rounded-xl"
                />
              </Link>
              <p className="md:text-base text-sm font-normal text-[#1e1e1e] text-start mt-3 truncate">
                Chinese Style Black Iron Table Lamp
              </p>
              <div className="flex items-center my-1">
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#1e1e1e]">
                  $250.00
                </span>
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#666] line-through">
                  $290.00
                </span>
              </div>
              <button className="md:w-auto w-full mt-3">
                <Link
                  href={"/"}
                  className="flex items-center justify-center md:text-base sm:text-sm text-xs font-normal bg-[#f0f0f0] hover:bg-[#9ea18e] text-[#1e1e1e] hover:text-white py-2 md:px-4 px-2 rounded"
                >
                  Select option
                </Link>
              </button>
              <span className="absolute top-2 left-2 text-xs font-medium py-0.5 px-2 bg-[#7e7e7e] text-[#ffffff] rounded">
                -13%
              </span>
            </div>
            <div className="relative md:p-4 p-3 rounded-md border border-[#e5e5e5]">
              <Link href={"/"} className="w-ful">
                <img
                  src="/images/category-1.avif"
                  alt="image category"
                  className="w-full rounded-xl"
                />
              </Link>
              <p className="md:text-base text-sm font-normal text-[#1e1e1e] text-start mt-3 truncate">
                Chinese Style Black Iron Table Lamp
              </p>
              <div className="flex items-center my-1">
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#1e1e1e]">
                  $250.00
                </span>
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#666] line-through">
                  $290.00
                </span>
              </div>
              <button className="md:w-auto w-full mt-3">
                <Link
                  href={"/"}
                  className="flex items-center justify-center md:text-base sm:text-sm text-xs font-normal bg-[#f0f0f0] hover:bg-[#9ea18e] text-[#1e1e1e] hover:text-white py-2 md:px-4 px-2 rounded"
                >
                  Select option
                </Link>
              </button>
              <span className="absolute top-2 left-2 text-xs font-medium py-0.5 px-2 bg-[#7e7e7e] text-[#ffffff] rounded">
                -13%
              </span>
            </div>
            <div className="relative md:p-4 p-3 rounded-md border border-[#e5e5e5]">
              <Link href={"/"} className="w-ful">
                <img
                  src="/images/category-1.avif"
                  alt="image category"
                  className="w-full rounded-xl"
                />
              </Link>
              <p className="md:text-base text-sm font-normal text-[#1e1e1e] text-start mt-3 truncate">
                Chinese Style Black Iron Table Lamp
              </p>
              <div className="flex items-center my-1">
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#1e1e1e]">
                  $250.00
                </span>
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#666] line-through">
                  $290.00
                </span>
              </div>
              <button className="md:w-auto w-full mt-3">
                <Link
                  href={"/"}
                  className="flex items-center justify-center md:text-base sm:text-sm text-xs font-normal bg-[#f0f0f0] hover:bg-[#9ea18e] text-[#1e1e1e] hover:text-white py-2 md:px-4 px-2 rounded"
                >
                  Select option
                </Link>
              </button>
              <span className="absolute top-2 left-2 text-xs font-medium py-0.5 px-2 bg-[#7e7e7e] text-[#ffffff] rounded">
                -13%
              </span>
            </div>
            <div className="relative md:p-4 p-3 rounded-md border border-[#e5e5e5]">
              <Link href={"/"} className="w-ful">
                <img
                  src="/images/category-1.avif"
                  alt="image category"
                  className="w-full rounded-xl"
                />
              </Link>
              <p className="md:text-base text-sm font-normal text-[#1e1e1e] text-start mt-3 truncate">
                Chinese Style Black Iron Table Lamp
              </p>
              <div className="flex items-center my-1">
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#1e1e1e]">
                  $250.00
                </span>
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#666] line-through">
                  $290.00
                </span>
              </div>
              <button className="md:w-auto w-full mt-3">
                <Link
                  href={"/"}
                  className="flex items-center justify-center md:text-base sm:text-sm text-xs font-normal bg-[#f0f0f0] hover:bg-[#9ea18e] text-[#1e1e1e] hover:text-white py-2 md:px-4 px-2 rounded"
                >
                  Select option
                </Link>
              </button>
              <span className="absolute top-2 left-2 text-xs font-medium py-0.5 px-2 bg-[#7e7e7e] text-[#ffffff] rounded">
                -13%
              </span>
            </div>
            <div className="relative md:p-4 p-3 rounded-md border border-[#e5e5e5]">
              <Link href={"/"} className="w-ful">
                <img
                  src="/images/category-1.avif"
                  alt="image category"
                  className="w-full rounded-xl"
                />
              </Link>
              <p className="md:text-base text-sm font-normal text-[#1e1e1e] text-start mt-3 truncate">
                Chinese Style Black Iron Table Lamp
              </p>
              <div className="flex items-center my-1">
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
                <AiFillStar className="text-sm text-[#ffc30e]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#1e1e1e]">
                  $250.00
                </span>
                <span className="inline-block md:text-base sm:text-sm text-xs text-[#666] line-through">
                  $290.00
                </span>
              </div>
              <button className="md:w-auto w-full mt-3">
                <Link
                  href={"/"}
                  className="flex items-center justify-center md:text-base sm:text-sm text-xs font-normal bg-[#f0f0f0] hover:bg-[#9ea18e] text-[#1e1e1e] hover:text-white py-2 md:px-4 px-2 rounded"
                >
                  Select option
                </Link>
              </button>
              <span className="absolute top-2 left-2 text-xs font-medium py-0.5 px-2 bg-[#7e7e7e] text-[#ffffff] rounded">
                -13%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
