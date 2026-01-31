const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('.continue-btn');
const main = document.querySelector('.main');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const questionText = document.querySelector('.question-text');

let questionCount = 0;
let questionNumb = 1;


startBtn.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
};
exitBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
};
continueBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  quizSection.classList.add('active');
  quizBox.classList.add('active');

  questionCount = 0;
  showQuestions(questionCount);
  questionCounter(1)
};

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
  questionCount++;
  showQuestions(questionCount);

  questionNumb++;
  questionCounter(questionNumb)
    }
    else {
        console.log('Question Compelted');
    }
};
function showQuestions(index) {
  questionText.textContent =
    `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = `
    <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>
  `;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll('.option');
  for (let i = 0; i < option.length; i++){
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

function optionSelected(answer) {
   let userAnswer = answer.textContent;
   let correctAnswer = questions[questionCount].answer; 
//    console.log(correctAnswer);
if (userAnswer == correctAnswer) {
    answer.classList.add('correct');
}
else {
    answer.classList.add('incorrect');
}
   
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total')
    questionTotal.textContent = `${index} of ${questions.length} Questions`
}
