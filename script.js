var timer = document.querySelector("#timer");
var title = document.querySelector("#quiztitle");
var questions = document.querySelector("#question");
var submitBtn = document.querySelector("#submitBtn");

var timer = 10;
var score = 0;
var incorrectCount = 0;
var questionsArr = [
    {
        question: "How old are you?",
        answerOne: "1",
        answerTwo: "2",
        answerThree: "3",
        answerFour: "4",
        correct: "5",
    },
    {
        question: "Where are you from?",
        answerOne: "1",
        answerTwo: "2",
        answerThree: "3",
        answerFour: "4",
        correct: "5",
    },
    {
        question: "When were you born?",
        answerOne: "",
        answerTwo: "",
        answerThree: "",
        answerFour: "",
        correct: "",
    }
];

function printArr(obj)  {
    console.log(obj.question);
}

submitBtn.addEventListener("click",/*run function */);


questionsArr.forEach(printArr) {
    console.log(""obj.question"");
});


// questionsArr.forEach(function(element,index,arr)    {
//     console.log(arr.element);

// });


