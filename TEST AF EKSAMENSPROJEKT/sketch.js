ghassan har en cringe far
eow
akil er hund
hashim er skæv
//ligma? Ligmaballs niggeh


let img
let audio
let x
let y
let a
let b
let shot // undefined
let stopX, stopY
let drawText = false
let drawTextNumber
let eventId

let knap1
let visMenu = true
function setup() {
  createCanvas(windowWidth, windowHeight)
  knap1 = createButton('1')
  knap1.position((windowWidth / 2) - 10, (windowHeight / 2) + 65)
  knap1.mousePressed(changeBG)
  knap1.hide()
}
let button1, button2, button3, button4, button5, button6

function draw() {
  background('green')
  if (drawText === true) {
    drawGuess(drawTextNumber)
  }
  if (visMenu === true) {
    knap1.show()
    menu()
  } else {
    knap1.hide()
    drawGoal()
    drawRectangles()
    if (shot === false) {
      drawBall()
    } else if (shot === true) {
      drawMovingBall()
    }
    if (x > stopX - 50 && x < stopX + 50 && y > stopY - 50 && y < stopY + 50) {
      shot = false
      x = windowWidth / 2
      y = windowHeight - 150
      a = 0
      b = 0
    }
  }
}
function knap16() {
  button1 = createButton('Button 1')
  button1.position((windowWidth / 4) + 5, 55)
  button1.size(((windowWidth / 4) * 2) / 3, windowHeight / 2 * 0.39)
  button1.style('visibility', 'hidden')
  button2 = createButton('Button 2')
  button2.position((windowWidth / 4) + 5, windowHeight / 2 * 0.53)
  button2.size(((windowWidth / 4) * 2) / 3, windowHeight / 2 * 0.39)
  button2.style('visibility', 'hidden')
  button3 = createButton('Button 3')
  button3.position(((windowWidth / 4) * 1.66) + 5, 55)
  button3.size(((windowWidth / 4) * 2) / 3, (windowHeight / 2 * 0.39) -
    5)
  button3.style('visibility', 'hidden')
  button4 = createButton('Button 4')
  button4.position(((windowWidth / 4) * 1.66) + 5, windowHeight / 2 * 0.53)
  button4.size(((windowWidth / 4) * 2) / 3, windowHeight / 2 * 0.39)
  button4.style('visibility', 'hidden')
  button5 = createButton('Button 5')
  button5.position(((windowWidth / 4) * 2.31) + 9, 55)
  button5.size(((windowWidth / 4) * 2) / 3, (windowHeight / 2 * 0.39) -
    5)
  button5.style('visibility', 'hidden')
  button6 = createButton('Button 6')
  button6.position(((windowWidth / 4) * 2.31) + 9, windowHeight / 2 * 0.53)
  button6.size(((windowWidth / 4) * 2) / 3, (windowHeight / 2 * 0.39))
  button6.style('visibility', 'hidden')
}
function drawBall() {
  circle(windowWidth / 2, windowHeight - 150, 50)
}
function drawMovingBall() {
  push()
  circle(x, y, 50)
  x = x + a
  y = y + b
  pop()
}
const buttons = [button6, button5, button4, button3, button2, button1]
let chosenButton
function randomizer() {
  // Opret et lærred med størrelse 400x400 pixels
  createCanvas(400, 400)
  // Vælg en knap tilfældigt
  chosenButton = random(buttons)
}
function drawtekst() {
  // Tegn teksten på skærmen afhængigt af hvilken knap der er trykket på
  background(220)
  textSize(32)
  textAlign(CENTER)
  if (mouseIsPressed && mouseX < width && mouseY < height) {
    if (mouseX < width / 2) {
      if (buttons.indexOf(chosenButton) === 0) {
        fill(255, 0, 0)
        text('NO GOAL', width / 4, height / 2)
      } else {
        fill(0, 255, 0)
        text('GOAL', width / 4, height / 2)
      }
    } else {
      if (buttons.indexOf(chosenButton) ===
        5) {
        fill(255, 0, 0)
        text('NO GOAL', 3 * width / 4, height / 2)
      } else {
        fill(0, 255, 0)
        text('GOAL', 3 * width / 4, height / 2)
      }
    }
  } else {
    fill(0)
    text(chosenButton, width / 2, height / 2)
  }
}
function drawGoal() {
  strokeWeight(10)
  stroke('white')
  line(windowWidth / 4, 50, 3 * windowWidth / 4, 50)
  line(windowWidth / 4, windowHeight / 2.2, windowWidth / 4, 50)
  line(windowWidth / 4 * 3, windowHeight / 2.2, windowWidth / 4 * 3, 50)
  strokeWeight(1)
  line((windowWidth / 4) * 1.1, 50, (windowWidth / 4) * 1.1, windowHeight / 2.2)
  line((windowWidth / 4) * 1.2, 50, (windowWidth / 4) * 1.2, windowHeight / 2.2)
  line((windowWidth / 4) * 1.3, 50, (windowWidth / 4) * 1.3, windowHeight / 2.2)
  line((windowWidth / 4) * 1.4, 50, (windowWidth / 4) * 1.4, windowHeight / 2.2)
  line((windowWidth / 4) * 1.5, 50, (windowWidth / 4) * 1.5, windowHeight / 2.2)
  line((windowWidth / 4) * 1.6, 50, (windowWidth / 4) * 1.6, windowHeight / 2.2)
  line((windowWidth / 4) * 1.7, 50, (windowWidth / 4) * 1.7, windowHeight / 2.2)
  line((windowWidth / 4) * 1.8, 50, (windowWidth / 4) * 1.8, windowHeight / 2.2)
  line((windowWidth / 4) * 1.9, 50, (windowWidth / 4) * 1.9, windowHeight / 2.2)
  line((windowWidth / 4) * 2, 50, (windowWidth / 4) * 2, windowHeight / 2.2)
  line((windowWidth / 4) * 2.1, 50, (windowWidth / 4) * 2.1, windowHeight / 2.2)
  line((windowWidth / 4) * 2.2, 50, (windowWidth / 4) * 2.2, windowHeight / 2.2)
  line((windowWidth / 4) * 2.3, 50, (windowWidth / 4) * 2.3, windowHeight / 2.2)
  line((windowWidth / 4) * 2.4, 50, (windowWidth / 4) * 2.4, windowHeight / 2.2)
  line((windowWidth / 4) * 2.5, 50, (windowWidth / 4) * 2.5, windowHeight / 2.2)
  line((windowWidth / 4) * 2.6, 50, (windowWidth / 4) * 2.6, windowHeight / 2.2)
  line((windowWidth / 4) * 2.7, 50, (windowWidth / 4) * 2.7, windowHeight / 2.2)
  line((windowWidth / 4) * 2.8, 50, (windowWidth / 4) * 2.8, windowHeight / 2.2)
  line((windowWidth / 4) * 2.9, 50, (windowWidth / 4) * 2.9, windowHeight / 2.2)
  line(windowWidth / 4, windowHeight / 2 * 0.9, windowWidth / 4 * 3, windowHeight / 2 * 0.9)
  line(windowWidth / 4, windowHeight / 2 * 0.8, windowWidth / 4 * 3, windowHeight / 2 * 0.8)
  line(windowWidth / 4, windowHeight / 2 * 0.7, windowWidth / 4 * 3, windowHeight / 2 * 0.7)
  line(windowWidth / 4, windowHeight / 2 * 0.6, windowWidth / 4 * 3, windowHeight / 2 * 0.6)
  line(windowWidth / 4, windowHeight / 2 * 0.5, windowWidth / 4 * 3, windowHeight / 2 * 0.5)
  line(windowWidth / 4, windowHeight / 2 * 0.4, windowWidth / 4 * 3, windowHeight / 2 * 0.4)
  line(windowWidth / 4, windowHeight / 2 * 0.3, windowWidth / 4 * 3, windowHeight / 2 * 0.3)
}
function menu() {
  textSize(24)
  textAlign(CENTER, CENTER)
  text('MENU', windowWidth / 2, windowHeight / 2)
  square((windowWidth / 2) - 25, (windowHeight / 2) + 50, 55, 20)
  square((windowWidth / 2) - 25, (windowHeight / 2) + 150, 55, 20)
  textSize(24)
  textAlign(CENTER, CENTER)
  text('', (windowWidth / 2), (windowHeight / 2) + 80)
  text('2', (windowWidth / 2), (windowHeight / 2) + 80 + 100)
}
function changeBG() {
  visMenu = false
  console.log("Here's the value of visMenu: ", visMenu)
}
function mousePressed() {
  if (visMenu) {
    console.log('Do nothing')
  } else if (visMenu === false &&
    shot === undefined) {
    shot = false
  } else if (shot === false) {
    x = windowWidth / 2
    y = windowHeight - 150
    stopX = mouseX
    stopY = mouseY
    if (mouseX < windowWidth / 2) {
      a = mouseX - windowWidth / 2
      b = mouseY - (windowHeight - 150)
      a = -a / b
      b = -1
    } else if (mouseX > windowWidth / 2) {
      a = windowWidth / 2 - mouseX
      b = mouseY - (windowHeight - 150)
      a = a / b
      b = -1
    }
    a = a * 10
    b = b * 10
    shot = true
  }
  checkBox()
}
function keyPressed() {
  console.log('You pressed this key: ', key)
}
let playerScore = 0
let computerScore = 0
function updateScore(isPlayerGuessCorrect) {
  if (isPlayerGuessCorrect) {
    playerScore++
  } else {
    computerScore++
  }
}
function drawGuess(boxNum) {
  push()
  fill('white')
  textSize(40)
  textAlign(LEFT, TOP)
  text(`Du gættede på boks ${boxNum}`, 0, 0)
  text(`Score: Player ${playerScore} - Computer ${computerScore}`, 0, 50)
  pop()
}
function guess(boxNum) {
  const rand = Math.random()
  const isCorrect = rand < 2 / 3
  const guessResult = isCorrect ? 'rigtigt' : 'forkert'
  console.log(`Du gættede ${guessResult} på boks ${boxNum}`)
  updateScore(isCorrect)
  console.log(`Score: Player ${playerScore} - Computer ${computerScore}`)
  if (drawText === true) {
    clearInterval(eventId)
    drawText = false
  }
  if (drawText === false) {
    drawText = true
    drawTextNumber = boxNum
    clearInterval(eventId)
    eventId = setInterval(() => { drawText = false }, 5000)
  }
}
function checkBox() {
  const w = (2 * windowWidth / 4) / 3
  const h = windowHeight / 2 * 0.9 - windowHeight / 2 * 0.2
  const t = (2 * windowWidth / 4) / 3
  if (mouseX > windowWidth / 4 && mouseX < windowWidth / 4 + w && mouseY > t && mouseY < t + h) {
    guess(1)
    console.log('Vi ramte boks 1')
  } else if (mouseX > windowWidth / 4 + w && mouseX < windowWidth / 4 + 2 * w && mouseY > t && mouseY < t + h) {
    guess(2)
    console.log('Vi ramte boks 2')
  } else if (mouseX > windowWidth / 4 + 2 * w && mouseX < windowWidth / 4 + 3 * w && mouseY > t && mouseY < t + h) {
    guess(3)
    console.log('Vi ramte boks 3')
  }
}
function drawRectangles() {s
  push()
  stroke('black')
  noFill()
  rect(windowWidth / 4, windowHeight / 2 * 0.2, (2 * windowWidth / 4) / 3, windowHeight / 2 * 0.9 - windowHeight / 2 * 0.2)
  rect(windowWidth / 4 + (2 * windowWidth / 4) / 3, windowHeight / 2 * 0.2, (2 * windowWidth / 4) / 3, windowHeight / 2 * 0.9 - windowHeight / 2 * 0.2)
  rect(windowWidth / 4 + 2 * (2 * windowWidth / 4) / 3, windowHeight / 2 * 0.2, (2 * windowWidth / 4) / 3, windowHeight / 2 * 0.9 - windowHeight / 2 * 0.2)
  pop()
}

