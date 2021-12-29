function setup() {
  createCanvas(side + 5, side);
}

function fillGrid() {
  fill(28, 31, 38);
  noStroke();
  for(var i = 0; i < gridSquares.length; i++)
  	rect(initialSquareX + (side/gridSpacing) * gridSquares[i].x, initialSquareY + (side/gridSpacing) * gridSquares[i].y, squareSize, squareSize, 20);
}

function draw() {
  if(screen == screens.home) drawHome();
  else if(screen == screens.revealQuestion) {
	background(40, 111, 247);
	drawEmptyGrid();
	fillGrid();
	drawScore();
  }
  else if(screen == screens.gameEnd) drawGameEnd();
}
