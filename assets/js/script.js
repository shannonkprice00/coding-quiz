// Question Objects stored in Array
var questionsArr = [{
    question: "1. Which of the following is NOT a common data type stored in JavaScript?",
    choices: ["A: Boolean","B: Number","C: Alert","D: String"],
    answer: "C: Alert"
},{
    question: "2. Inside which HTML element do we put the JavaScript?",
    choices: ["A: <script>","B: <javascript>","C: <js>","D: <scripting>"],
    answer: "A: <script>"
},{
    question: "3. What is the correct JavaScript syntax to change the content of the following HTML element: <p id=”demo”>This is a demonstration.</p>",
    choices: ["A: document.getElement(“p”).innerHTML = “Hello World!”; ","B: document.getElementByName(“p”).innerHTML = “Hello World!”;","C: #demo.innerHTML = “Hello World!”;","D: document.getElementById(“demo”).innerHTML = “Hello World!”;"],
    answer: "D: document.getElementById(“demo”).innerHTML = “Hello World!”;",
},{
    question: "4. Where is the correct place to insert a JavaScript?",
    choices: ["A: Both the <head> section and the <body> section are correct","B: The <head> section","C: The <head> section","D: The <meta> section"],
    answer: "A: Both the <head> section and the <body> section are correct",
},{
    question: "5. How do you write “Hello World” in an alert box?",
    choices: ["A: msgBox(“Hello World”);","B: alert(“Hello World”);","C: alertBox(“Hello World”);","D: msg(“Hello World”);"],
    answer: "B: alert(“Hello World”);",
},{
    question: "6. How do you create a function in JavaScript?",
    choices: ["A: function myFunction()","B: function = myFunction()","C: function:myFunction()","D: function myFunction"],
    answer: "A: function myFunction()",
},{
    question: "7. How do you call a function named “myFunction”?",
    choices: ["A: call myFunction();","B: call function myFunction();","C: myFunction();","D: myFunction;"],
    answer: "C: myFunction();",
},{
    question: "8. How do you write an IF statement in JavaScript?",
    choices: ["A: if i = 5","B: if i == 5 then","C: if (i == 5) ","D: if i = 5 then"],
    answer: "C: if (i == 5) ",
},{
    question: "9. How do you write an IF statement for executing some code if “i” is NOT equal to 5?",
    choices: ["A: if (i != 5)","B: if i =! 5 then","C: if (i <> 5)","D: if i <> 5"],
    answer: "A: if (i != 5)",
},{
    question: "10. How does a FOR loop start?",
    choices: ["A: for (i <= 5; i++)","B: for (i = 0; i <=5)","C: for (i = 0; i <= 5; i++)","D: for i = 1 to 5"],
    answer: "C: for (i = 0; i <= 5; i++)",
}]
// Query Selectors from HTML Doc
var initialPageDiv = document.querySelector("#initial-page");
var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#high-scores");
var scoreDiv = document.querySelector("#score-div");
var timeDiv = document.querySelector("#time-div");
var startBtn = document.querySelector("#start-btn");
var questionSctn = document.querySelector("#question-sctn");
var endSection = document.querySelector("#end");
var highScores = document.querySelector("#view-high-scores");

// Other Variables Needed in Global Scope
var timerCount = 0;
var score = 0;
var currentQuestionIndex = 0;
var scoresArr = [];

// Functions
function init() {
    endSection.style.display = "none";
    questionSctn.style.display = "none";
    highScores.style.display = "none";
    questionSctn.innerHTML = "";
    endSection.innerHTML = "";
    highScores.innerHTML = "";
    initialPageDiv.style.display = "flex";
    scoreDiv.style.visibility = "hidden";
    timeDiv.style.visibility = "hidden";
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.addEventListener("click", viewHighScores);
}

function nextQuestion(event) {
    // check answers here
    var selectedAnswer = event.target.textContent;
    if(selectedAnswer === questionsArr[currentQuestionIndex].answer) {
        var hrEl = document.createElement("hr");
        var correctEl = document.createElement("p");
        correctEl.textContent = "Correct!"
        questionSctn.appendChild(hrEl);
        questionSctn.appendChild(correctEl);
        hrEl.className = "feedback"
        correctEl.className = "feedback"
        score = score + 10;
    } else {
        var hrEl = document.createElement("hr");
        var incorrectEl = document.createElement("p");
        incorrectEl.textContent = "Wrong!"
        questionSctn.appendChild(hrEl);
        questionSctn.appendChild(incorrectEl);
        hrEl.className = "feedback"
        incorrectEl.className = "feedback"
        timerCount = timerCount -5;
    }
    setTimeout(function() {
        currentQuestionIndex++;
        questionSctn.innerHTML = "";
        questionSctn.innerHTML = "";
        if(currentQuestionIndex >= questionsArr.length) {
            currentQuestionIndex = 0;
            timerCount = 0;
        } else {
            renderQuestion();
        }
    }, 1000)
};

function renderQuestion() {
    questionSctn.style.display = "block";
    highScores.style.display = "none";
    endSection.style.display = "none";
    scoreDiv.style.visibility = "hidden";
    var currentQuestion = questionsArr[currentQuestionIndex];
    var questionEl = document.createElement("h2");
    var listEl = document.createElement("ol");
    var lineEl1 = document.createElement("li");
    var lineEl2 = document.createElement("li");
    var lineEl3 = document.createElement("li");
    var lineEl4 = document.createElement("li");
    lineEl1.className = "multiple-choice";
    lineEl2.className = "multiple-choice";
    lineEl3.className = "multiple-choice";
    lineEl4.className = "multiple-choice";
    questionEl.textContent = currentQuestion.question;
    lineEl1.textContent = currentQuestion.choices[0];
    lineEl2.textContent = currentQuestion.choices[1];
    lineEl3.textContent = currentQuestion.choices[2];
    lineEl4.textContent = currentQuestion.choices[3];
    questionSctn.appendChild(questionEl); 
    questionEl.appendChild(listEl);
    questionEl.appendChild(lineEl1);
    questionEl.appendChild(lineEl2);
    questionEl.appendChild(lineEl3);
    questionEl.appendChild(lineEl4);
    lineEl1.addEventListener("click", nextQuestion);
    lineEl2.addEventListener("click", nextQuestion);
    lineEl3.addEventListener("click", nextQuestion);
    lineEl4.addEventListener("click", nextQuestion);
};

function renderScore() {
    var currentScore = document.querySelector("#current-score");
    currentScore.textContent = score.valueOf() + " %";
}

function startTimer() {
   var timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
    scoreEl.addEventListener("click", function () {
        clearInterval(timer);
        timeDiv.style.visibility = "hidden";
    })
}

function startQuiz() {
    timeDiv.style.visibility = "visible";
    timerCount = 75;
    startTimer();
    initialPageDiv.style.display = "none";
    renderQuestion();
}

function viewHighScores() {
    highScores.style.display = "block";
    endSection.style.display = "none";
    initialPageDiv.style.display = "none";
    questionSctn.style.display = "none";
    // if (!"userScore") {
    //     var msg = document.createElement("p");
    //     msg.textContent = "No Scores Yet";
    //     endSection.appendChild(msg);
    // } else {
        var scoreDisplay = JSON.parse(localStorage.getItem("userScore"));
        for (var i = 0; i < scoreDisplay.length; i++) {
            var scoreDisplayli = document.createElement("li");
            scoreDisplayli.className = "high-scores-list"
            scoreDisplayli.innerHTML = "Initials: " + scoreDisplay[i].initials.toUpperCase() + " Score: " + scoreDisplay[i].score + " %";
            highScores.appendChild(scoreDisplayli);
    }
    scoreEl.removeEventListener("click", viewHighScores);
    var startQuiz = document.createElement("button");
    startQuiz.textContent = "Start Quiz";
    startQuiz.className = "end-buttons";
    highScores.appendChild(startQuiz);
    startQuiz.addEventListener("click", function() {
        highScores.innerHTML = "";
        startQuiz.remove();
        init();
    });

}

function renderBtns() {
    var viewScoresBtn = document.createElement("button");
    var playAgain = document.createElement("button");
    viewScoresBtn.textContent = "View High Scores";
    playAgain.textContent = "Play Again";
    viewScoresBtn.className = "end-buttons";
    playAgain.className = "end-buttons";
    endSection.appendChild(viewScoresBtn);
    endSection.appendChild(playAgain);
    viewScoresBtn.addEventListener("click", function() {
        score = 0;
        viewScoresBtn.remove();
        playAgain.remove();
        viewHighScores();
    });
    playAgain.addEventListener("click", function() {
        score = 0;
        viewScoresBtn.remove();
        playAgain.remove();
        startQuiz();
    });
}
function endQuiz() {
    questionSctn.style.display = "none";
    endSection.style.display = "block";
    scoreDiv.style.visibility = "visible";
    timeDiv.style.visibility = "hidden";
    var outcome = document.createElement("h1");
    outcome.innerHTML = "You got a score of: " + (score / 10) + "/10";
    endSection.append(outcome);
    var input = document.createElement("input");
    input.setAttribute("placeholder", "Initials...");
    endSection.append(input);
    var submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.className = "end-buttons";
    endSection.append(submit);
    submit.addEventListener("click", function() {
    if (input.value === "") {
        alert("You must input initials!");
        endSection.innerHTML = "";
        endQuiz ();
        return;
    } else {
        var initials = input.value;
        var values = {
            initials: initials,
            score: score
        };
    }
    scoresArr.push(values);
    localStorage.setItem("userScore", JSON.stringify(scoresArr));
    outcome.style.display = "none";
    input.style.display = "none";
    submit.style.display = "none";
    renderBtns();
})
    renderScore();
}

init ();

startBtn.addEventListener("click", startQuiz);

// TO DO: disable event listeners so items may only be clicked once (MC items)
// TO DO: figure out how to get high scores to push arrays everytime function is called.