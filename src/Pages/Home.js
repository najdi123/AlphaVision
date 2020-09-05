import React from "react";
import Navbar from "../Components/navbar/Navbar";
import TopSection from "../Components/home-sections/TopSection";
import CommentItem from "../Components/comments/commentItem/CommentItem";
import Comments from "../Components/comments/Comments";
import Footer from "../Components/home-sections/Footer";
import StockIndex from "../Components/stockIndex/StockIndex";

function Home(props) {
  return (
    <div>
      <Navbar />
      <TopSection />
      <StockIndex/>\
      <h2 className={"comments-title"}>نظر کاربران</h2>
      <h2 className="comments-title">نظر کاربران</h2>
      <Comments />
      <Footer />
    </div>
  );
}

export default Home;
