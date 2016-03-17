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
  this.speed = 1 / (57.2958 * 1.5);
  this.spin = 0.6;

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

  this.resetRotation = function() {
    var x = this.litterbug.position.x;
    var y = this.litterbug.position.y;

    //runs if testing in browser, not on dome.
    if (!dome) {
      // Reset angle
      if (x == 290 && y == 463) {
        this.litterbug.rotation = 45;
      }

      if (x == 230 && y == 297) {
        this.litterbug.rotation = 90;
      }

      if (x == 324 && y == 105) {
        this.litterbug.rotation = 135;
      }

      if (x == 480 && y == 50) {
        this.litterbug.rotation = 180;
      }

      if (x == 645 && y == 112) {
        this.litterbug.rotation = 235;
      }

      if (x == 730 && y == 300) {
        this.angle = 0;
        this.litterbug.rotation = 270;
      }

      if (x == 675 && y == 456) {
        this.litterbug.rotation = 315;
      }

      if (x == 489 && y == 550) {
        this.litterbug.rotation = 360;
      }
    } else {
      //runs if testing on dome.
      // Reset angle
      if (x == 543 && y == 958) {
        this.litterbug.rotation = 45;
      }

      if (x == 410 && y == 600) {
        this.litterbug.rotation = 90;
      }

      if (x == 556 && y == 227) {
        this.litterbug.rotation = 135;
      }

      if (x == 966 && y == 50) {
        this.litterbug.rotation = 180;
      }

      if (x == 1364 && y == 227) {
        this.litterbug.rotation = 235;
      }

      if (x == 1510 && y == 594) {
        this.angle = 0.01;
        this.litterbug.rotation = 270;
        this.litterbug.position.x = x + 1;
        this.litterbug.position.y = y + 1;
      }

      if (x == 1393 && y == 939) {
        this.litterbug.rotation = 315;
      }

      if (x == 954 && y == 1150) {
        this.litterbug.rotation = 360;
      }
    }
  }
}
