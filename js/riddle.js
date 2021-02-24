'use strict'

let score = 0

function checkAnswer(inputId, answers, counterRiddle, correctRiddle) {
  let userAnswer = document.getElementById(inputId).value
  userAnswer = userAnswer.toLowerCase()
  for (let i = 0; i < answers.length; i++) {
    if (userAnswer == answers[i]) {
      score++
      correctRiddle.push(counterRiddle)
      break
    }
  }
}

function write(text, idElement) {
  document.getElementById(idElement).innerHTML = text
}

function checkAnswers() {
  let correctRiddle = [] // далее будет заполняться номерами загадок, на которые дали верный ответ
  let counterRiddle = 1 // загадки под номером 0 нет
  checkAnswer('userAnswer1', firstRiddleAnswer, counterRiddle, correctRiddle)
  counterRiddle++
  checkAnswer('userAnswer2', secondRiddleAnswer, counterRiddle, correctRiddle)
  counterRiddle++
  checkAnswer('userAnswer3', thirdRiddleAnswer, counterRiddle, correctRiddle)
  counterRiddle++
  checkAnswer('userAnswer4', fourthRiddleAnswer, counterRiddle, correctRiddle)

  write(`Вы отгадали загадок:  ${score}! `, 'result')
  write(`(${correctRiddle})`, 'correct')
  score = 0 // обнуляем счетчик, иначе при повторном вводе будет суммировать предыдущие попытки
}

let firstRiddle = '1. Зимой и летом одним цветом?'
let firstRiddleAnswer = ['елка', 'ель', 'ёлка']

let secondRiddle = '2. Речка спятила с ума — по домам пошла сама, что это?'
let secondRiddleAnswer = ['водопровод']

let thirdRiddle = '3. Деревянный брусок, а на нем растет лесок, что это?'
let thirdRiddleAnswer = ['щетка', 'щётка']

let fourthRiddle = '4. Ах, не трогайте меня: обожгу и без огня! О чем это?'
let fourthRiddleAnswer = ['крапива']

write(firstRiddle, 'firstRiddle')
write(secondRiddle, 'secondRiddle')
write(thirdRiddle, 'thirdRiddle')
write(fourthRiddle, 'fourthRiddle')
