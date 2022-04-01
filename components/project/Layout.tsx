import { faArrowUpZA } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import {Link} from 'react-scroll';
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

interface Project {
  pageTitle : string;
  className: string;
  children: ReactNode;
}

export default function Layout( props: Project ) {
  const {children, pageTitle, className} = props;

  return (
    <div className={className}>
            <Head>
                <title>{''} {pageTitle} | UNION</title>
            </Head>
            <Navbar />
            <Header />
            <div >
              {children}
            </div>
            <Footer />
            <div >
              <Link to={'#top'} smooth={true}>
                <a href="#top" className="fixed py-3 px-5 bg-yellow-200 right-10 bottom-10 transition rounded-xl hover:-translate-y-2">
                  <FontAwesomeIcon icon={faArrowUpZA} style={{ width: '30px', height: '30px' }}></FontAwesomeIcon>
                </a>
              </Link>
            </div>
        </div>
   
  )
}
