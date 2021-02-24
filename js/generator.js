'use strict'

function hide(id) {
  document.getElementById(id).style.display = 'none'
}

function write(text, idElement) {
  document.getElementById(idElement).innerHTML = text
}

function generatorPassword() {
  let symbols = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
  let number = document.getElementById('amountSymbols').value
  parseInt(number)
  let password = ''
  let maxRandomPositionSymbol = symbols.length - 1
  for (let i = 0; i < number; i++) {
    let randomPosition = Math.round(Math.random() * maxRandomPositionSymbol)
    password = password + symbols.substring(randomPosition, randomPosition + 1)
  }

  write(`<b>Пароль: ${password}</b>`, 'info')
}
