//Fetch DOM elements

const question = document.querySelector(".question");
const options = document.querySelector(".options");
const score = document.querySelector(".score");
const message = document.querySelector(".message");
let correct = document.querySelector(".correct");
let cor = document.querySelector(".cor");
const back = document.querySelector(".back");
const skip = document.querySelector(".skip");

const questions = {
  "1.What does HTML stand for?": [
    [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
    ],
    "Hyper Text Markup Language",
  ],

  "2.Which of the following is not an inbuilt array function in JavaScript?": [
    ["filter", "forEach", "map", "set"],
    "set",
  ],
  "3.You want to store an Array called 'items' to local storage. How will you convert it?": [
    [
      "JSON.stringify(items)",
      "items.indexOf()",
      "Object.keys(items)",
      "item.toString()",
    ],
    "JSON.stringify(items)",
  ],
  "4.Which property references the DOM object that dispatched an event?": [
    ["self", "object", "target", "source"],
    "target",
  ],
  "5.How does a function create a closure?": [
    [
      "It reloads the document whenever the value changes",
      "It returns a reference to a variable in its parent scope",
      "It completes execution without returning",
      "It copies a local variable to the global scope",
    ],
    "It returns a reference to a variable in its parent scope",
  ],
  "6.HTML and CSS are not programming languages?": [["True", "False"], "True"],
  "7.How many computer languages are there in use?": [
    ["5000", "2000", "400", "Unknown"],
    "2000",
  ],
  "8.Which of the following is not an early computer?": [
    ["ENIAC", "SAGE", "NASA", "UNIVAC"],
    "NASA",
  ],

  "9.Which of the following is used to request and load data Asynchronously?": [
    ["SQL", "Ajax", "JSON", "Bootstrap"],
    "Ajax",
  ],

  "10. Who is making the Web standards?": [
    ["Microsoft", "Mozilla", "Google", "The World Wide Web Consortium"],
    "The World Wide Web Consortium",
  ],

  "11.Choose the correct HTML element for the largest heading:": [
    ["<h6>", "<h1>", "<head>", "<heading>"],
    "<h1>",
  ],

  "12.What is the correct HTML element for inserting a line break?": [
    ["<lb>", "<break>", "<br>"],
    "<br>",
  ],

  "13.What is the correct HTML for adding a background color?": [
    [
      "<background>yellow</background>",
      "<body bg='yellow'>",
      "<body style='background-color:yellow;'>",
    ],
    "<body style='background-color:yellow;'>",
  ],
  "14.Choose the correct HTML element to define important text": [
    ["<strong>", "<i>", "<b>", "<important>"],
    "<strong>",
  ],
  "15.Choose the correct HTML element to define emphasized text": [
    ["<em>", "<italic>", "<i>"],
    "<em>",
  ],

  "16.What is the correct HTML for creating a hyperlink?": [
    [
      "<a href='http://www.tq.io'>TQ</a> ",
      "<a name='http://tq.io'>TQ</a>",
      "<a url='http://tq.io'>TQ</a>",
      "<a>http://www.tq.io</a>",
    ],
    "<a href='http://www.tq.io'>TQ</a> ",
  ],

  "17.Which character is used to indicate an end tag?": [
    ["/", "<", "*", "^"],
    "/",
  ],
  "18.How can you open a link in a new tab/browser window?": [
    [
      "<a href='url' target='_blank'>",
      "<a href='url' new>",
      "<a href='url' target='new'>",
    ],
    "<a href='url' target='_blank'>",
  ],
  "20.Which of these elements are all <table> elements?": [
    [
      "<table><tr><td>",
      "<table><head><tfoot>",
      "<table><tr><tt>",
      "<thead><body><tr>",
    ],
    "<table><tr><td>",
  ],

  "21.Inline elements are normally displayed without starting a new line.": [
    ["True", "False"],
    "True",
  ],

  "22.How can you make a numbered list?": [
    ["<ol> ", "<dl>", "<list>", "<ul>"],
    "<ol> ",
  ],

  "23.How can you make a bulleted list?": [
    ["<ul> ", "<dl>", "<ol>", "<list>"],
    "<ul> ",
  ],

  "23.What is the correct HTML for making a checkbox?": [
    ["<input type='checkbox'>", "<check>", "<input type'check'>", "<checkbox>"],
    "<input type='checkbox'>",
  ],
  "24.What is the correct HTML for making a text input field?": [
    [
      "<textinput type='text'> ",
      "<input type='text'>",
      "<textfield>",
      "<input type='textfield'>",
    ],
    "<input type='text'>",
  ],

  "25.What is the correct HTML for making a drop-down list?": [
    ["<input type='list'>", "<select>", "<input type='dropdown'>", "<list>"],
    "<select>",
  ],
  "26.What is the correct HTML for making a text area?": [
    ["<input type='textarea'>", "<textarea>", "<input type='textbox'>"],
    "<textarea>",
  ],

  "27.What is the correct HTML for inserting an image?": [
    [
      "<img src='image.gif' alt='MyImage'> ",
      "<image src='image.gif' alt='MyImage'>",
      "<img href='image.gif' alt='MyImage'>",
      "<img alt='MyImage'>image.gif</img>",
    ],
    "<img src='image.gif' alt='MyImage'> ",
  ],
  "28.What is the correct HTML for inserting a background image?": [
    [
      "<body style='background-image:url(background.gif)'> ",
      "<background img='background.gif'>",
      "<body bg='background.gif'>",
    ],
    "<body style='background-image:url(background.gif)'> ",
  ],
  "29.An <iframe> is used to display a web page within a web page.": [
    ["True", "False", "There is no such thing as an <iframe>"],
    "True",
  ],
  "30.HTML comments start with <!-- and end with -->": [
    ["True", "False"],
    "True",
  ],
  "31.Block elements are normally displayed without starting a new line.": [
    ["True", "False"],
    "False",
  ],
  "32.Which HTML element defines the title of a document?": [
    ["<title> ", "<meta>", "<head>"],
    "<title> ",
  ],

  "33.Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?": [
    ["alt", "title", "src", "longdesc"],
    "alt",
  ],

  "34.Which HTML element is used to specify a footer for a document or section?": [
    ["<footer>", "<section>", "<bottom>"],
    "<footer",
  ],

  "35.In HTML, you can embed SVG elements directly into an HTML page.": [
    ["False ", "True"],
    "False",
  ],

  "36.What is the correct HTML element for playing video files?": [
    ["<media> ", "<video> ", "<movie>"],
    "<video>",
  ],

  "37.What is the correct HTML element for playing audio files?": [
    ["<audio>", "<mp3>", "<sound>"],
    "<audio>",
  ],

  "38.The HTML global attribute, 'contenteditable' is used to:": [
    [
      "Specify whether the content of an element should be editable or not",
      "Update content from the server",
      "Return the position of the first found occurrence of content inside a string",
      "Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
    ],
    "Specify whether the content of an element should be editable or not ",
  ],

  "39.In HTML, onblur and onfocus are:": [
    ["Style attributes ", "HTML elements", "Event attributes "],
    "Event attributes ",
  ],

  "40.Graphics defined by SVG is in which format?": [
    ["XML", "CSS", "HTML"],
    "XML",
  ],

  "41.The HTML <canvas> element is used to:": [
    [
      "draw graphics ",
      "manipulate data in MySQL",
      "create draggable elements",
      "display database records",
    ],
    "draw graphics ",
  ],

  "42.In HTML, which attribute is used to specify that an input field must be filled out?": [
    ["required", "placeholder", "validate", "formvalidate"],
    "required",
  ],

  "43.Which input type defines a slider control? ": [
    ["slider", "controls", "search", "range  "],
    "range ",
  ],

  "44.Which HTML element is used to display a scalar measurement within a range?": [
    ["<range>", "<gauge>", "<meter> ", "<measure>"],
    "<meter> ",
  ],

  "45.Which HTML element defines navigation links?": [
    ["<nav> ", "<navigation>", "<navigate>"],
    "<nav> ",
  ],

  "46.In HTML, what does the <aside> element define?": [
    [
      "A navigation list to be shown at the left side of the page  ",
      "The ASCII character-set; to send information between computers on the Internet",
      "Content aside from the page content ",
    ],
    "Content aside from the page content ",
  ],

  "47.Which HTML element is used to specify a header for a document or section?": [
    ["<header>", "<top>", "<head>", "<section>"],
    "<header>",
  ],
};

let scoreValue = 0;

//Add Event Listener

window.addEventListener("load", loadFirstQuestion);
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
    gotIt();
    clearIfCorrect();
    incrementScore();
    styleCorrectIfCorrect();
    clearStyleIfCorrect();
    setTimeout(() => {
      loadNextQuestion();
    }, 1200);
  } else {
    correctOne();
    clearCorrect();
    styleCorrectIfWrong();
    clearStyleIfWrong();
    setTimeout(() => {
      loadNextQuestion();
    }, 2000);
    goBack();
    loadNextQuestion();
  }
}

//Approve answer

function gotIt() {
  correct.textContent = "Correct!";
}

//Style correct Answers components

function styleCorrectIfCorrect() {
  correct.style.background = "white";
  correct.style.height = "10vh";
  correct.style.color = "green";
}
function styleCorrectIfWrong() {
  correct.style.background = "white";
  correct.style.height = "10vh";
  correct.style.color = "red";
}
//Clear styles

function clearStyleIfCorrect() {
  setTimeout(() => {
    correct.style.background = "";
    correct.style.height = "";
  }, 1200);
}
function clearStyleIfWrong() {
  setTimeout(() => {
    correct.style.background = "";
    correct.style.height = "";
  }, 2000);
}
//Display correct answer if answer is wrong

function correctOne() {
  let questionDis = question.textContent;
  let correctAnw = questions[questionDis][1];

  correct.textContent = `The correct answer is: ${correctAnw}`;
}

//Load next question
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
    setTimeout(() => {
      resetScore();
    }, 3000);
    options.innerHTML = "";
    loadFirstQuestion();
    let messageString =
      "You scored:" + `${lastScore}` + "/" + `${questionArray.length}`;
    message.textContent = messageString;
    console.log(messageString);
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

//Go back

function goBack() {
  let questionDisplayed = question.textContent;
  let questionArray = Object.keys(questions);
  let currentQuestionIndex = questionArray.indexOf(questionDisplayed);
  let prevIndex = currentQuestionIndex - 1;
  if (prevIndex < questionArray.length) {
    let prevQuestion = questionArray[prevIndex];
    question.textContent = prevQuestion;
    loadOptions(prevQuestion);
  } else {
    loadFirstQuestion();
  }

  back.style.display = "flex";
}

back.addEventListener("click", goBack);

//Skip question

function skipQuestion() {
  skip.addEventListener("click", loadNextQuestion);
}

skipQuestion();

//Increment and update score

function incrementScore() {
  scoreValue++;
  score.textContent = scoreValue;
}

//reset score

function resetScore() {
  scoreValue = 0;
  score.textContent = scoreValue;
}

//hide message
function hideMessage() {
  setTimeout(() => {
    message.textContent = "";
  }, 3000);
}

//Clear the correct answwer

function clearCorrect() {
  setTimeout(() => {
    correct.innerHTML = "";
  }, 2000);
}

//Clear if user got it right

function clearIfCorrect() {
  setTimeout(() => {
    correct.innerHTML = "";
  }, 1200);
}
