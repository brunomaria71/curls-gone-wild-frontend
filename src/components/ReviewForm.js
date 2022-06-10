import { Button, Form, Input } from "antd";
import "../styles/ReviewForm.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

// eslint-enable no-template-curly-in-string

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

// eslint-enable no-template-curly-in-string

export default function ReviewForm() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="name" />
      </Form.Item>
      <Form.Item
        name={["user", "reviewBody"]}
        label="Review"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea placeholder="Review your results here. Please state whether the products and or the styling routines helped you or not!" />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

// export default function ReviewForm() {

//   const handlePost = () => {
//     const [newReview, setNewReview] = useState('')

//     const handlePost() => {
//       name: "",
//       reviewOfRoutine: "",
//     };

//     fetch("https://curls-gone-wild.web.app/reviews", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newReview),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setNewReview(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const onFinish = (values) => {
//     console.log(values);
//   };

//   return (
//     <Form
//       {...layout}
//       name="nest-messages"
//       onFinish={onFinish}
//       validateMessages={validateMessages}
//     >
//       <Form.Item
//         name={["user", "name"]}
//         label="Name"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input placeholder="name" />
//       </Form.Item>
//       <Form.Item
//         name={["user", "reviewBody"]}
//         label="Review"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input.TextArea placeholder="Review your results here. Please state whether the products and or the styling routines helped you or not!" />
//       </Form.Item>
//       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//         <Button type="primary" htmlType="submit" onClick={() => handlePost()}>
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// }
