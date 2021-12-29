function generateRandomSquares() {
	var gridSquares = []
	var x = 0;
	var y = 0;
	while(gridSquares.length < currentLevel) {
		x = Math.floor(Math.random() * gridLength);
		while (x == y) y = Math.floor(Math.random() * 3);
		isDuplicatePresent = false;
		for(var i = 0; i < gridSquares.length; i++)
			if(gridSquares[i].y == y && gridSquares[i].x == x) {
				isDuplicatePresent = true;
				break;
			}
		if(!isDuplicatePresent) gridSquares.push(new Square(x, y));
	}
	return gridSquares;
}