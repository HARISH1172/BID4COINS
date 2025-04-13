import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";
import Spinner from "@/custom-components/Spinner";

const Home = () => {
  const howItWorks = [
    { title: "Post Items", description: "Auctioneer posts items for bidding." },
    { title: "Place Bids", description: "Bidders place bids on listed items." },
    {
      title: "Win Notification",
      description: "Highest bidder receives a winning email.",
    },
    {
      title: "Payment & Fees",
      description: "Bidder pays; auctioneer pays 5% fee.",
    },
  ];

  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      {/* <section className="w-full ml-0 m-0  px-5 lg:pl-[320px] flex flex-col mt-5  justify-center"> */}
      <section className="w-full ml-0 m-0 px-5 lg:pl-[320px] flex flex-col min-h-screen py-1 justify-center">
        <div>
          <h5
            className={`text-[#111] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-5xl`}
          >
            Go For Bid &
          </h5>
          <h5
            className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-5xl`}
          >
            Be The Winner
          </h5>
          <hr className="mb-2 border-t-[#d6482b]" />
        </div>
        {/* <FeaturedAuctions /> */}
        <UpcomingAuctions />
        <Leaderboard />
      </section>
    </>
  );
};

export default Home;
