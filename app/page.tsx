import Brands from "@/components/homepage/Brands";
import TopSelling from "@/components/homepage/TopSelling";
import Customers from "@/components/homepage/Customers";
import DressStyle from "@/components/homepage/DressStyle";
import Hero from "@/components/homepage/Hero";
import { Fragment } from "react";
import NewArrivals from "@/components/homepage/NewArrivals";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Brands />
      <NewArrivals />
      <div className="container flex flex-1 max-w-7xl mx-auto border-b-2 border-gray-200"></div>
      <TopSelling />
      <DressStyle />
      <Customers />
    </Fragment>
  );
}
