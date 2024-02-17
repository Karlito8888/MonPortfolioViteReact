import React, { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import SocialNetwork from "../components/SocialNetwork";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContactInfoItem from "../components/ContactInfoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          {isMobileView ? (
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="all 1s"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <ContactInfoItem
                title="adresse"
                text={[
                  "Charles BOURGAULT (E.I.)",
                  "10, rue du Colisée",
                  "75008 Paris",
                ]}
                copyText="Charles BOURGAULT (E.I), 10, rue du Colisée, 75008 Paris"
              />
              <ContactInfoItem
                title="téléphone"
                text=" 06.42.66.33.00"
                copyText="+33642663300"
                icon={faWhatsapp}
              />
              <ContactInfoItem
                title="email"
                text="cb.dweb49@gmail.com"
                copyText="cb.dweb49@gmail.com"
              />
            </Carousel>
          ) : (
            <>
              <ContactInfoItem
                title="adresse"
                text={[
                  "Charles BOURGAULT (E.I.)",
                  "10, rue du Colisée",
                  "75008 Paris",
                ]}
                copyText="Charles BOURGAULT (E.I), 10, rue du Colisée, 75008 Paris"
              />
              <ContactInfoItem
                title="téléphone"
                text=" 06.42.66.33.00"
                copyText="+33642663300"
                icon={faWhatsapp}
              />
              <ContactInfoItem
                title="email"
                text="cb.dweb49@gmail.com"
                copyText="cb.dweb49@gmail.com"
              />
            </>
          )}
          <div className="credits">
            <p>Charles BOURGAULT - 2024</p>
          </div>
        </div>
        <SocialNetwork />
        <Buttons left={"/projects/games"} />
      </div>
    </main>
  );
};

export default Contact;
