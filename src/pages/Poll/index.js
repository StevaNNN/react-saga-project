import React, { useEffect } from "react";
import "./poll.css";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const t = window.prompt(
      "What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++"
    );
    [0, 1, 2, 3].includes(+t) && this.answers[+t]++;
    console.log(this);
    this.displayResults.bind(this)("array");
  },
  displayResults(type) {
    if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
    if (type === "array") {
      console.log(this.answers);
    }
  },
};

export const PollPage = () => {
  useEffect(() => {
    window.addEventListener("load", poll.registerNewAnswer.bind(poll));
  }, []);

  return (
    <div className="wrapper">
      <h1>A Closer Look at Functions</h1>
      <button className="buy">Buy new plane 🛩</button>
      <button className="poll" onClick={poll.registerNewAnswer.bind(poll)}>
        Answer poll ⁉️
      </button>
    </div>
  );
};

export default PollPage;
