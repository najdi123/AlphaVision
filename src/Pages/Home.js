import React from "react";
import Navbar from "../Components/navbar/Navbar";
import TopSection from "../Components/home-sections/TopSection";
import CommentItem from "../Components/comments/commentItem/CommentItem";
import Comments from "../Components/comments/Comments";
import Footer from "../Components/home-sections/Footer";

function Home(props) {
  return (
    <div>
      <Navbar />
      <TopSection />
      <h2 className="comments-title">نظر کاربران</h2>
      <Comments />
      <Footer />
    </div>
  );
}

export default Home;
