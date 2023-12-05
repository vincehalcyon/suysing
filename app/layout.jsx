"use client"
import * as React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { cloneElement, useState, useEffect } from 'react'; 
import Footer from '../components/Footer'
import { useRouter, usePathname } from "next/navigation"
import './globals.css'
export default function RootLayout ({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0);
  const isAtHomepage = router.pathname === "/";
  const approachingLowSection = scrollY >= 250;
  useEffect(() => {
    if (isAtHomepage) {
      window.addEventListener("scroll", () => {
        setScrollY(window.pageYOffset);
      });
    }

    return window.removeEventListener("scroll", () => {
      setScrollY(window.pageYOffset);
    });
  }, [isAtHomepage]);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [upperHeaderMenu, setUpperHeaderMenu] = useState([
    { name: "About", url: "/about" },
    { name: "Branches", url: "/branches" },
    { name: "News", url: "/news" },
    { name: "Products", url: "/products" },
    // { name: "Programs", url: "/programs" },
    // { name: "Promotions", url: "/promotions" },
    // { name: "Services", url: "/services" },
    // { name: "Suppliers", url: "/suppliers" },
  ]);
  return (
    <div>
      <div
        className={`sticky top-0 md:py-2 py-0 z-50 w-full transition duration-600 ease-in-out  ${
          approachingLowSection || !isAtHomepage
            ? "bg-royal-blue"
            : "bg-transparent"
        }`}
      >
        <div className="xxl:max-w-[1345px] xl:max-w-[1260px] w-full items-center mx-auto overflow-x-hidden overflow-y-hidden ">
          <div className="flex justify-between items-center">
            {/* <div
              className="flex xxl:mx-0 mx-[30px] cursor-pointer"
              onClick={() => {
                console.log('button is pushed')
                router.push(`/manifesto`)
              }}
            >
              <img
                src="logo.svg"
                className="xl:min-w-[100px] w-[100px]"
                alt="image"
              />
            </div> */}
            <Link
              href={`/`}
            >
              <div
                className="flex xxl:mx-0 mx-[30px] cursor-pointer"
                // onClick={() => {
                //   console.log('button is pushed')
                //   router.push(`/manifesto`)
                // }}
              >
                <Image
                  width={0}
                  height={0}
                  src="suysing-logo.svg"
                  className="w-[300px]"
                  alt="image"
                />
              </div>
            </Link>
            <div className="xl:flex hidden flex-row md:mx-0 mx-6 py-6 ">
              <div className="flex flex-no-wrap border-transparent items-center whitespace-nowrap overflow-x-auto">
                {/* {!upperHeaderMenu.length && (
                  <div className="border-b-4 border-transparent ">
                    Loading
                  </div>
                )} */}

                {upperHeaderMenu &&
                  upperHeaderMenu.map((nav, i) => (
                    <Link
                      href={nav.url ? nav.url : pathname}
                      as={nav.url ? nav.url : pathname}
                      key={i}
                    >
                      <div
                        className={`
                            md:text-base text-sm mx-10 mt-2 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal
                            ${
                              pathname.includes(nav.url) &&
                              pathname !== "/"
                                ? "underline underline-offset-4"
                                : ""
                            }
                          `}
                      >
                        {nav.name}
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
            <div
              className="xl:hidden flex mx-6"
              onClick={() => setShowSideMenu(!showSideMenu)}
            >
              {showSideMenu ? (
                <img
                  src="/icons/icon_close.svg"
                  className="w-[21px]"
                  alt="image"
                />
              ) : (
                <img
                  src="/icons/icon_sidemenu.svg"
                  className=" w-[21px]"
                  alt="image"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`${
          showSideMenu ? "overflow-y-hidden" : "overflow-y-auto"
        }  overflow-x-hidden`}>
        <main className="relative">
          <div className="xl:px-0 min-h-screen mx-auto">
            {cloneElement(children)}
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}
