import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Login from "./Login";
import Logup from "./Logup";

const Header = () => {
  return (
    <div className="min-h-14 fixed top-0 w-full shadow-xl flex bg-[#fafafa]">
      <div className="container mx-auto flex justify-between max-lg:px-4 items-center">
        <Link
          href={"/"}
          className="uppercase font-semibold text-2xl cursor-pointer"
        >
          contblog
        </Link>
        <div className="flex gap-4">
          <Login />
          <Logup />
          <Button className="hidden">Log off</Button>
          <Link href={"dashboard"}>
            <Button className="">Go to dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
