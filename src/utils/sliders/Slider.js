import { NavLink } from "react-router-dom";
import "./sliderStyle.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import baner1 from "../../assets/images/baner1.png";
import baner2 from "../../assets/images/baner2.png";
import baner3 from "../../assets/images/baner3.png";
import baner4 from "../../assets/images/baner4.png";

const imges = [
  { img: baner1, id: 1, to: "/storePage" },
  { img: baner2, id: 2, to: "/storePage" },
  { img: baner3, id: 3, to: "/storePage" },
  { img: baner4, id: 4, to: "/storePage" },
];

const divStyle = {
  display: "flex",
  // alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "100%",
  minHeight: "500px",
  width: "450px",
  maxWidth: "600px",
};

const span = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  margin: "0 10px",
  transform: " translate(0px, 0px)",
  borderRadius: "15px",
};

const imag = {
  padding: "15px 20px",
  width: "98%",
  height: "85%",
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: "translate(-45px , -30px)",
        height: "30px",
        width: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: "translate(60px , -30px)",
        height: "30px",
        zIndex: "1",
        width: "30px",
        fontSize: "25px",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 2000,
  cssEase: "linear",
  centerPadding: "60px",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Sliders = () => {
  return (
    <div className="slider-component">
      <Slider {...settings}>
        {imges.map((item) => (
          <div style={{ ...divStyle }} key={item.id}>
            <NavLink to={item.to} style={{ ...span }}>
              <img src={item.img} style={{ ...imag }} />
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
