"use strict";
const poll = {
  question: "What is your favourite programming language? ",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),

  registerNewAnswer() {
    let ans = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n\n(Write your option)`
      )
    );

    while (isNaN(ans) || ans < 0 || ans > 3) {
      alert(`The wrong answer! Please select the number between 0 and 3.`);
      ans = prompt(
        `${this.question}\n${this.options.join("\n")}\n\n(Write your option)`
      );
    }
    this.numberOfVotes[ans]++;
  },
  displayResults(type = "array") {
    if (type === "string") {
      console.log(`Poll results are ${this.numberOfVotes.join(", ")}`);
    } else if (type === "array") {
      console.log(this.numberOfVotes);
    }
  },
};

document.querySelector(".poll").addEventListener("click", function () {
  poll.registerNewAnswer.call(poll);
  poll.displayResults.call(poll);
});

const ans1 = {
  numberOfVotes: [5, 2, 3],
};
const ans2 = {
  numberOfVotes: [1, 5, 3, 9, 6, 1],
};

poll.displayResults.call(ans1);
poll.displayResults.call(ans1, "string");
poll.displayResults.call(ans2);
poll.displayResults.call(ans2, "string");
