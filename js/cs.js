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

let word = ['与八进制数64.3等值的二进制数是','与十六进制数26.E等值的二进制数是',
'下列数据中，有可能是八进制数的是','已知字母“A”的二进制ASCII编码为“1000001”,则字母“B”的十进制ASCII编码为',
'在不同进制的四个数中，最大的一个数是','1GB等于'];
let translation = ['110100.011','100100.111','100110.111','100101.101','488','317','597','189','33','65','66','32','(1101100)2','(65)10','(70)8','(A7)16','1024×1024字节','1024M字节','1024M二进制位','1000M字节'];

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
