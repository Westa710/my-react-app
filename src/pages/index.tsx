import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/todo">todo</Link>
    </div>
  );
};

export default Home;
