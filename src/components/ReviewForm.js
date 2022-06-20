import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReviewForm.css";

export default function ReviewForm() {
  let navigate = useNavigate();

  const [newReview, setNewReview] = useState({
    name: "",
    reviewOfResults: "",
  });

  const [setError] = useState("");

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
    <section>
      <div id="form-box">
        <h1 className="title">Add Review</h1>
        <div className="content">
          <form onSubmit={handleSubmit} className="form">
            <label for="name">
              Name:
              <br />
              <textarea
                name="name"
                cols="40"
                rows="10"
                className="name-box"
                value={newReview.name}
                onChange={handleChange}
                required="true"
                type="text"
              ></textarea>
            </label>
            <br />
            <label for="reviewOfResults">
              Review:
              <br />
              <textarea
                className="review-box"
                name="reviewOfResults"
                type="text"
                value={newReview.reviewOfResults}
                onChange={handleChange}
                required="true"
                cols="40"
                rows="10"
              ></textarea>
            </label>
            <br />
            <button id="btns" type="submit" onClick={() => handleSubmit()}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// import { Button, Form, Input } from "antd";

// const ReviewForm = () => {
//   let navigate = useNavigate();
//   const [newReview, setNewReview] = useState({
//     name: "",
//     reviewOfResults: "",
//   });

//   const [setError] = useState("");

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(newReview, "this is being sent to API");
//     fetch("https://curls-gone-wild.web.app/review", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newReview),
//     })
//       // .then(() => navigate("/reviews"))
//       // .catch(setError);
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch(console.error);
//   };

//   const handleChange = (e) => {
//     const newValue = e.target.value;
//     setNewReview({
//       ...newReview,
//       name: newValue,
//     });
//     console.log(newReview, "value on change");
//   };

//   return (
//     <div>
//       <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
//         <Form.Item
//           label="Name"
//           value={newReview.name}
//           // onChange={(e) => setNewReview({ [e.target.name]: e.target.value })}
//           onChange={handleChange}
//           rules={[
//             {
//               message: "Please include your name",
//               required: true,
//             },
//           ]}
//           hasFeedback
//         >
//           <Input></Input>
//         </Form.Item>
//         <Form.Item
//           name="review"
//           label="Review"
//           value={newReview.reviewOfResults}
//           onChange={handleChange}
//           rules={[
//             {
//               message: "Please include your review",
//             },
//           ]}
//           hasFeedback
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
//           <Button type="primary" htmlType="submit" onClick={onSubmit}>
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };
// export default ReviewForm;
