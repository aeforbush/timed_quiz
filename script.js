// created multiple choice questions in an array of question objects
var questions = [

    {
   question: "What does HTMl stand for?",
   choices: ["Hierarchy Text Markup Langauge", "Hypertext Markup Language", "Hypertropic Markup Language" ],
   answer: "Hypertext Markup Language"
    },

    {
    question: "The link for the CSS stylesheet goes in the ____ of an HTML document."
    choices: ["In the Head", "In the Footer", "In a Div"],
    answer: "In the Head"
    },

    {
    question: "JavaScript has ___ Primitive Types?"
    choices: [6, 7, 4],
    answer: "6"
    },

];
// declared variables
var score = 0;
var questionsIndex = 0;

// declared variables
var countDownEl = document.getElementById('countdown');
var questionsEl = document.getElementById('questionsDiv');
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
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;
    if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        countDownEl.textContent = "Time's Up!";
    }
}, 1000);
}
render(questionsIndex);
});


// renders questions and answers to page
function render(questionsIndex) {
    // clears existing data
    questionsEl.innerHTML = "";
    ulCreate.innerHTML = "";

// loop over every question object
for(var i=0; i<questions.length; i++) {
    var userQuestions = questions[questionsIndex].question;
    var userAnswers = questions[questionsIndex].choices;
    questionsDiv.textContent = userQuestions;
}
// forEach for each question answer
    userAnswers.forEAch(function(newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
};

// compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'createDiv');
        if (element.textContent == questions[questionsIndex].answer) {
            score++; 
            createDiv.textContent = "Correct! The answer is: " + questions[questionsIndex].answer;
        } else {
            // time deduction for wrong answer
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong!"
        }
    }
    // questionsIndex determines what number question a user is on
    questionsIndex++;

    if (questionsIndex >= questions.length) {
        allDone();
        createDiv.textContent = "End of Quiz!" + " " + "You got " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionsIndex);
    }
    questionsDiv.appendChild(createDiv);
}



