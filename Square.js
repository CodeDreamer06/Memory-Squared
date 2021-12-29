class Square {
	constructor(x, y) {
		if(x > gridLength || y > gridLength) throw new Error('Value should be less than ' + gridLength);
		this.x = x;
		this.y = y;
	}
}