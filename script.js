var timer = document.querySelector("#timer");
var title = document.querySelector("#quiztitle");
var questionArea = document.querySelector("#questionArea");
var answerList = document.getElementById("#answers");
var submitBtn = document.querySelector("#submitBtn");
var choice = [];

var time = 10;
var score = 0;
var incorrectCount = 0;
var gameover = false;
var questionCount = 0;
var questionsArr = [
    {
        question: "What is DOM an abbreviation for?",
        answerOne: "Do Over Mondays",
        answerTwo: "Old Dominion Freight Line",
        answerThree: "Document Object Model",
        answerFour: "All of the above",
        correct: this.answerThree
    },
    {
        question: "Inside which HTML element do we put the JavaScript file name?",
        answerOne: "&lt;js&gt;",
        answerTwo: "&lt;javascript&gt;",
        answerThree: "&lt;script&gt;",
        answerFour: "&lt;scripting&gt;",
        correct: this.answerThree
    },
    {
        question: "Where is the correct place to insert a JavaScript file name?",
        answerOne: "The &lt;head&gt; section",
        answerTwo: "The &lt;body&gt; section",
        answerThree: "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
        answerFour: "The &lt;title&gt; section",
        correct: this.answerThree
    },
    {
        question: "What is the correct syntax for referring to an external script called &quot;xxx.js&quot;?",
        answerOne: "&lt;script src = &quot;xxx.js&quot;&gt;",
        answerTwo: "&lt;script href = &quot;xxx.js&quot;&gt;;",
        answerThree: "&lt;script name = &quot;xxx.js&quot;&gt;",
        answerFour: "&lt;link script = &quot;xxx.js&quot;&gt;",
        correct: this.answerOne
    },
    {
        question: "How do you write &quot;Hello World&quot; in an alert box?",
        answerOne: "msgBox(&quot;Hello World&quot;)",
        answerTwo: "alert(&quot;Hello World&quot;)",
        answerThree: "msg(&quot;Hello World&quot;)",
        answerFour: "alertBox(&quot;Hello World&quot;)",
        correct: this.answerTwo
    }
];


//Timer
function countdown()    {
    while (gameover === false)  {
        setInterval(function()  {
            console.log(time);
            time--;
            timer.value = time;
            console.log(time);
        }, 1000);
    }
};




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
    var answers = document.getElementById("answers");

    
    
    function lisAns()   {
        for (var i = 1; i < 5; i++) {
            var answer = choice[Object.keys(choice)[i]];
            var entry = document.createElement("li");
            var btn = document.createElement("button");
            entry.appendChild(btn);
            answers.appendChild(entry);
            btn.innerHTML = answer;
            btn.className = "btn btn-sm bg-primary m-1 p-1";
        }

        // console.log("This is from the lisAns function: " + JSON.stringify(choice));
        // console.log("This is from the lisAns function: " + choice[Object.keys(choice)[4]]);

        // var answer1 = choice[Object.keys(choice)[1]];
        // console.log("This is answer 1: " + answer1);

        // var entry = document.createElement("li");
        // var btn = document.createElement("button");
        

        // entry.appendChild(btn);
        // // entry.appendChild(document.createTextNode("This is my first node"));
        // answers.appendChild(entry);
        // btn.innerHTML = answer1;

        // entry.appendChild(btn);
        // entry.appendChild(document.createTextNode("This is my second node"));
        // answers.appendChild(entry);
        // answers.appendChild(entry);
        // btn.innerHTML = choice.answerOne;
        // btn.className = "btn btn-sm bg-primary";
        // End Creating buttons for each answer
    }



function startQuiz()  {
    submitBtn.remove();
    title.remove();
    // countdown();
    ranQues(questionsArr);
    dispQuest(choice);
    lisAns();
}




submitBtn.addEventListener("click",startQuiz);



