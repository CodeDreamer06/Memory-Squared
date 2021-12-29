function drawHome() {
	background(40, 111, 247);
 	textSize(35);
  	textAlign(CENTER);
  	textStyle(BOLD);
  	fill(255, 255, 255);
  	text('Hi there!', side/2, side/2 - 50);
  	textStyle(NORMAL);
  	textSize(20);
  	text('Tap anywhere to start.', side/2, side/2);
}

function drawScore() {
  textSize(25);
  textAlign(RIGHT);
  textStyle(BOLD);
  fill(255, 255, 255);
  text('Score: ' + score, side - 50, 40);
}

function drawEmptyGrid() {
  fill(28, 31, 38, 30);
  noStroke();
  for(let i = 0; i < gridLength; i++)
    for(let j = 0; j < gridLength; j++)
      rect(initialSquareX + (side/gridSpacing) * i, initialSquareY + (side/gridSpacing) * j, squareSize, squareSize, 20);
}