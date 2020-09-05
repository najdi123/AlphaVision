import React from "react";
import "./top-section.css";
import pic1 from "../../images/Untitled.png";

function TopSection(props) {
  return (
    <div className="flex-parent bg">
      <div className="flex-left">
        <h2 className="white-text bottom">
          پلتفرم معاملات الگوریتمی استراتژی های معاملاتی بورس و فرا بورس
        </h2>
        <p className="white-text">
          بهترین و ساده‌ترین راه برای نگه‌داری، خرید و فروش ارزهای دیجیتال در
          ایران که امنیت آن توسط نوبیتکس تضمین می‌شود.
        </p>
        <div>
          <button className="gold-button btn">ثبت نام</button>
          <button className="gold-button btn">ورود</button>
        </div>
      </div>
      <div className="flex-right">
        <image src={pic1} alt="phone" />
      </div>
    </div>
  );
}

export default TopSection;
