'use strict'

let answer = parseInt(Math.random() * 100)
let tryCount = 0
let maxTryCount = 10

function readInt(user) {
  let number = document.getElementById(user).value
  return parseInt(number)
}

function write(text, idElement) {
  document.getElementById(idElement).innerHTML = text
}

function hide(id) {
  document.getElementById(id).style.display = 'none'
}

function guess() {
  tryCount++

  let userAnswer1 = readInt('userAnswer1')
  let userAnswer2 = readInt('userAnswer2')
  if (tryCount >= maxTryCount) {
    write(`Вы проиграли.<br>Правильный ответ: ${answer}`, 'info')
    hide('button')
    hide('userAnswer1')
    hide('userAnswer2')
    hide('userOne')
    hide('userTwo')
  } else {
    if (userAnswer1 == answer) {
      write(`<b>Поздравляю, Игрок 1, вы угадали! ${answer}!</b>`, 'info')
      hide('button')
      hide('userAnswer1')
      hide('userAnswer2')
      hide('result')
      hide('userOne')
      hide('userTwo')
    }

    if (userAnswer2 == answer) {
      write(`<b>Поздравляю, Игрок 2, вы угадали! ${answer}!</b>`, 'info')
      hide('button')
      hide('userAnswer1')
      hide('userAnswer2')
      hide('result')
      hide('userOne')
      hide('userTwo')
    }

    if (userAnswer1 > answer)
      write(
        '<b>Вы ввели слишком большое число, Игрок 1.</b><br>Попробуйте еще раз. Введите число от 1 до 100!',
        'userOne'
      )

    if (userAnswer1 < answer)
      write(
        '<b>Вы ввели слишком маленькое число, Игрок 1.</b><br>Попробуйте еще раз. Введите число от 1 до 100!',
        'userOne'
      )

    if (userAnswer2 > answer)
      write(
        '<b>Вы ввели слишком большое число, Игрок 2.</b><br>Попробуйте еще раз. Введите число от 1 до 100!',
        'userTwo'
      )

    if (userAnswer2 < answer)
      write(
        '<b>Вы ввели слишком маленькое число, Игрок 2.</b><br>Попробуйте еще раз. Введите число от 1 до 100!',
        'userTwo'
      )

    write(`Осталось попыток: ${maxTryCount - tryCount}`, 'result')
  }
}
