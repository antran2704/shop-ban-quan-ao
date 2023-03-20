import dynamic from "next/dynamic";
import React, {FC} from "react";
import Footer from "~/components/Footer";

const Navbar = dynamic(() => import('~/components/Navbar/Navbar'), {
    ssr: false,
  })

interface Props {
    children: JSX.Element,
};

const DefaultLayout:FC<Props> = ({children}: Props) => {
    return ( 
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
     );
}

export default DefaultLayout;