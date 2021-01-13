var timer = document.querySelector("#timer");
// var title = document.querySelector("#quiztitle");
var questionArea = document.querySelector("#questionArea");
var answers = document.getElementById("answers");
// var submitBtn = document.querySelector("#submitBtn");
var count = 0;
var score = 0;
var timeLeft = 30;
var gameover = false;


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





//Creates buttons for each answer
function createBtns()   {
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
        btn.setAttribute("onClick","checkAns(this.id)");
        btn.id = btnID;
    };
};


//Randomly selects a question from the array and displays the questions and answers on the screen. It will remove the question from the array once it's displayed so that the same question doesn't get picked again.

function assignQues(arr)    {
    count++;
    //Randomly choose an object from an array. The objects are the questions and answers.
    ranInt = Math.floor(Math.random() * arr.length)
    randoChoice = arr[ranInt];

    //Displays Question
    questionArea.innerText = randoChoice.question;
    
    //Removes any existing buttons, if there are any, then creates new buttons.
    
    if (answers.hasChildNodes)    {
        answers.querySelectorAll('*').forEach(n => n.remove());
        createBtns();
    }   
    else {
        createBtns();
    };
    
    //Removes the question from the array so it doesn't get selected again
    arr.splice(ranInt, 1);
};

//This function checks if the answer is right or wrong.
function checkAns(btn_id)   {
    
    if (btn_id === "correct")   {
        score++;
        setScore
        timeLeft = timeLeft + 10;
        document.querySelector(".result").innerHTML = "You got it correct!";
        assignQues(questionsArr);
    }
    else    {
        document.querySelector(".result").innerHTML = "You got the last one wrong!";
        timeLeft = timeLeft - 10;
        assignQues(questionsArr);
    }
};

function startQuiz()	{
	document.querySelector("#submitBtn").remove();
	document.querySelector("#quiztitle").remove();
	while(timeLeft > 0 && score !== 5 && count !== questionsArr.length)	{
			countdown = setInterval(function()  {
			if (timeLeft > 0)   {
				timeLeft--; 
				document.getElementById("timer").textContent = "Timer: " + timeLeft;
			}
			else {
				questionArea.innerText = "Time's Up!";
				answers.remove();
			}
		}, 1000);
		assignQues(questionsArr);
	}
	
	questionArea.innerText = "Game Over!";
	var name = "";
	
};

//starts the quiz
// function startQuiz()  {
    // submitBtn.remove(); 
    // title.remove();

    // //Timer
    // countdown = setInterval(function()  {
        // if (timeLeft > 0)   {
            // timeLeft--; 
            // document.getElementById("timer").textContent = "Timer: " + timeLeft;
        // }
        // else {
            // questionArea.textContent = "Time's Up!";
            // answers.remove();
        // }
    // }, 1000);


// }















submitBtn.addEventListener("click",startQuiz);




