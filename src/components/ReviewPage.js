import { Carousel } from "antd";
import { useEffect, useState } from "react";
// import "../styles/ReviewPage.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#658076",
};

export default function ReviewPage() {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("https://curls-gone-wild.web.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {!reviews ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <Carousel autoplay key={reviews.id}>
            {reviews.map((reviews) => {
              return (
                <div>
                  <h3 style={contentStyle}>
                    {reviews.name} - {reviews.reviewOfResults}
                  </h3>
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
    </div>
  );
}
