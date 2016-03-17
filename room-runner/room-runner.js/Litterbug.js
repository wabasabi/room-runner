// Litterbug AI
function Litterbug(x, y) {

  // WORK THROUGH WITH THIS EXAMPLE:
  // http://p5play.molleindustria.org/examples/index.html?fileName=sprite4.js#

  // litterbug's other attributes
  this.litterbugXYDIM = 100;
  this.centerX = width / 2;
  this.centerY = height / 2;
  this.angle = 0;
  this.scalar = height / 2 - (this.litterbugXYDIM / 2);
  this.jumpHeight = 0;
  this.speed = 1 / (57.2958 * 2.75);
  this.spin = 0.4;

  // Sprite attribute generation
  this.litterbug = createSprite(x, y,
    this.litterbugXYDIM, this.litterbugXYDIM);

  // Sprite animations, initialized in method
  this.litterbug.walkingRight = false;
  this.litterbug.walkingLeft = false;
  this.litterbug.idle = true;

  // Initial Position
  this.litterbug.position.x = round(this.centerX + cos(this.angle) * this.scalar);
  this.litterbug.position.y = round(this.centerY + sin(this.angle) * this.scalar);
  this.litterbug.rotation = 270;

  this.checkCollisions = function(colliders) {
    for (var i = 0; i < colliders.length; i++) {
      this.litterbug.collide(colliders[i]);
    }
  }

  this.MoveRight = function() {
    this.walkingRight = true;
    this.litterbug.changeAnimation("WalkingLeft");
    this.angle += this.speed;
    this.litterbug.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.litterbug.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.litterbug.rotation += this.spin;
    this.resetRotation();

    print(this.litterbug.position.x);
    print(this.litterbug.position.y);
  }

  this.MoveLeft = function() {
    this.walkingLeft = true;
    this.litterbug.changeAnimation("WalkingRight");
    this.angle -= this.speed;
    this.litterbug.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.litterbug.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.litterbug.rotation -= this.spin;
    this.resetRotation();
  }

  this.jump = function() {
    if (this.jumping == true || this.falling == true) {
      // Do nothing
    } else {
      this.jumping = true;
    }
  }

  this.handleJumping = function() {
    // If litterbug is jumping, jump and set jumpHeight each time
    if (this.jumping) {
      this.scalar -= 10;
      this.jumpHeight += 10;
      this.litterbug.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.litterbug.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      if (this.jumpHeight == 200) {
        this.jumping = false;
        this.falling = true;
      }
    }

    // When max jumpheight is reached, start falling
    if (this.falling) {
      this.scalar += 10;
      this.jumpHeight -= 10;
      this.litterbug.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.litterbug.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      if (this.jumpHeight == 0) {
        this.falling = false;
      }
    }

    // Stop moving when jumpheight is 0
    if (this.jumpHeight == 0) {
      // this.falling = false
    }
  }

  // Assign animation functions
  this.setWalkingAnimations = function(WRAnimation, LRAnimation) {
    this.litterbug.addAnimation("WalkingRight", WRAnimation);
    this.litterbug.addAnimation("WalkingLeft", LRAnimation);
  }

  this.setIdleImages = function(image1, image2) {
    this.litterbug.addImage("IdleRight", image1);
    this.litterbug.addImage("IdleLeft", image2);
  }

  this.stopMoving = function(idle) {
    this.litterbug.setSpeed(0, 0);
    if (this.walkingLeft == true) {
      this.litterbug.changeImage("IdleRight");
      this.walkingLeft = false;
    } else {
      this.litterbug.changeImage("IdleLeft");
      this.walkingRight = false;
    }
  }

  this.patrol = function() {
    if (this.angle >= -0.1) {
      this.MoveRight();
    } else if (this.angle <= 0.05) {
      this.MoveLeft();
    }
  }

  this.resetRotation = function() {
    var x = this.litterbug.position.x;
    var y = this.litterbug.position.y;

    // Reset circle at 2PIr and -2PIr
    if (this.angle > 6.28 || this.angle < -6.28) {
      this.angle = 0;
    }

    // Reset litterbug's angle for viewing in 360 degrees
    if (this.angle > -0.10 && this.angle < 0.05) {
      this.litterbug.rotation = 270;
      print("270");
    }
    if (this.angle > 0.61 && this.angle < 0.72) {
      this.litterbug.rotation = 315;
      print("315");
    }
    if (this.angle > 1.54 && this.angle < 1.59) {
      this.litterbug.rotation = 360;
      print("360");
    }
    if (this.angle > 2.44 && this.angle < 2.47) {
      this.litterbug.rotation = 45;
      print("45");
    }
    if (this.angle > 3.12 && this.angle < 3.17) {
      this.litterbug.rotation = 90;
      print("90");
    }
    if (this.angle > 3.92 && this.angle < 3.98) {
      this.litterbug.rotation = 135;
      print("135");
    }
    if (this.angle > 4.67 && this.angle < 4.73) {
      this.litterbug.rotation - 180;
      print("180");
    }
    if (this.angle > 5.48 && this.angle < 5.55) {
      this.litterbug.rotation = 235;
      print("235");
    }
  }
}
