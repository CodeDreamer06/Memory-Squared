function keyPressed() {
  if(keyCode === ENTER && (screen === screens.home))
  	screen = screens.revealQuestion;
  if(keyCode === BACKSPACE && (screen === screens.revealQuestion))
  	screen = screens.home;
  return false;
}

function mouseClicked() {
	if(screen === screens.home)
		screen = screens.revealQuestion;
	return false;
}
