console.log('Tic Tac Toe Project')

//Revealing module pattern

const gameboard = (function () {
  //Private gameboard array
  board = ['', '', '', '', '', '', '', '', '']

  // public gameboard method 1
  const resetBoard = () => {
    for (let index = 0; index < board.length; index++) {
      board[index] = ''
    }
  }

  // public gameboard method 2
  const addMarker = (marker, position) => {
    if (board[position] !== '') {
      return `Invalid Move`
    } else {
      board.splice(position, 1, marker)
      //   board[position] = marker
      return board
    }
  }

  //Return object with public methods only
  return { addMarker, resetBoard }
})()

//Factory Function Pattern

const playerFactory = (name, marker) => {
  return { name, marker }
}

// const displayController = (function () {
const player1 = playerFactory('Player 1', 'X')
const player2 = playerFactory('Player 2', 'O')

let turn = 1
let madeMove = false
let currentMarker = player1.marker
let player1WinCount = 0
let player2WinCount = 0

const getCurrentMarker = () => {
  return turn % 2 === 1 ? player1.marker : player2.marker
}

const moveChecker = () => {
  if (madeMove) {
    changeTurn()
    return
  } else {
    addMarker(currentMarker, position)
    madeMove = true
    turn += 1
    return
  }
}

const changeTurn = () => {
  //Pseudocode to change turns
  madeMove = false
}
// const currentTurn = turns.map((turn) => turn % 2)

const resetGame = () => {
  resetBoard()
  turn = 1
  return
}

const checkForWin = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  winConditions.forEach((condition) => {})
}

// })()
