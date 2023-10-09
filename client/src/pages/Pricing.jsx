import React from "react";
import Nav from "../components/Nav";
import Section1 from "../components/Section1";
import Card3 from "../components/Card3";
import SkySection from "../components/SkySection";
const Pricing = () => {
  const details = [
    {
      heading: "Telemedicine Consultation:",
      tagline: "Access healthcare professionals from the comfort of your home",
      points: [
        "Cost: Rs 500 - Rs 2000 per consultation",
        "Features: Video calls, prescription services, follow-up appointments",
      ],
      color: "bg-gradient-to-r from-white to-teal-50",
    },
    {
      heading: "Urgent Care Services:",
      tagline: "Receive prompt care for non-emergency medical issues without scheduling an appointment.",
      points: [
        "Cost: Rs 1000 - Rs 3000 per visit",
        "Features: Treatment for minor injuries and illnesses, on-demand care",
      ],
      color: "bg-gradient-to-r from-white to-yellow-50",
    },
    {
      heading: "Maternity Services:",
      tagline: "It allows expectant mothers to receive regular check-ups from the comfort of their their homes.",
      points: [
        "Cost: Rs 20,000 - Rs 10,000 for prenatal care and delivery",
        "Features: Prenatal visits, childbirth classes, delivery services",
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
      heading: "Specialist Consultations",
      tagline: "Consultations with specialists in various fields (e.g., dermatology, cardiology)",
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
        <Nav active="pricing" />
      </div>
      <div className="mt-10">
        <div className="h-[30rem] flex justify-center items-center">
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold text-5xl text-gray-600 ml-[4rem]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to our pricing page <br />Here's a breakdown of our facilities <br />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and their associated costs.
              </h1>
            </div>
            <div className="mt-[2rem]">
              <p className="text-2xl ml-[10rem] text-gray-400">
              &nbsp;&nbsp;&nbsp;Indian Equities, US Securities, Mutual Funds, Fixed <br />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Income Instruments - never-ending investment
                <br /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options for the savvy investor.
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

export default Pricing;
