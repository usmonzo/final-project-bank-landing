import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import { useState } from "react";
import Header from "../Header/Header";
import InfoSection from "../InfoSection/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../InfoSection/Data";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
