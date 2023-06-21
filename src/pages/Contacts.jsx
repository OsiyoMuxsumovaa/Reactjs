import React from "react";
import Navbar from "../components/Navbar";
import ContactBrend from "../components4/ContactBrend";
import ContactUs from "../components4/ContactUs";
import Location from "../components4/Location";
import PeopleChoose from "../components4/PeopleChoose";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <ContactBrend />
      <ContactUs />
      <Location />
      <PeopleChoose />
      <Footer />
    </div>
  );
};

export default Contacts;
