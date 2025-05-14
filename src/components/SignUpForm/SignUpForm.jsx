import { useState } from "react";
import Form_Wrapper from "../Form_Wrapper";

const CONFIG = [
  {
    id: "1",
    placeholder: "Enter Your Name",
    name: "name",
    value: "name",
    type: "text",
  },
  {
    id: "2",
    placeholder: "Enter Your Last Name",
    name: "lastName",
    value: "lastName",
    type: "text",
  },

  {
    id: "3",
    placeholder: "Enter Your Password",
    name: "password",
    value: "password",
    type: "password",
  },
];

const SignUpForm = () => {
  const [inputs, setInputs] = useState();
  const handleInputChange = ({ id, index, value, checked }) => {};
  return (
    <div className="border-4 p-5">
      <h1>SignUp Form</h1>

      <div>
        <Form_Wrapper onInputChange={handleInputChange} inputs={CONFIG} />
      </div>
    </div>
  );
};

export default SignUpForm;
