import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { RealProblem } from "./components/sections/RealProblem";
import { WhatThisIs } from "./components/sections/WhatThisIs";
import { RealShift } from "./components/sections/RealShift";
import { ConsistentPractice } from "./components/sections/ConsistentPractice";
import { HRVGraph } from "./components/sections/HRVGraph";
import { SessionDetails } from "./components/sections/SessionDetails";
import { FAQ } from "./components/sections/FAQ";
import { Payment } from "./components/sections/Payment";
import CoachSection from "./components/sections/CoachSection";
import ThankYou from "./components/sections/ThankYou";

function LandingPage() {
  return (
    <div className="bw-root">
      {/* <Navbar /> */}
      <Hero />
      <RealProblem />
      <WhatThisIs />
      <RealShift />
      <ConsistentPractice />
      <HRVGraph />
      <SessionDetails />
      <CoachSection />
      <FAQ />
      <Payment />
      <Footer />
    </div>
  );
}

export default function App() {
  const path = window.location.pathname;

  if (path === "/ty-breathwork") {
    return <ThankYou />;
  }

  return <LandingPage />;
}