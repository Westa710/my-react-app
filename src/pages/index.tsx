import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/todo" legacyBehavior>
        <a className="text-4xl">todo</a>
      </Link>
    </div>
  );
};

export default Home;
