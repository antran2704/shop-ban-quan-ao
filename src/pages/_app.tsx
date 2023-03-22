import type { AppProps } from 'next/app'
import DefaultLayout from '~/layouts/DefaultLayout'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';
import 'swiper/scss/autoplay';

import '~/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
