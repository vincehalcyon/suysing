"use client"
import React, { useState, useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation"
const Footer = (menus) => {
  const router = useRouter();
  return (
    <div className="relative bg-black ">
      <div className="xl:pt-16 flex justify-center items-center text-white tracking-normal">
        <div className="flex flex-col xl:items-start items-center md:pt-8 pt-0 xxl:w-[1345px] xl:w-[1200px] w-10/12 xl:border-t z-20">

          <div className="xl:grid grid-cols-4 pb-12 border-b xl:text-[14px] md:text-[12px] text-[10px] leading-[20px] flex flex-col w-full xl:items-start items-center text-xl-start text-center">
            <div className="flex flex-col xl:p-0 p-2">
              <div
              >
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="flex flex-col xl:p-0 p-2">
              <div
                className="xxl:pl-16 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                Lorem ipsum dolor sit amet
              </div>
              <div
                className="xxl:pl-16 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                Lorem ipsum dolor sit amet
              </div>
              <div
                className="xxl:pl-16 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="flex flex-col xl:p-0 p-2">
              <div
                className="xxl:pl-20 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                Lorem ipsum dolor sit amet
              </div>
              <div
                className="xxl:pl-20 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                {`Lorem ipsum dolor sit amet`}
              </div>
              <div
                className="xxl:pl-20 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/code-of-practice`);
                }}
              >
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="flex flex-col xl:p-0 p-2">
              <div
                className="xxl:pl-24 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                Lorem ipsum dolor sit amet
              </div>
              <div
                className="xxl:pl-24 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                {`Lorem ipsum dolor sit amet`}
              </div>
              <div
                className="xxl:pl-24 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/`);
                }}
              >{`Lorem ipsum dolor sit amet`}</div>
              <div
                className="xxl:pl-24 xl:pl-[70px] xl:py-2 py-1 cursor-pointer"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                {`Lorem ipsum dolor sit amet`}
              </div>
              {/* <div className="xxl:pl-24 xl:pl-[70px] xl:py-2 py-1">
                Website Disclaimer
              </div> */}
            </div>
          </div>
          <div className="flex xl:flex-row flex-col xl:justify-between items-start xl:py-20 py-3">
            <div className="flex items-center xl:w-3/4 w-full xl:text-xs text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur leo diam, nec sollicitudin neque vehicula vel. Nullam tincidunt dolor sed vehicula luctus. Praesent semper convallis nisl sit amet suscipit. Aliquam eu sagittis turpis. Nullam hendrerit felis sit amet orci egestas, scelerisque venenatis lorem ultrices. Etiam eleifend justo in lacus maximus, id imperdiet lorem elementum.    
            </div>
            <div className="flex items-center xl:py-0 py-6 xl:text-xs text-[10px]">
              <span className="p-1 font-bold">
                © Copyright 2022 Halcyon Agile
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
