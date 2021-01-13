var timer = document.querySelector("#timer");
var title = document.querySelector("#quiztitle");
var questionArea = document.querySelector("#questionArea");
var answers = document.getElementById("answers");
var submitBtn = document.querySelector("#submitBtn");
var progress = "";
var button1 = document.querySelector("button1");
var button2 = document.querySelector("button2");
var button3 = document.querySelector("button3");
var button4 = document.querySelector("button4");


var timeLeft = 60;
var score = 0;
var incorrectCount = 0;
var gameover = false;
var questionCount = 0;
var questionsArr = [
    {
        question: "What is DOM an abbreviation for?",
        answerOne: "Do Over Mondays",
        answerTwo: "Old Dominion Freight Line",
        correct: "Document Object Model",
        answerFour: "All of the above",
    },
    {
        question: "Inside which HTML element do we put the JavaScript file name?",
        answerOne: "&lt;js&gt;",
        answerTwo: "&lt;javascript&gt;",
        correct: "&lt;script&gt;",
        answerFour: "&lt;scripting&gt;",
    },
    {
        question: "Where is the correct place to insert a JavaScript file name?",
        answerOne: "The &lt;head&gt; section",
        correct: "The &lt;body&gt; section",
        answerThree: "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
        answerFour: "The &lt;title&gt; section",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        correct: "&lt;script src = &quot;xxx.js&quot;&gt;",
        answerTwo: "&lt;script href = &quot;xxx.js&quot;&gt;",
        answerThree: "&lt;script name = &quot;xxx.js&quot;&gt;",
        answerFour: "&lt;link script = &quot;xxx.js&quot;&gt;",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answerOne: "msgBox(&quot;Hello World&quot;)",
        correct: "alert(&quot;Hello World&quot;)",
        answerThree: "msg(&quot;Hello World&quot;)",
        answerFour: "alertBox(&quot;Hello World&quot;)",
    }
];



//Timer

    

//Randomly selects a question from the array and displays the questions and answers on the screen. It will remove the question from the array once it's displayed so that the same question doesn't get picked again.

function assignQues(arr)    {
    //Randomly choose an object from an array. The objects are the questions and answers.
    randoChoice = arr[Math.floor(Math.random() * arr.length + 1)];

    //Display Question
    questionArea.innerText = randoChoice.question;
    //End Display Question

    for (var i = 1; i < 5; i++) {
        var idx = i;
        var key = Object.keys(randoChoice)[idx];
        var value = randoChoice[key];

        var answer = value;
        var btnID = key;
        var entry = document.createElement("li");
        var btn = document.createElement("button");
        
        entry.appendChild(btn);
        answers.appendChild(entry);
        btn.innerHTML = i + ". " + answer;
        btn.className = "btn btn-primary m-2 p-1";
        btn.id = btnID;
    }
}


function startQuiz()  {
    submitBtn.remove(); 
    title.remove();
    //Timer
    countdown = setInterval(function()  {
        if (timeLeft > 0)   {
            timeLeft--; 
            document.getElementById("timer").textContent = "Timer: " + timeLeft;
            console.log("The time left on the clock is " + timeLeft);
        }
        else {
            questionArea.textContent = "Time's Up!";
            answers.remove();
        }
    }, 1000);

    assignQues(questionsArr);
    
}










submitBtn.addEventListener("click",startQuiz);




