const darkMode = document.querySelector('.darkMode')
const btnSocials = document.querySelector('.btnSocials')
const listSocials = document.querySelector('.listSocials')
const bi_list = document.querySelector('.bi-list')
const menuList = document.querySelector('.menuList')
const bi_x_circle = document.querySelector('.bi-x-circle')
const btnMenu = document.querySelectorAll('.btnMenu')
const email = document.querySelector('#email')
const body = document.querySelector('body')

darkMode.addEventListener("click", () => {
  darkMode.classList.toggle('whiteMode')
  body.classList.toggle('bgWhite')
})

btnSocials.addEventListener("click", () => {
  listSocials.classList.toggle('open')
})

bi_list.addEventListener("click", () => {
  menuList.classList.add('openMenu')
})

bi_x_circle.addEventListener("click", () => {
  menuList.classList.remove('openMenu')
})

email.addEventListener('click', () => {
  navigator.clipboard.writeText(email.innerHTML).then(() => {
    alert("E-mail Copiado")
  })
})

for(let btn of btnMenu) {
  btn.addEventListener("click", () => {
    menuList.classList.remove('openMenu')
  })
}