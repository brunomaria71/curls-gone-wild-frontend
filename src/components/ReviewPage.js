import { useEffect, useState } from "react";

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
        reviews.map((reviews) => {
          return (
            <>
              <p>{reviews.name}</p>
              <p>{reviews.reviewOfResults}</p>
            </>
          );
        })
      )}
    </div>
  );
}
