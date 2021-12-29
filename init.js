const side = 500;
const initialSquareX = side/10;
const initialSquareY = side/8;
const gridLength = 3;
const currentLevel = 3;
const squareSize = (side - (side / 4)) / gridLength;
const gridSpacing = gridLength + (side/1000);
const screens = Object.freeze({
  home: 0,
  revealQuestion: 1,
  userAnswer: 2,
  gameEnd: 3
});
var gridSquares = generateRandomSquares()
var score = 0;

var screen = screens.home;