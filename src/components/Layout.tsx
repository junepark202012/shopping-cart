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
      <div className="container mx-auto mb-4">
        <header className="sticky top-0 z-10">
          <Navbar />
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
