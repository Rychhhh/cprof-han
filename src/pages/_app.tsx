import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import '../styles/keyframes.css'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  });

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
