import Slider from "../../utils/sliders/Slider";
import "./homeStyle.css";
import imageIntro from "../../assets/images/4855091.jpg";

const Home = () => {
  return (
    <section className="home-component">
      <section className="info-start">
        <section className="info-start-right">
          {/*  intro for min-width 765px */}

          <div className="textIntro">
            <h2>به تایم لند خوش آمدید</h2>
            <p>راحت بگرد، بهترین رو انتخاب کن، مطمئن خرید کن</p>
          </div>

          <div className="imageIntro-container">
            <img src={imageIntro} />
          </div>
        </section>
      </section>

      {/* <section className="info-start-left"> */}
        <div className="slider">
          <Slider />
        </div>
      {/* </section> */}

      <div className="show-product">show product of time</div>
      <div className="show-product">bazGashte mahsol</div>
      <div  className="show-product">new Products</div>
      <div className="show-product">more byu Products</div>
    </section>
  );
};

export default Home;
