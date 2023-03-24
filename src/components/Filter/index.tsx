import { FC, useState, useRef, useEffect, ChangeEvent } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IFilterItem {
  labelFilter: string;
  valueFilter: string;
  paramFilter: string;
}

interface IFilterPrice {
  gte: string;
  lte: string;
}

interface Props {
  titleFilter: string;
  listFilterItem?: IFilterItem[];
  typeFilter: string;
  query?: any;
}

const FilterItem: FC<Props> = (props: Props) => {
  const { titleFilter, listFilterItem, typeFilter, query } = props;

  const formPriceInit: IFilterPrice = {
    gte: query?.gte ? query.gte : "",
    lte: query?.lte ? query.lte : "",
  };

  const listFilterRef = useRef<HTMLUListElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const [price, setPrice] = useState<IFilterPrice>(formPriceInit);

  const handleShowFilter = (): void => {
    const element = listFilterRef.current;
    if (element) {
      const height = element.scrollHeight;
      if (show) {
        element.style.height = "0px";
        setShow(false);
      } else {
        element.style.height = height + "px";
        setShow(true);
      }
    }
  };

  const onChangePrice = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    setPrice({ ...price, [name]: value });
  };

  const handleCheckedBox = (item: IFilterItem): boolean => {

    if (typeof query[item.paramFilter] === "string" && query[item.paramFilter] === item.valueFilter ) {
      return true
    } 
    
    if (typeof query[item.paramFilter] === "object") {
        return query[item.paramFilter]?.map((value: any) => {
            if(value === item.valueFilter) {
                return true;
            }
        })
    }
    return false;
  };

  useEffect(() => {
    const element = listFilterRef.current;
    if (element) {
      element.style.height = 0 + "px";
    }
  }, []);

  return (
    <div className="w-full pb-4 mb-8 border-b border-[#ededed]">
      <h2
        className="flex items-center justify-between text-xl font-medium"
        onClick={handleShowFilter}
      >
        {titleFilter}
        <MdKeyboardArrowDown className="text-2xl" />
      </h2>

      <ul
        ref={listFilterRef}
        className={`flex flex-col items-start mt-2 
          transition-all ease-linear duration-200 overflow-hidden gap-3`}
      >
        {/* checkBox */}
        {typeFilter === "checkBox" &&
          listFilterItem?.map((item: IFilterItem, index: number) => (
            <li key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={handleCheckedBox(item)}
                name={item.paramFilter}
                value={item.valueFilter}
                className="w-5 h-5"
              />
              <p className="text-base">{item.labelFilter}</p>
            </li>
          ))}

        {/* type price */}
        {typeFilter === "price" && (
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-base mb-1">From $</span>
                <input
                  name="gte"
                  type="number"
                  value={price.gte}
                  onChange={onChangePrice}
                  placeholder="0"
                  className="w-[100px] h-10 text-base p-2 border rounded"
                />
              </div>
              <div>
                <span className="block text-base mb-1">To $</span>
                <input
                  name="lte"
                  type="number"
                  onChange={onChangePrice}
                  value={price.lte}
                  placeholder="110.00"
                  className="w-[100px] h-10 text-base p-2 border rounded"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#f8796c] text-white text-lg font-medium px-5 py-2 mt-3"
            >
              Filter
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default FilterItem;
