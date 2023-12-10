import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "../store";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";
import "swiper/scss/autoplay";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "~/styles/globals.scss";

import LAYOUT from "~/layouts";

export default function App({ Component, pageProps }: AppProps) {
  const pathName = usePathname();
  let Layout;

  switch (pathName) {
    case "/login":
      Layout = LAYOUT.LoginLayout;
      break;

    default:
      Layout = LAYOUT.DefaultLayout;
  }

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
