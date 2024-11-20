//Referenzen
// const questionContainer = document.getElementById('questiontext');
// const answer1Container = document.getElementById('answer_1');
// const answer2Container = document.getElementById('answer_2');
// const answer3Container = document.getElementById('answer_3');
// const answer4Container = document.getElementById('answer_4');

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/wrong_answer.mp3');

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById("end-screen").style = '';
        document.getElementById("question-body").style = 'display:none';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    }else{

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent*100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;
        console.log(percent);
        
  let question = questions[currentQuestion];
  document.getElementById("current-question").innerHTML = currentQuestion+1;
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer1"];
  document.getElementById("answer_2").innerHTML = question["answer2"];
  document.getElementById("answer_3").innerHTML = question["answer3"];
  document.getElementById("answer_4").innerHTML = question["answer4"];
    }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  //  let idOfRightAnswer = `answer_${question['right_answer']}`; ---> eine Variante
  let idOfRightAnswer = `answer_` + question["right_answer"]; //---> zweite Variante

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    rightQuestions++;

  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
      AUDIO_FAIL.play();
  }
  document.getElementById("next-button").disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    
    document.getElementById('answer_1').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_2').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_3').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_4').parentNode.classList.remove("bg-danger");

    document.getElementById('answer_1').parentNode.classList.remove("bg-success");
    document.getElementById('answer_2').parentNode.classList.remove("bg-success");
    document.getElementById('answer_3').parentNode.classList.remove("bg-success");
    document.getElementById('answer_4').parentNode.classList.remove("bg-success");    
    
}


function restartGame() {
    currentQuestion = 0;
    rightQuestions = 0;
    document.getElementById("end-screen").style = 'display:none';
    document.getElementById("question-body").style = '';
    init();
}