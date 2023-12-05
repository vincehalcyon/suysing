import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from "next/head"
export default function Header ({}) {
  return (
    <>
    <link rel="icon" href="favicon.ico" />
      <Head>
        <title>
          Halcyon Agile | Sample App
        </title>
      </Head>
    </>
  )
}