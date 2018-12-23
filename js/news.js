// 声明一条信息的类
class Entry {
  constructor (arg) {
    // this.avatar = arg.avatar
    // this.name = arg.name
    this.text = arg.text
    // this.time = arg.time
    this.link = arg.link
  }
  generateDOM () {
    // 创建一条信息的容器
    let section = document.createElement('section')
    // 设定容器的class，以便匹配CSS，以下两种方式均可
    // section.setAttribute('class', 'entry')
    section.className = 'entry'
    // 创建存放不同信息的DOM
    let avatar = document.createElement('img')
    let name = document.createElement('em')
    // text是一个p元素，何来href属性，自然不能跳转
    // let text = document.createElement('p')
    let text = document.createElement('a')
    let time = document.createElement('div')
    // 赋值给这些DOM的内容
    avatar.src = '../img/L5.jpg'
    name.innerText = '中国编程界第一辣鸡'
    // name.innerText = this.name
    text.innerText = this.text
    text.href = this.link
    let date = new Date()
    // time.innerText = date.getFullYear()+'年'+date.getMonth()+'月'+date.getDate();
    time.innerText = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
    // 将赋值后的DOM添加到容器
    section.appendChild(avatar)
    section.appendChild(name)
    section.appendChild(text)
    section.appendChild(time)
    // 将处理好的容器添加到页面
    let posts = document.querySelector('main')
    let firstEntry = posts.firstChild
    posts.insertBefore(section, firstEntry)
  }
}
// 声明黑幕
let mask = document.getElementById('mask')
// 声明表单
let post = document.forms[0]
// 给加号图标绑定弹出选单的事件
document.getElementById('pop-up-post').onclick = () => {
  mask.style.display = 'block'
}
function over(){
  mask.style.display = 'none';
}
// 给表单绑定上传时的事件
post.addEventListener('submit', e => {
  e.preventDefault()
  let entry = new Entry({
    // avatar: post.avatar.value,
    // name: post.name.value,
    text: post.text.value,
    // time: post.time.value,
    link: document.getElementsByClassName('addlink')[0].value
  })
  entry.generateDOM()
  mask.style.display = 'none'
}, false)
