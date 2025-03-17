import { useEffect, useState } from "react";

const Throttling = () => {
  const [initialValue, setInitialValue] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      console.log("api call ");
    }, 200);

    return () => {
      console.log("cancel api call");
      clearTimeout(timeOutId);
    };
  }, [initialValue]);

  const handleInput = (event) => {
    setInitialValue(event.target.value);
  };
  return (
    <div className="border">
      <input
        placeholder="search"
        name="search"
        value={initialValue}
        onChange={handleInput}
      />
      {initialValue}
    </div>
  );
};

export default Throttling;
