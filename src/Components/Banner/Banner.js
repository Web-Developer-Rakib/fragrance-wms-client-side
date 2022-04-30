import React from "react";
import { Carousel } from "react-bootstrap";
import CaroImg1 from "../../Images/caru-1.jpg";
import CaroImg2 from "../../Images/caru-2.jpg";
import CaroImg3 from "../../Images/caru-3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={CaroImg1} alt="First slide" />
        <Carousel.Caption>
          <h3>Alfred Ritchy</h3>
          <p>
            The Alfred Ritchy fragrance collection, recently released in France,
            builds on the slogan "How wonderful it is when adults believe in
            magic.{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CaroImg2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Scratchy, Vegetal Freshness</h3>
          <p>
            The overall aesthetic of Haute Fraîcheur is much sharper and less
            rich than its elder pillar.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CaroImg3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Dior Miss Dior Rose Essence</h3>
          <p>
            The fragrance is a first-of-its-kind yearly limited edition infused
            with floral notes from the year’s seasonal harvest.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
