class Option {
  constructor (text, correctness) {
    this.text = text
    this.correctness = correctness
  }
}

class Question {
  constructor (indexWord, options) {
    this.indexWord = indexWord
    this.word = word[this.indexWord]
    this.options = []
    this.correctness = false
  }
}

let word = ['electricity','revenue','smash','scorn','stack','temperament','threshold','transition','penalty','pledge','premise','prescription','prestige','instinct','integrity','intuition','lease','legislation','manifestation','notion','opponent','ornament','blunder'];
let translation = ['n.电力','n.税收，岁入','n.打碎，粉碎','n.轻蔑，鄙视', 'n.堆，一堆' ,'n.气质，性格' ,'n.开端，入口','n.过渡，转变' ,'n.制裁，惩罚' ,'n.保证，誓言' ,'n.前提，假设' ,'n.处方' ,'n.威信，威望' ,'n.本能，直觉' ,'n.正直，诚实' ,'n.直觉' ,'n.租约，契约' ,'n.立法，法律' ,'n.表现(形式)' ,'n.概念，观念，理解' ,'n.敌人，对手' ,'n.装饰，装饰品' ,'n.错误，大错'];

let xuhao = document.getElementById('xuhao')
let danci = document.getElementById('danci')
let scores = {
  left: document.getElementById('score-left'),
  right: document.getElementById('score-right')
}
let optionsHTML = document.getElementsByClassName('option')

let countdownInterval

function shuffle (array) {
  array.sort(() => Math.random() - 0.5)
}

let wordIndices = []
let questions = []

function init() {
  let hash = {}
  while (wordIndices.length < 5) {
    let index = Math.round(Math.random()*(word.length-1))
    if(!hash[index]) {
      wordIndices.push(index)
      hash[index] = 1
    }
  }
  for (let wordIndex of wordIndices) {
    questions.push(new Question(wordIndex))
  }
  for (let question of questions) {
    question.options.push(new Option(translation[question.indexWord], true))
    let hashTranslation = {}
    hashTranslation[question.indexWord] = 1
    while (question.options.length < 4) {
      let indexTranslation = Math.floor(Math.random() * translation.length)
      if (!hashTranslation[indexTranslation]) {
        question.options.push(new Option(translation[indexTranslation], false))
        hashTranslation[indexTranslation] = 1
      }
    }
    shuffle(question.options)
  }
  scores.left.innerText = scores.right.innerText = 0
}

var timeRemaining
function countdown () {
  timeRemaining--
  var txt = document.getElementsByClassName('time')[0]
  txt.innerHTML = timeRemaining
  if (timeRemaining <= 0) {
    window.clearInterval(countdownInterval)
    if (++questionNumero < 5) {
      loadQuestion(questionNumero)
    } else{
      end()
    }
  }
}

console.log('aaa')

function loadQuestion (questionIndex) {
  timeRemaining = 5
  var txt = document.getElementsByClassName('time')[0]
  txt.innerHTML = timeRemaining
  countdownInterval = window.setInterval(countdown, 1000)
  let currentQuestion = questions[questionIndex]
  xuhao.innerText = `第 ${questionIndex + 1} 题`
  danci.innerText = currentQuestion.word
  for (let i = 0; i < optionsHTML.length; i++) {
    optionsHTML[i].innerText = currentQuestion.options[i].text
    optionsHTML[i].setAttribute('data-correctness', currentQuestion.options[i].correctness)
  }
}

function judge () {
  // console.log(this)
  if (this.getAttribute('data-correctness') === 'true') {
    let leftScore = parseInt(scores.left.innerText)
    console.log(leftScore)
    scores.left.innerText = leftScore + 1
  }
  window.clearInterval(countdownInterval)
  if (++questionNumero < 5) {
    loadQuestion(questionNumero)
  } else {
    end();
    this.removeEventListener('click', judge)
    window.clearInterval(countdownInterval)
  }
}

let questionNumero = 0
function end(){
    document.getElementById('addclass-mask').style.display = 'block'
    if (parseInt(scores.left.innerText) >= 3) {
      document.getElementById('addclass-mask').innerText = 'congratulations'
    } else {
      document.getElementById('round-message').innerText = 'you lost'
    }
}
window.onload = () => {
  init()
  loadQuestion(questionNumero)
  for (let optionHTML of optionsHTML) {
    optionHTML.addEventListener('click', judge)
  }
}
