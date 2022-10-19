import Head from "next/head";
import React from "react";

interface MyComponentProps {
  children: React.ReactElement;
}

export default function Layout({ children }: MyComponentProps) {
  return (
    <>
      <Head>
        <title>TODO</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
