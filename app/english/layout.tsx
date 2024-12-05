"use client";
import Header from "../components/hearders/header";
import Nav from "../components/navs/eng-nav";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
      <Header />
      <div className="max-w-screen-lg w-full pb-32">{children}</div>
      <Nav />
    </div>
  );
}
