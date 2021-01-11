var timer = document.querySelector("#timer");
var title = document.querySelector("#quiztitle");
var questionArea = document.querySelector("#questionArea");
var answers = document.getElementById("answers");
var submitBtn = document.querySelector("#submitBtn");

var choice = [];
var time = 60;
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
        question: "What is the correct syntax for referring to an external script called &quot;xxx.js&quot;?",
        correct: "&lt;script src = &quot;xxx.js&quot;&gt;",
        answerTwo: "&lt;script href = &quot;xxx.js&quot;&gt;",
        answerThree: "&lt;script name = &quot;xxx.js&quot;&gt;",
        answerFour: "&lt;link script = &quot;xxx.js&quot;&gt;",
    },
    {
        question: "How do you write &quot;Hello World&quot; in an alert box?",
        answerOne: "msgBox(&quot;Hello World&quot;)",
        correct: "alert(&quot;Hello World&quot;)",
        answerThree: "msg(&quot;Hello World&quot;)",
        answerFour: "alertBox(&quot;Hello World&quot;)",
    }
];


//Randomly chooses a question and puts the object into variables.
function ranQues(arr)  {
    choice = arr[Math.floor(Math.random() * arr.length)];
    console.log("This is from the ranQues function: " + JSON.stringify(choice));
    return choice;
}

//This will display the questions and answers on the page.
function dispQuest(choice)    {
    console.log("Question: " + choice.question + "\nAnswer1: " + choice.answerOne + "\nAnswer2: " + choice.answerTwo + "\nAnswer3: " + choice.answerThree + "\nAnswer4: " + choice.answerFour + "\nCorrect Answer: " + choice.correct);
    
    // //Display Question
    questionArea.innerHTML = choice.question;
    // //End Display Question
}


//this will create the buttons and display the answers
        // //Create buttons for each answer
    

    
//This function creates a button for each answer.    
    function lisAns()   {
        for (var i = 1; i < 5; i++) {
            var answer = choice[Object.keys(choice)[i]];
            var entry = document.createElement("li");
            var btn = document.createElement("button");
            entry.appendChild(btn);
            answers.appendChild(entry);
            btn.innerHTML = i + ". " + answer;
            btn.className = "btn btn-primary m-2 p-1";
            btn.id = "answer" + i;
        }
    }



function startQuiz()  {
    submitBtn.remove();
    title.remove();
    ranQues(questionsArr);
    dispQuest(choice);
    lisAns();

    //Start Timer
    setInterval(function()  {
        // Find the distance between now and the count down date
        var timeLeft = 60;
            
        // Time calculations for days, hours, minutes and seconds
        
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById("timer").innerHTML =  minutes + "m " + seconds + "s ";
        console.log(seconds);
    }, 1000);
    //End of timer code
    
}




submitBtn.addEventListener("click",startQuiz);



