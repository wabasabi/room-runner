// Test sphere that moves around on its own
function Tommy() {

  // Sprite attribute generation
  this.tommy = createSprite(width/2, height/2, 100, 100);

  // Sprite animations, initialized in method
  this.tommy.walkingRight = 0;
  this.tommy.idle = 0;

  this.tommy.rotation = 1;

  this.checkCollisions = function(colliders){
    for(var i = 0; i < colliders.length; i++){
      this.tommy.collide(colliders[i]);
    }
  }

  // Assign animation functions
  this.setWalkingRightAnimation = function(WRAnimation){
    this.tommy.walkingRight =
      this.tommy.addAnimation("WalkingRight", WRAnimation);
  }

  this.setIdle = function(idle){
    this.tommy.idle =
      this.tommy.addImage(idle);
  }

  // Keypress functions
  this.moveRight = function(){
    this.tommy.velocity.x = 1;                  // Assign right-way movement
    this.tommy.changeAnimation("WalkingRight"); // Assign walkingAnimation
    this.tommy.mirrorX(1);                      // Face standard direction
  }

  this.moveLeft = function(){
    this.tommy.velocity.x = -1;                  // Assign right-way movement
    this.tommy.changeAnimation("WalkingRight"); // Assign walkingAnimation
    this.tommy.mirrorX(-1);                      // Face standard direction
  }
}
