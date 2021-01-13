var timer = document.querySelector("#timer");
var title = document.querySelector("#quiztitle");
var questionArea = document.querySelector("#questionArea");
var answers = document.getElementById("answers");
var submitBtn = document.querySelector("#submitBtn");

//Answer buttons
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");



var timeLeft = 60;
var score = 0;
var incorrectCount = 0;
var gameover = false;
var questionCount = 0;

var questionsArr = [
    {
        question: "What is DOM an abbreviation for?",
        wrongOne: "Do Over Mondays",
        wrongTwo: "Old Dominion Freight Line",
        correct: "Document Object Model",
        wrongFour: "All of the above",
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



//Randomly selects a question from the array and displays the questions and answers on the screen. It will remove the question from the array once it's displayed so that the same question doesn't get picked again.

function assignQues(arr)    {
    console.log(arr);
    //Need to figure out how to remove existing buttons or not use append to create the buttons.
    //Randomly choose an object from an array. The objects are the questions and answers.
    ranInt = Math.floor(Math.random() * arr.length)
    randoChoice = arr[ranInt];

    //Display Question
    questionArea.innerText = randoChoice.question;
    
    //Creates buttons for each answer
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
        btn.className = "btn btn-primary m-2 p-1 " + "btn" + i;
        btn.setAttribute("onClick","checkAns(this.id)");
        btn.id = btnID;
    }

    //Removes the question from the array
    arr.splice(ranInt, 1);
    console.log(arr);

}

//This function checks the ID of an on click even of a button and checks if the answer is right or wrong.
function checkAns(btn_id)   {
    questionsArr = questionsArr;
    console.log(questionsArr);
    console.log(btn_id);
    if (btn_id === "correct")   {
        score++
        console.log(score);
        timeLeft = timeLeft + 10;
        document.querySelector(".result").innerHTML = "You got it correct!";
        assignQues(questionsArr);
    }
    else    {
        document.querySelector(".result").innerHTML = "You got Wrong!";
        timeLeft = timeLeft - 10;
        assignQues(questionsArr);
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
        }
        else {
            questionArea.textContent = "Time's Up!";
            answers.remove();
        }
    }, 1000);

    assignQues(questionsArr);
   

    
}





submitBtn.addEventListener("click",startQuiz);





