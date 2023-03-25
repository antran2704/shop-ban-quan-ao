import Link from "next/link";
import { FC } from "react";

interface Props {
  title: String,
  link: String
}

const Header: FC<Props> = (props: Props) => {
  const { title, link } = props;
  return (
    <header
      className="flex items-center lg:h-[200px] h-[140px] bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/breadcrumb_1.webp)",
      }}
    >
      <div className="container__cus w-full">
        <h1 className="text-4xl font-medium mb-2">{title}</h1>
        <div className="flex items-center text-lg gap-2">
          <Link href={`${link}`}>Home</Link>
          <span>|</span>
          <span className="text-primary">{title}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
