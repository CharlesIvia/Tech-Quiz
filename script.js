//Fetch DOM elements

const question = document.querySelector(".question");
const options = document.querySelector(".options");
const score = document.querySelector(".score");
const message = document.querySelector(".message");

const questions = {
  "1. Which of the following is used to request and load data Asynchronously?": [
    ["SQL", "Ajax", "JSON", "Bootstrap"],
    "Ajax",
  ],
  "2. Which of the following is not an inbuilt array function in JavaScript?": [
    ["filter", "forEach", "map", "set"],
    "set",
  ],
  "3. You want to store an Array called 'items' to local storage. How will you convert it?": [
    [
      "JSON.stringify(items)",
      "items.indexOf()",
      "Object.keys(items)",
      "item.toString()",
    ],
    "JSON.stringify(items)",
  ],
  "4. Which property references the DOM object that dispatched an event?": [
    ["self", "object", "target", "source"],
    "target",
  ],
  "5. How does a function create a closure?": [
    [
      "It reloads the document whenever the value changes",
      "It returns a reference to a variable in its parent scope",
      "It completes execution without returning",
      "It copies a local variable to the global scope",
    ],
    "It returns a reference to a variable in its parent scope",
  ],
};

let scoreValue = 0;

//Add Event Listener

document.addEventListener("DOMContentLoaded", loadFirstQuestion);
options.addEventListener("click", onOptionSelect);

//Load first question and options on page load

function loadFirstQuestion() {
  let firstQuestion = Object.keys(questions)[0];
  question.textContent = firstQuestion;

  let firstOptions = Object.values(questions)[0][0];
  firstOptions.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    options.appendChild(li);
  });
}

//Compare selected answer with corrent answer and ipdate score

function onOptionSelect(e) {
  let optionSelected = e.target.textContent;
  let questionDisplayed =
    e.target.parentElement.previousElementSibling.textContent;

  let correctAnswer = questions[questionDisplayed][1];
  if (optionSelected === correctAnswer) {
    incrementScore();
    loadNextQuestion();
  } else {
    loadNextQuestion();
  }
}

//Load next questiom

function loadNextQuestion() {
  let questionDisplayed = question.textContent;
  let questionArray = Object.keys(questions);
  let currentQuestionIndex = questionArray.indexOf(questionDisplayed);
  let nextIndex = currentQuestionIndex + 1;
  if (nextIndex < questionArray.length) {
    let nextQuestion = questionArray[nextIndex];
    question.textContent = nextQuestion;
    loadOptions(nextQuestion);
  } else {
    //Load first question and final score
    let lastScore = scoreValue;
    resetScore();
    options.innerHTML = "";
    loadFirstQuestion();
    let messageString =
      "You scored:" + `${lastScore}` + "/" + `${questionsArray.length}`;
    message.textContent = messageString;
    hideMessage();
  }
}

//Load options for each question

function loadOptions(ques) {
  let quesOptions = questions[ques][0];

  options.innerHTML = "";
  quesOptions.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    options.appendChild(li);
  });
}
