import React from "react";
import Nav from "../components/Nav";
import Section1 from "../components/Section1";
import Card3 from "../components/Card3";
import SkySection from "../components/SkySection";
const Invest = () => {
  const details = [
    {
      heading: "Stocks and ETFs",
      tagline: "Trading and investment that is future ready",
      points: [
        "3500+ listed companies and 100+ ETFs",
        "Trade in future, options, currencies & commodities",
      ],
      color: "bg-gradient-to-r from-white to-teal-50",
    },
    {
      heading: "Mutual Funds",
      tagline: "Earn more with good investment habits",
      points: [
        "2000+ mutual funds across various sectors",
        "Track external investments with HDFC SKY",
      ],
      color: "bg-gradient-to-r from-white to-yellow-50",
    },
    {
      heading: "US Stocks",
      tagline: "Invest in global brands you love and trust",
      points: [
        "Invest in 500+ overseas companies",
        "Buy and sell in small quantities with fractional investing",
      ],
      color: "bg-gradient-to-r from-white to-green-50",
    },
  ];
  const cardDetails = [
    {
      heading: "Help & Support",
      tagline: "Get answers to all your queries",
      link: "Explore FAQs",
    },
    {
      heading: "Indian Stocks",
      tagline: "Trade and Invest in cash, derivatives.",
      link: "Learn More",
    },
    {
      heading: "Mutual Funds",
      tagline: "Grow your money systematically every month.",
      link: "Learn More",
    },
  ];

  return (
    <div className="h-full w-screen bg-gray-100">
      <div className="border-2 border-teal-50 shadow-sm rounded-md">
        <Nav active="invest" />
      </div>
      <div className="mt-10">
        <div className="h-[30rem] flex justify-center items-center">
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold text-7xl text-gray-600">
                Create wealth with a <br /> &nbsp; &nbsp; broad range of <br />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; investments.
              </h1>
            </div>
            <div className="mt-[2rem]">
              <p className="text-2xl ml-[5rem] text-gray-400">
                Indian Equities, US Securities, Mutual Funds, Fixed <br />{" "}
                &nbsp;&nbsp;&nbsp; Income Instruments - never-ending investment
                <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; options for the savvy investor.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[4rem]">
          {details.map((detail) => (
            <Section1
              key={detail.heading}
              heading={detail.heading}
              tagline={detail.tagline}
              points={detail.points}
              color={detail.color}
            />
          ))}
        </div>
        <div className="flex gap-8 mt-10 justify-center flex-row">
          {cardDetails.map((cardDetail) => (
            <Card3
              key={cardDetail.heading}
              heading={cardDetail.heading}
              tagline={cardDetail.tagline}
              link={cardDetail.link}
            />
          ))}
        </div>
      </div>
      <div>
        <SkySection/>
      </div>
    </div>
  );
};

export default Invest;
