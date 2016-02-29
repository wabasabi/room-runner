// Test sphere that moves around on its own
function Tommy() {
  
  // Sprite attribute generation
  this.tommy = createSprite(0, 0, 100, 100);
  this.tommy.velocity.x = .5;
  
  this.onMouseClick = function(mouseX, mouseY){
	this.tommy.position.x = mouseX;
	this.tommy.position.y = mouseY;
  }
 
  this.collideWithMushroom = function(mushroom){
	  this.tommy.collide(mushroom);
  }
  
  this.test = function(){
	  this.tommy.position.x = width/2;
	  this.tommy.position.y = height/2;
  }
}
