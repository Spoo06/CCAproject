const questions = [

{
question:"Which keyword is used for inheritance in Java?",

options:[
"extend",
"inherits",
"extends",
"implement"
],

answer:"extends"
},

{
question:"Which HTTP method retrieves data from API?",

options:[
"POST",
"GET",
"DELETE",
"UPDATE"
],

answer:"GET"
},

{
question:"Which company owns Firebase?",

options:[
"AWS",
"Google",
"Microsoft",
"Oracle"
],

answer:"Google"
},

{
question:"What does SQL stand for?",

options:[
"Structured Query Language",
"Sequential Query Logic",
"Simple Query Layer",
"System Query Logic"
],

answer:"Structured Query Language"
},

{
question:"Which Docker command builds image?",

options:[
"docker start",
"docker build",
"docker run",
"docker create"
],

answer:"docker build"
}

];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = "";

function loadQuestion(){

document.getElementById(
"questionCounter"
).innerText =
"Question "
+
(currentQuestion+1)
+
" / 5";


document.getElementById(
"questionText"
).innerText =
questions[currentQuestion].question;


const optionsContainer =
document.getElementById(
"optionsContainer"
);

optionsContainer.innerHTML = "";


questions[currentQuestion].options.forEach(option=>{

const div =
document.createElement("div");

div.className =
"option";

div.innerText =
option;


div.onclick = ()=>{

document.querySelectorAll(
".option"
).forEach(el=>{

el.classList.remove(
"selected"
);

});

div.classList.add(
"selected"
);

selectedAnswer = option;
};

optionsContainer.appendChild(div);

});
}


function submitAnswer(){

if(selectedAnswer===""){

alert("Please choose answer");

return;
}


if(
selectedAnswer ===
questions[currentQuestion].answer
){

score += 10;
}

currentQuestion++;

updateAnalytics();

selectedAnswer = "";


if(currentQuestion >= questions.length){

finishInterview();

return;
}

loadQuestion();
}


function updateAnalytics(){

const progress =
(currentQuestion/5)*100;


document.getElementById(
"progressFill"
).style.width =
progress+"%";


document.getElementById(
"scoreText"
).innerText =
"Technical Score : "
+
score;


const analysis =
document.getElementById(
"analysisText"
);


if(score >= 40){

analysis.innerText =
"AI Analysis : Excellent technical capability detected 🚀";
}

else if(score >= 20){

analysis.innerText =
"AI Analysis : Good backend understanding ⚡";
}

else{

analysis.innerText =
"AI Analysis : Candidate requires skill improvement 📚";
}
}


function finishInterview(){

const confidence =
(score/50)*100;


document.querySelector(
".question-section"
).innerHTML = `

<h2>🎯 FINAL AI ASSESSMENT REPORT</h2>

<br>

<h3>Technical Score : ${score}/50</h3>

<h3>Confidence Score : ${confidence}%</h3>

<h3>Hiring Probability : ${confidence}%</h3>

<p>Recommended Role : Java Backend Engineer</p>

<br>

<h2>Candidate Assessment Completed ☁️</h2>

`;


document.getElementById(
"analysisText"
).innerText =
"AI Final Report Generated Successfully";


if(window.saveInterviewScore){

window.saveInterviewScore(confidence);
}
}


loadQuestion();