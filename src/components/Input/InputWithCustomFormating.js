import { createRef, useState } from "react";

const InputWithCustomFormating = ({...restInputProps}) => {
  const [value, setValue] = useState("");
  const inputRef = createRef(null);

  const handleOnChange = (e) => {
    let value = e.target.value;
    let numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue.length > 3) {
      numericValue = `(${numericValue.slice(0, 3)}) ${numericValue.slice(3)}`;
    }
    // we add first three + 2 parenthasis + one space + 3 more chars = 9 total chars
    if (numericValue.length > 9) {
      numericValue = `${numericValue.slice(0, 9)}-${numericValue.slice(9)}`;
    }
    setValue(numericValue);
  };

  return (
    <>
      <h1>Numerical input with formating</h1>
      <input {...restInputProps} value={value} onChange={handleOnChange} ref={inputRef} />
    </>
  );
};

export default InputWithCustomFormating;
