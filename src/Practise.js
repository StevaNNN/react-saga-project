import { useState } from "react";
import { useDebounce } from "./helpers/hooks/hooks";

const fruits = ["banana", "apple", "carot"];

const Practice = () => {
  const [fruitsData, setFruitsData] = useState(fruits);
  const [term, setTerm] = useState("");
  const debouncedTerm = useDebounce(term, 500);

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const filteredFruits = fruitsData.filter((fruit) =>
    fruit.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  const boldCharsFromString = (string, highlight) => {
    // return text if term was not found aka user did not type anything
    if (!highlight) return string;
    // create regex with all occurrences and case sensitive
    const regex = new RegExp(`(${highlight})`, "gi");
    // split the text into array when it finds the regex
    const parts = string.split(regex);
    // looping trough that splitted array and if the regex is found which
    // means that the text that user typed is found as an item of array
    // render that part in bold otherwise print rest of the chars one by one
    return parts.map((part, index) =>
      regex.test(part) ? (
        <b key={index} style={{ color: "blue" }}>
          {part}
        </b>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <h1>All the fruits</h1>
      <input value={term} onChange={handleTermChange} />
      <ul>
        {filteredFruits.map((fruit, idx) => (
          <li key={`${idx}-${fruit}`}>{boldCharsFromString(fruit, term)}</li>
        ))}
      </ul>
    </>
  );
};

export default Practice;
