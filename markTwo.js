var readlineSync = require('readline-sync')
var userName = readlineSync.question("What is your name ? ")
console.log("Hi " +userName +"! Welcome to the FRIENDS Quiz") 
var score = 0
function quiz(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer === answer){
    console.log("You are correct!")
    score = score + 1
  }
  else{
    console.log("You are wrong! Better luck in next question")
  }
  console.log("Your current score is : " +score)
  console.log("===============================")
}

var questions = [ questionOne = {
  question : "What is the name of Ross's kid ? a. joey b. chandler c. monica d. ben ",
  answer : "d"
}, questionTwo = {
  question : "What was Rachels first job ? a.waitress b.web developer c.IT Engineer d.none of these ",
  answer : "a"
},
questionThree = {
  question : "As a bestfriend, which food item did joey share with chandler? a. pizza b. sandwich c.noodles d.none of these ",
  answer : "b",
},
questionFour = {
  question : "Who was the first to find out about Chandler & Monica ? a. Ross b. Rachel c.Phoebe d.Joey ",
  answer : "d",
},
questionFive = {
  question : "What is name of Ross & Rachels daughter ? a.Emma b. Stephanie c. Bennie d. Lacey ",
  answer : "a",
}
  
  ]

  for (i=0;i<questions.length;i++){
    var currentQuestion = questions[i]
    quiz(currentQuestion.question,currentQuestion.answer)
  }

