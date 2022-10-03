import React from "react";
import CardsInfoSection from "../Cards/CardInfo";
// import Card from "../Cards/Card";
import Cards from "../Cards/Cards";
import NavbarLinkNone from "../Navbar/NavbarLinkNone";
import Footer from "../Footer/Footer";
import CardHeader from "../Cards/CardHeader";
// import Cards from "../Cards/Cards";

function CardsPage() {
  return (
    <>
      <NavbarLinkNone />
      <CardHeader />
      <CardsInfoSection />
      <Cards />
      <Footer />
    </>
  );
}

export default CardsPage;
