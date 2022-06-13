import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReviewForm.css";

export default function ReviewForm() {
  let navigate = useNavigate();

  const [newReview, setNewReview] = useState({
    name: "",
    reviewOfResults: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://curls-gone-wild.web.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then(() => navigate("/reviews"))
      .catch(setError);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewReview({
      ...newReview,
      [e.target.name]: newValue,
    });
  };

  return (
    <section className="style">
      <h1>Add Review</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <label for="name">
          Name:
          <input
            name="name"
            type="text"
            value={newReview.name}
            onChange={handleChange}
            required="true"
          />
        </label>
        <br />
        <label for="reviewOfResults">
          Review:
          <input
            name="reviewOfResults"
            type="text"
            value={newReview.reviewOfResults}
            onChange={handleChange}
            required="true"
          />
        </label>
        <br />
        <button type="submit" onClick={() => handleSubmit()}>
          Submit
        </button>
      </form>
    </section>
  );
}
