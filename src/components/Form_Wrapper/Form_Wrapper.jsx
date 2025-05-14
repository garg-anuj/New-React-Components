import CheckBox from "./components/CheckBox";
import TextFields from "./components/TextFields";

import {
  EMPTY_ARRAY,
  EMPTY_FUNCTION,
  EMPTY_OBJECT,
} from "../../config/freezeObjects";

const CHECK_BOX_TYPE = "checkbox";

const Form_Wrapper = ({
  inputs = EMPTY_ARRAY,
  onInputChange = EMPTY_FUNCTION,
}) => {
  return (
    <div className="form-wrapper">
      {inputs.map((input, idx) => {
        const { id, type } = input || EMPTY_OBJECT;

        if (type === CHECK_BOX_TYPE) {
          return (
            <CheckBox onChange={onInputChange} key={id || idx} {...input} />
          );
        }
        return (
          <TextFields onChange={onInputChange} key={id || idx} {...input} />
        );
      })}
      <div className="cursor-pointer">
        <input id="input-termCondition" type="checkbox" />
        <label htmlFor="input-termCondition" className="ml-2">
          I agree to the terms and conditions
        </label>
      </div>
      <button className="border mt-2 px-3 py-1 rounded">Submit</button>
    </div>
  );
};

export default Form_Wrapper;
