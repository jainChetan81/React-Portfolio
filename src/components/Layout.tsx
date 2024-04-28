"use client"
import Head from "next/head";
import { LegacyRef, useRef } from "react";
import { Footer, Sidebar } from ".";
type LayoutType = {
  title: string;
  keywords?: string;
  description?: string;
  children?: any;
};
const Layout = ({ title, keywords, description, children }: LayoutType) => {
  const bodyRef: LegacyRef<HTMLDivElement> = useRef(null);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charSet="utf-8" />
        <meta name="author" content="Chetan Jain" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <div className="body dark" ref={bodyRef}>
        <Sidebar bodyRef={bodyRef} />
        <div className="custom-shape-divider-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
