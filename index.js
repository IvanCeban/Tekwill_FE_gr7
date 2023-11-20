import Swiper from 'swiper/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', function () {
  let form = document.getElementById('contact-form')

  let inputFullName = document.getElementById('inputFullName')
  let resultFullName = document.getElementById('resultFullName')

  let inputEmail = document.getElementById('inputEmail')
  let resultEmail = document.getElementById('resultEmail')

  let inputSelectDate = document.getElementById('inputSelectDate')
  let resultSelectDate = document.getElementById('resultSelectDate')

  let inputSelectTime = document.getElementById('inputSelectTime')
  let resultSelectTime = document.getElementById('resultSelectTime')

  let inputMessage = document.getElementById('inputMessage')
  let resultMessage = document.getElementById('resultMessage')

  form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()

    let fullName = inputFullName.value
    if (fullName === '' || fullName.length <= 2) {
      resultFullName.textContent =
        'Please enter your name that is at least 3 characters long'
      resultFullName.style.color = '#121831'
    } else {
      resultFullName.textContent = `Hi, ${fullName}! Your fullname was successfully added`
      resultFullName.style.color = '#FFA62B'
    }

    let email = inputEmail.value
    if (email === '') {
      resultEmail.textContent = 'Please enter your email address'
      resultEmail.style.color = '#121831'
    } else {
      resultEmail.textContent = `Your email ${email} was successfully added`
      resultEmail.style.color = '#FFA62B'
    }

    let date = inputSelectDate.value
    if (date === '') {
      resultSelectDate.textContent =
        'Please select a date to schedule a meeting'
      resultSelectDate.style.color = '#121831'
    } else {
      resultSelectDate.textContent = `Great choice! We will be happy to meet you ${date}`
      resultSelectDate.style.color = '#FFA62B'
    }

    let time = inputSelectTime.value
    if (time === 'select') {
      resultSelectTime.textContent = 'Please select time to schedule a meeting'
      resultSelectTime.style.color = '#121831'
    } else {
      resultSelectTime.textContent = ''
    }

    let message = inputMessage.value
    if (message.length < 3) {
      resultMessage.textContent =
        'Please write us about your business and the topics you would like to discuss'
      resultMessage.style.color = '#121831'
    } else {
      resultMessage.textContent = 'We received you message!'
      resultMessage.style.color = '#FFA62B'
    }
  }

  new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
  //==============
  initSlider()
  function initSlider() {
    /* конфигурация */
    let width = 330 // ширина картинки
    let count = 3 // видимое количество изображений

    let list = document.querySelector('.carousel__list')
    let listElems = document.querySelectorAll('.carousel__item')
    let position = 0 // положение ленты прокрутки

    document.querySelector('.arrow--prev').onclick = function () {
      // сдвиг влево
      position += width * count
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px'
      console.log('Position: ', position)
    }

    document.querySelector('.arrow--next').onclick = function () {
      // сдвиг вправо
      position -= width * count
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count))
      list.style.marginLeft = position + 'px'
    }
  }
})
