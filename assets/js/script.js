// Questions - Can I put this in a separate js file to better organize?
var Question1 = {
    question: "Which of the following is NOT a common data type stored in JavaScript?",
    choiceA: "Boolean",
    choiceB: "Number",
    choiceC: "Alert",
    choiceD: "String",
    correct: "Alert",
};
var Question2 = {
    question: "Inside which HTML element do we put the JavaScript?",
    choiceA: "<script>",
    choiceB: "<javascript>",
    choiceC: "<js>",
    choiceD: "<scripting>",
    correct: "<script>",
};
var Question3 = {
    question: "What is the correct JavaScript syntax to change the content of the following HTML element: <p id=”demo”>This is a demonstration.</p>",
    choiceA: "document.getElement(“p”).innerHTML = “Hello World!”; ",
    choiceB: "document.getElementByName(“p”).innerHTML = “Hello World!”;",
    choiceC: "#demo.innerHTML = “Hello World!”;",
    choiceD: "document.getElementById(“demo”).innerHTML = “Hello World!”;",
    correct: "document.getElementById(“demo”).innerHTML = “Hello World!”;",
};
var Question4 =  {
    question: "Where is the correct place to insert a JavaScript?",
    choiceA: "Both the <head> section and the <body> section are correct",
    choiceB: "The <head> section",
    choiceC: "The <head> section",
    choiceD: "The <meta> section",
    correct: "Both the <head> section and the <body> section are correct",
};
var Question5 = {
    question: "How do you write “Hello World” in an alert box?",
    choiceA: "msgBox(“Hello World”);",
    choiceB: "alert(“Hello World”);",
    choiceC: "alertBox(“Hello World”);",
    choiceD: "msg(“Hello World”);",
    correct: "alert(“Hello World”);",
};
var Question6 = {
    question: "How do you create a function in JavaScript?",
    choiceA: "function myFunction()",
    choiceB: "function = myFunction()",
    choiceC: "function:myFunction()",
    choiceD: "function myFunction",
    correct: "function myFunction()",
};
var Question7 = {
    question: "How do you call a function named “myFunction”?",
    choiceA: "call myFunction();",
    choiceB: "call function myFunction();",
    choiceC: "myFunction();",
    choiceD: "myFunction;",
    correct: "myFunction();",
};
var Question8 = {
    question: "How do you write an IF statement in JavaScript?",
    choiceA: "if i = 5",
    choiceB: "if i == 5 then",
    choiceC: "if (i == 5) ",
    choiceD: "if i = 5 then",
    correct: "if (i == 5) ",
};
var Question9 = {
    question: "How do you write an IF statement for executing some code if “i” is NOT equal to 5?",
    choiceA: "if (i != 5)",
    choiceB: "if i =! 5 then",
    choiceC: "if (i <> 5)",
    choiceD: "if i <> 5",
    correct: "if (i != 5)",
};
var Question10 = {
    question: "How does a FOR loop start?",
    choiceA: "for (i <= 5; i++)",
    choiceB: "for (i = 0; i <=5)",
    choiceC: "for (i = 0; i <= 5; i++)",
    choiceD: "for i = 1 to 5",
    correct: "for (i = 0; i <= 5; i++)",
};
var Question11 = {
    question: "How can you add a comment in JavaScript?",
    choiceA: "<!--This is a comment-->",
    choiceB: "‘This is a comment",
    choiceC: "//This is a comment",
    choiceD: "**This is a comment",
    correct: "//This is a comment",
};
var Question12 = {
    question: "How do you insert a comment that has more than one line?",
    choiceA: "//This comment has more than one line//",
    choiceB: "/*This comment has more than one line*/",
    choiceC: "<!--This comment has more than one line-->",
    choiceD: "**This comment has more than one line**",
    correct: "/*This comment has more than one line*/",
};
var Question13 = {
    question: "What is the correct way to write a JavaScript array?",
    choiceA: "var colors = 1 = (“red”) 2 = (“green”) 3 = (“blue”)",
    choiceB: "var colors = (1:”red”, 2:”green”, 3:”blue”)",
    choiceC: "var colors = “red”, “green”, “blue”",
    choiceD: "var colors = [“red”, “green”, “blue”]",
    correct: "var colors = [“red”, “green”, “blue”]",
};
var Question14 = {
    question: "How do you round the number 7.25 to the nearest integer?",
    choiceA: "Math.rnd(7.25)",
    choiceB: "rnd(7.25)",
    choiceC: "Math.round(7.25)",
    choiceD: "round(7.25)",
    correct: "Math.round(7.25)",
};
var Question15 = {
    question: "A useful tool used during developement and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "terminal/Bash",
    choiceC: "for loops",
    choiceD: "console.log",
    correct: "console.log",
};
var Question16 = {
    question: "Which event occurs when the user clicks on an HTML element?",
    choiceA: "onmouseclick",
    choiceB: "onchange",
    choiceC: "onmouseover",
    choiceD: "onclick ",
    correct: "onclick ",
};
var Question17 = {
    question: "How do you declare a JavaScript Variable?",
    choiceA: "variable carName;",
    choiceB: "var carName;",
    choiceC: "v carName;",
    choiceD: "v = carName;",
    correct: "var carName;",
};
var Question18 = {
    question: "Which operator is used to assign a value to a variable?",
    choiceA: "x",
    choiceB: "-",
    choiceC: "=",
    choiceD: "*",
    correct: "=",
};
var Question19 = {
    question: "What will the following code return: Boolean(10 > 9)",
    choiceA: "NaN",
    choiceB: "True",
    choiceC: "False",
    choiceD: "None of the above",
    correct: "True",
};
var Question20 = {
    question: "How do you find the highest value of x and y?",
    choiceA: "top(x,y)",
    choiceB: "Math.max(x,y)",
    choiceC: "ceil(x,y)",
    choiceD: "Math.ceil(x,y)",
    correct: "Math.max(x,y)",
}
// Question Objects stored in Array
var questionsArr = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14, Question15, Question16, Question17, Question18, Question19, Question20]

// Query Selectors from HTML Doc
var initialPageEls = document.querySelectorAll(".initial-page");
var initialPageDiv = document.querySelector("#initial-page");
var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#high-scores");
var startBtn = document.querySelector("#start-btn");
var formatQuestion = document.querySelector("#format-question");
var questionEl = document.querySelector("#question");
var answers = document.querySelectorAll(".choice")
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var nextBtn = document.querySelector("#next-btn");
var checkAnswer = document.querySelector("#check-answer");

// Other Variables Needed
var timerCount;
var score = 0;
var currentQuestion = questionsArr[0];

// Functions
function init() {
    // hides question html elements for initial page set up
    formatQuestion.style.visibility = "hidden"
}

function scorePage() {

}

function renderQuestion() {
    // hides html elements on initial page set up
    initialPageDiv.style.display = "none";
  
    formatQuestion.style.visibility = "visible";

    questionEl.textContent = currentQuestion.question;
    choiceA.textContent = currentQuestion.choiceA;
    choiceB.textContent = currentQuestion.choiceB;
    choiceC.textContent = currentQuestion.choiceC;
    choiceD.textContent = currentQuestion.choiceD;
}

// answers.addEventListener("click", function (event) {
//     if (target === currentQuestion.correct) {
//         checkAnswer.textContent = "correct"
//     }
// })


function nextQuestion () {
    for (var index = 0; index < questionsArr.length; index++) {
        currentQuestion = questionsArr[index];

        console.log(currentQuestion);

        questionEl.textContent = currentQuestion.question;
        choiceA.textContent = currentQuestion.choiceA;
        choiceB.textContent = currentQuestion.choiceB;
        choiceC.textContent = currentQuestion.choiceC;
        choiceD.textContent = currentQuestion.choiceD;
    }
}
  
nextBtn.addEventListener("click", nextQuestion);

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            scorePage();
        }
    }, 1000);
}

function startQuiz() {
    timerCount = 100;
    startTimer();
    renderQuestion();
}

startBtn.addEventListener("click", startQuiz);

init();