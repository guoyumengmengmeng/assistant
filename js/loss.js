// 声明一条信息的类
class Entry {
  constructor (arg) {
    this.avatar = arg.avatar
    this.name = arg.name
    this.text = arg.text
    this.photo = arg.photo
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
    let text = document.createElement('p')
    let photo = document.createElement('div')
    // 赋值给这些DOM的内容
    avatar.src = '../img/L5.jpg'
    name.innerText = this.name
    text.innerText = this.text
    photo.innerText = this.photo
    // 将赋值后的DOM添加到容器
    section.appendChild(avatar)
    section.appendChild(name)
    section.appendChild(text)
    section.appendChild(photo)
    // 将处理好的容器添加到页面
    let posts = document.querySelector('main')
    let firstEntry = posts.firstChild
    posts.insertBefore(section, firstEntry)
  }
}
// 声明黑幕
let mask = document.getElementById('mask')
function over(){
  mask.style.display = 'none';
}
// 声明表单
let post = document.forms[0]
// 给加号图标绑定弹出选单的事件
document.getElementById('pop-up-post').onclick = () => {
  mask.style.display = 'block'
}
// 给表单绑定上传时的事件
post.addEventListener('submit', e => {
  e.preventDefault()
  let entry = new Entry({
    avatar: post.avatar.value,
    name: post.name.value,
    text: post.text.value,
    photo: post.photo.value
  })
  entry.generateDOM()
  mask.style.display = 'none'
}, false)
