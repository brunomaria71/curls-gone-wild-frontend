import { Carousel } from "antd";
import { useEffect, useState } from "react";
import "../styles/ReviewPage.css";

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
        <div id="page-box">
          <h2 className="review-title">See What Others Are Saying</h2>
          <Carousel autoplay key={reviews.id}>
            {[...reviews].reverse().map((review) => {
              return (
                <div>
                  <h3 className="review-testimonies">
                    {review.name} - {review.reviewOfResults}
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
