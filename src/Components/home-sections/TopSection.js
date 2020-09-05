import React from "react";
import "./top-section.css";
import pic1 from "../../images/home chart.jpg";

function TopSection(props) {
  return (
    <div className="flex-parent bg">
      <div className="flex-left">
        <h1 className="white-text">
          پلتفرم معاملات الگوریتمی استراتژی های معاملاتی بورس و فرا بورس
        </h1>
        <button className="gold-button btn">ثبت نام</button>
        <button className="gold-button btn">ورود</button>
      </div>
      <div className="flex-right">
        <image src={pic1} alt="phone" />
      </div>
    </div>
  );
}

export default TopSection;
