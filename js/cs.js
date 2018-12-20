let timu = [
  {
    timu:'与八进制数64.3等值的二进制数是？',
    options:['110100.011','100100.111','100110.111','100101.101'],
    correctness:0,
  },
  {
    timu:'与十六进制数26.E等值的二进制数是？',
    options:['110100.011','100100.111','100110.111','100101.101'],
    correctness:1,
  },
  {
    timu:'一个字节包括多少个二进制位？',
    options:['8','16','32','64'],
    correctness:1,
  },
  {
    timu:'计算机的存储系统一般是指',
    options:['ROM','光盘','软盘','内存'],
    correctness:3,
  },
  {
    timu:'下列软件中不属于系统软件的是',
    options:['操作系统','诊断程序','编译程序','目标程序'],
    correctness:3,
  },
  {
    timu:'计算机的主机不由那个等器件组成',
    options:['输出部件','运算器','控制器','内存储器'],
    correctness:1,
  },
  {
    timu:'1GB等于',
    options:['1024×1024字节','1024M字节','1024M二进制位','1000M字节'],
    correctness:1,
  },
  {
    timu:'在不同进制的四个数中，最大的一个数是',
    options:['(1101100)2','(65)10','(70)8','(A7)16'],
    correctness:1,
  },
  {
    timu:'已知字母“A”的二进制ASCII编码为“1000001”,则字母“B”的十进制ASCII编码为',
    options:['33','65','66','32'],
    correctness:1,
  },
  {
    timu:'下列数据中，有可能是八进制数的是',
    options:['488','317','597','189'],
    correctness:1,
  }
]
let xuhao = document.getElementById('xuhao')
let danci = document.getElementById('danci')
// let scores = {
//   left: document.getElementById('score-left'),
//   right: document.getElementById('score-right')
// },
let optionsHTML = document.getElementsByClassName('option')

let countdownInterval

// function shuffle (array) {
//   array.sort(() => Math.random() - 0.5)
// }

let timuIndices = []
// let questions = []

function init() {
  let hash = {}
  while (timuIndices.length < 5) {
    let index = Math.round(Math.random()*(timu.length-1))
    if(!hash[index]) {
      timuIndices.push(index)
      hash[index] = 1
    }
  }
}
//   for (let timuIndex of timuIndices) {
//     questions.push(new Question(timuIndex))
//   }
//   for (let question of questions) {
//     question.options.push(new Option(translation[question.indextimu], true))
//     let hashTranslation = {}
//     hashTranslation[question.indextimu] = 1
//     while (question.options.length < 4) {
//       let indexTranslation = Math.floor(Math.random() * translation.length)
//       if (!hashTranslation[indexTranslation]) {
//         question.options.push(new Option(translation[indexTranslation], false))
//         hashTranslation[indexTranslation] = 1
//       }
//     }
//     shuffle(question.options)
//   }
//   scores.left.innerText = scores.right.innerText = 0
// }
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

// console.log('aaa')

// let questionIndex = 0

function loadQuestion (questionIndex) {
  timeRemaining = 5
  var txt = document.getElementsByClassName('time')[0]
  txt.innerHTML = timeRemaining
  countdownInterval = window.setInterval(countdown, 1000)
  // let currentQuestion = questions[questionIndex]
  xuhao.innerText = `第 ${questionIndex + 1} 题`
  danci.innerText = timu[timuIndices[questionIndex]].timu
  for (let i = 0; i < 4; i++) {
    optionsHTML[i].innerText = timu[timuIndices[questionIndex]].options[i]
  }
}

// loadQuestion(questionIndex)

function judge () {
  // console.log(this)
  document.getElementById('addclass-mask').style.display = 'block'
  console.log(timu[timuIndices[questionNumero]].correctness)
  if (this.value === timu[timuIndices[questionNumero]].correctness) {
    document.getElementById('addclass-mask').innerText = 'congratulations+解析'
  } else {
    document.getElementById('round-message').innerText = `正确答案是${timu[timuIndices[questionNumero]].options[timu[timuIndices[questionNumero]].correctness]}+解析`
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
  mask.style.display = 'block'
  next.style.display = 'none'
}

let mask = document.getElementById('addclass-mask')
let restart = document.getElementsByName('restart')[0]
let next = document.getElementsByName('next')[0]

function hideMask () {
  mask.style.display = 'none'
}

window.onload = () => {
  init()
  loadQuestion(questionNumero)
  for (let optionHTML of optionsHTML) {
    optionHTML.addEventListener('click', judge)
  }
}
