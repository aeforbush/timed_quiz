// created multiple choice questions in an array of question objects
var questions = [
    {
   prompt: "What does HTMl stand for?\n(a) Hierarchy Text Markup Langauge\n\(b) Hypertext Markup Language\n(c) Hypertropic Markup Language",

   answer: "b"
    },
    {
    prompt: "The link for the CSS stylesheet goes in the ____ of HTML document.\n(a) In the Head\n\(b) In the Footer\n(c) In a Div",

    answer: "a"
    },
    {
    prompt: "JavaScript has ___ Primitive Types?\n(a) 6\n\(b) 7\n(c) 10",

    answer: "a"
    },
];
// declared variables
var score = 0;
var questionIndex = 0;

// loop over every question object
for(var i=0; i<questions.length; i++) {
    var response = window.prompt(questions[i].prompt)
// compare answers
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
};
alert("You got" + score + "/" + questions.length);


// declared variables
var countDownEl = document.getElementById('countdown');
var questionsEl = document.getElementById('questions');
var startBtn = document.getElementById('start');
var wrapperEl = document.getElementById('wrapper');

// timer variables
// 1o seconds per question
var secondsLeft = 30;
// penalty time
var penalty = 10;


// new element variable
// create new element
var ulCreate = document.createElement("ul");

// start timer when button is clicked
startBtn.addEventListener("click", function() {
    if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        countDownEl.textContent = "Time's Up!";
    }
}, 1000);


