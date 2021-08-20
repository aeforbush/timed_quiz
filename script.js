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
// start the game with a score of 0
var score = 0

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
