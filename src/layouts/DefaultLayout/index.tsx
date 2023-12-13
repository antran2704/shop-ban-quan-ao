import dynamic from "next/dynamic";
import React, { FC, useEffect, useState } from "react";
import { getCookies } from "cookies-next";

import Footer from "~/components/Footer";
import axios from "axios";
import { login } from "~/store/slice";
import { useAppDispatch } from "~/store/hooks";
import Navbar from "~/components/Navbar/Navbar";
import Loading from "~/components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  children: JSX.Element;
}

const DefaultLayout: FC<Props> = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  const handleGetUser = async () => {
    const { accessToken, publicKey } = getCookies();

    if (!accessToken || !publicKey) {
      setLoading(false);
      return;
    };

    setLoading(true);
    try {
      const response = await axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/users`, {
          headers: {
            Authorization: `Bear ${accessToken}`,
            "public-key": `Key ${publicKey}`,
          },
        })
        .then((res) => res.data);

      if (response.status === 200) {
        const infor = {
          _id: response.payload._id,
          name: response.payload.name,
          email: response.payload.email,
          avartar: response.payload.avartar,
        };

        dispatch(login(infor));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <main>
      {!loading && <Navbar />}
      {children}
      {/* Get Our Latets Update  */}
      <section
        className="flex items-center justify-center w-full h-[370px] bg-cover bg-center md:pl-24 px-5 mt-10"
        style={{
          backgroundImage: "url(/images/newsletter-parallax.webp)",
          backgroundAttachment: "fixed",
        }}
      >
        <div>
          <h2 className="text-3xl text-[#1e1e1e] text-center font-medium">
            Get Our Latets Update !
          </h2>
          <p className="text-lg text-center text-[#555555] mt-2">
            Subscribe to our latest newsletter to get news about special
            discounts.
          </p>
          <form className="flex flex-wrap items-center justify-center mt-8 overflow-hidden sm:gap-0 gap-3">
            <input
              required
              type="email"
              placeholder="Your Email Address"
              className="h-11 sm:w-9/12 w-full bg-white px-5 py-2 outline-0"
            />
            <button className="h-11 sm:w-3/12 w-1/2 px-5 text-white bg-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <Footer />
      <ToastContainer
        autoClose={5000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      {loading && <Loading />}
    </main>
  );
};

export default DefaultLayout;
