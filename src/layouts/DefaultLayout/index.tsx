import React, {FC} from "react";
import Navbar from "~/components/Navbar/Navbar";

interface Props {
    children: JSX.Element,
};

const DefaultLayout:FC<Props> = ({children}: Props) => {
    return ( 
        <main>
            <Navbar />
            {children}
        </main>
     );
}

export default DefaultLayout;