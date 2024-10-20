import React from "react";
// import Header from "../Component/Header";
import Hero from "../Component/Hero";
import Services from "../Component/Services";
import ContactUs from "../Component/ContactUs";
// import Footer from "../Component/Footer";
import AboutUs from "../Component/about";

const companyName = "Promise Land Global Resources";

function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Sticky Header */}
      {/* <div className="sticky top-0 z-50">
        <Header />
      </div> */}

      {/* Scrollable Content */}
      <div className="overflow-y-auto flex-grow">
        <Hero />
        <Services />
        <AboutUs />
        <ContactUs />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
