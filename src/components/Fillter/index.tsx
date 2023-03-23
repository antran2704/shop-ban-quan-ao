import { FC, useState, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IFilterItem {
  labelFilter: string;
  valueFilter: string;
  paramFilter: string;
}

interface Props {
  titleFilter: string;
  listFilterItem: IFilterItem[];
  onChangeFilter?(): void;
}

const FillterItem: FC<Props> = (props: Props) => {
  const { titleFilter, listFilterItem, onChangeFilter } = props;

  const listFilterRef = useRef<HTMLUListElement>(null);
  const [show, setShow] = useState<boolean>(true);

  const handleShowFilter = (): void => {
    const element = listFilterRef.current;
    if (element) {
      if (show) {
        element.style.maxHeight = "0px";
        setShow(false);
      } else {
        element.style.maxHeight = element.scrollHeight + "px";
        setShow(true);
      }
    }
  };

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
        className={`flex flex-col items-start max-h-full mt-2 
          transition-all ease-linear duration-200 overflow-hidden gap-3`}
      >
        {listFilterItem.map((item: IFilterItem, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              name={item.paramFilter}
              value={item.valueFilter}
              onChange={onChangeFilter}
              className="w-5 h-5"
            />
            <p className="text-base">{item.labelFilter}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FillterItem;
