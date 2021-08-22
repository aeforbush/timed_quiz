// created multiple choice questions in an array of question objects
var questions = [

    {
   question: "What does HTML stand for?",
   choices: ["Hierarchy Text Markup Langauge", "Hypertext Markup Language", "Hypertropic Markup Language"],
   answer: "Hypertext Markup Language"
    },

    {
    question: "The link for the CSS stylesheet goes in the ____ of an HTML document.",
    choices: ["In the Head", "In the Footer", "In a Div"],
    answer: "In the Head"
    },

    {
    question: "What does DOM stand for?",
    choices: ["Document Orientation Model", "Document Object Main", "Document Object Model"],
    answer: "Document Object Model"
    },

];
// declared variables
var score = 0;
var questionsIndex = 0;

// declared variables
var countDown = document.querySelector('#countDown');
var questionsDiv = document.querySelector('#questionsDiv');
var timer = document.querySelector('#startTimer');
var wrapper = document.querySelector('#wrapper');


// timer variables
// 1o seconds per question
var secondsLeft = 30;
// interval hold time
var holdInterval = 0;
// penalty time
var penalty = 10;
// create new element
var ulCreate = document.createElement("ul");

// start timer when button is clicked
timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            countDown.textContent = "Time: " + secondsLeft;
    if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        countDown.textContent = "Time's Up!";
    }
}, 1000);
}
render(questionsIndex);
});


// renders questions and answers to page
function render(questionsIndex) {
    // clears existing data
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

// loop over every question object
for(var i=0; i<questions.length; i++) {
    var userQuestions = questions[questionsIndex].question;
    var userChoices = questions[questionsIndex].choices;
    questionsDiv.textContent = userQuestions;
}
// forEach for each question answer
    userChoices.forEach(function(newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

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
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
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

// allDone appends the last page
function allDone() {
    questionsDiv.innerHTML = "";
    countDown.innerHTML = "";

    // create heading
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "ALL DONE"

    questionsDiv.appendChild(createH1);

    // create paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    // create label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // create input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // create submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

// event listner to save initials and score in local storage

    createSubmit.addEventListener("click", function() {
        var initials = createInput.value;

        if (initials === null) {
            console.log('Please enter initials!');
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("./highScores.html")
        }
    });
    
}





