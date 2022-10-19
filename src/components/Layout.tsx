import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>TODO</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
