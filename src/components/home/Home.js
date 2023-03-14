import Slider from "../../utils/sliders/Slider";
import "./homeStyle.css";
import imageIntro from "../../assets/images/4855091.jpg";

import call from "../../assets/images/call_center.png";
import orginal from "../../assets/images/trophy.png";
import firstSend from "../../assets/images/rocket.png";
import guaranteeIcon from "../../assets/images/guarantee-icon.png";
import cash from "../../assets/images/card.png";



const Home = () => {
  return (
    <section className="home-component">

      <section className="info-start">
        <section className="info-start-right">
          {/*  intro for min-width 765px */}

          <div className="textIntro">
            <h2>به تایم لند خوش آمدید</h2>
            <p>راحت بگردو بهترین رو انتخاب کن و مطمئن خرید کن</p>
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

      <section className="garenti">
        <div>
          <img src={call} />
          <p>پشتیبانی 24/7 </p>
        </div>
        <div>
          <img src={orginal} />
          <p> تضمین کیفیت</p>
        </div>
        <div>
          <img src={firstSend} />
          <p> تحویل سریع</p>
        </div>
        <div>
          <img src={guaranteeIcon} />
          <p> گارنتی</p>
        </div>
        <div>
          <img src={cash} />
          <p> پرداخت در محل</p>
        </div>
      </section>
      
      <div  className="show-product">new Products</div>
      <div className="show-product">more byu Products</div>
    </section>
  );
};

export default Home;
