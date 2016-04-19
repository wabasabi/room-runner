// Tommy the trashman
// This is the main sprite class that the player
// controls during normal gameplay.
function Tommy(x, y, health) {

  // Constructor
  {
    // Tommy's other attributes
    this.tommyXYDIM = 100;
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.angle = 0;
    this.scalar = height / 2 - (this.tommyXYDIM / 2) - 10;
    this.jumpHeight = 0;
    this.speed = 1 / (57.2958 * 1.5);
    this.spin = 0.6;

    // Sprite attribute generation
    this.tommy = createSprite(x, y,
      this.tommyXYDIM, this.tommyXYDIM);

    // Health information
    this.healthList = [];

    // Display Blam variable
    displayBlam = false;

    // Sprite generation for scoreboard.
    this.scoreboardSymbol = createSprite(x, y, this.tommyXYDIM / 3, this.tommyXYDIM / 3);
    this.scoreSymbol = createSprite(x, y, this.tommyXYDIM / 3, this.tommyXYDIM / 3);
    this.equalsSymbol = createSprite(x, y, this.tommyXYDIM / 3, this.tommyXYDIM / 3);
    this.oneSymbol = createSprite(x, y, this.tommyXYDIM / 3, this.tommyXYDIM / 3);
    this.tenSymbol = createSprite(x, y, this.tommyXYDIM / 3, this.tommyXYDIM / 3);
    this.hp1 = createSprite(x, y, this.tommyXYDIM / 3, this.tommyXYDIM / 3);
    this.hp2 = createSprite(x, y, this.tommyXYDIM / 3, this.tommyXYDIM / 3);
    this.hp3 = createSprite(x, y, this.tommyXYDIM / 3, this.tommyXYDIM / 3);

    // Note if tommy has died to play animation
    this.tommy.dead = false;

    // Sprite animations, initialized in method
    this.tommy.walkingRight = false;
    this.tommy.walkingLeft = false;
    this.tommy.facingRight = false;
    this.tommy.facingLeft = false;
    this.tommy.idle = true;
    this.jumping = false;
    this.falling = false;
    this.punching = false;
    this.unpunching = false;
    this.punchDistance = 0;

    // Set tommy's point attributes for score
    this.totalPickups = 0;
    this.totalRecyclables = 0;
    this.totalTrash = 0;
    this.currentScore = 0;
    this.health = health;
  }

  // Initial Position
  {
    this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.tommy.rotation = 270;
  }

  // Initial Score position
  {
    var angleScore = this.angle + 0.15;
    var scalarScore = this.scalar - 175;
    var angleScore2 = this.angle + 0;
    var scalarScore2 = this.scalar - 175;
    var angleScore3 = this.angle - 0.15;
    var scalarScore3 = this.scalar - 175;

    //Scoreboard positioning
    this.scoreboardSymbol.addImage("Scoreboard", scoreboardImage);
    this.scoreboardSymbol.scale = (0.725);
    this.scoreboardSymbol.position.x = round(this.centerX + cos(angleScore) * scalarScore);
    this.scoreboardSymbol.position.y = round(this.centerY + sin(angleScore) * scalarScore);
    this.scoreboardSymbol.rotation = 270;

    //Recycle symbol positioning
    this.scoreSymbol.addImage("Recycle", recycleImage);
    this.scoreSymbol.scale = (0.090);
    this.scoreSymbol.position.x = round(this.centerX + cos(angleScore) * scalarScore);
    this.scoreSymbol.position.y = round(this.centerY + sin(angleScore) * scalarScore);
    this.scoreSymbol.rotation = 270;

    //Equals sign positioning
    this.equalsSymbol.addImage("Equals", equalsImage);
    this.equalsSymbol.scale = (0.090);
    this.equalsSymbol.position.x = round(this.centerX + cos(angleScore2) * scalarScore2);
    this.equalsSymbol.position.y = round(this.centerY + sin(angleScore2) * scalarScore2);
    this.equalsSymbol.rotation = 270;

    // Set possible images for ones and tens column values
    this.oneSymbol.addImage("one", oneImage);
    this.oneSymbol.addImage("two", twoImage);
    this.oneSymbol.addImage("three", threeImage);
    this.oneSymbol.addImage("four", fourImage);
    this.oneSymbol.addImage("five", fiveImage);
    this.oneSymbol.addImage("six", sixImage);
    this.oneSymbol.addImage("seven", sevenImage);
    this.oneSymbol.addImage("eight", eightImage);
    this.oneSymbol.addImage("nine", nineImage);
    this.oneSymbol.addImage("zero", zeroImage);
    this.oneSymbol.scale = (0.090);

    this.tenSymbol.addImage("one", oneImage);
    this.tenSymbol.addImage("two", twoImage);
    this.tenSymbol.addImage("three", threeImage);
    this.tenSymbol.addImage("four", fourImage);
    this.tenSymbol.addImage("six", sixImage);
    this.tenSymbol.addImage("seven", sevenImage);
    this.tenSymbol.addImage("eight", eightImage);
    this.tenSymbol.addImage("nine", nineImage);
    this.tenSymbol.addImage("zero", zeroImage);
    this.tenSymbol.scale = (0.090);

    // Set to 0 to initialize
    this.oneSymbol.changeImage("zero");
    this.tenSymbol.changeImage("zero");
  }

  /**
   * Update score location
   **/
  this.updateScore = function() {
    var angle1 = this.angle + 0.20;
    var scalar1 = this.scalar - 100;
    var angle2 = this.angle + .125;
    var scalar2 = this.scalar - 100;

    var angle3 = this.angle + 0.02;
    var scalar3 = this.scalar - 105;
    var angle4 = this.angle + 0.065;
    var scalar4 = this.scalar - 105;

    var scoreboardAngle = this.angle;
    var scoreboardScalar = this.scalar - 105;

    this.scoreboardSymbol.position.x = round(this.centerX + cos(scoreboardAngle) * scoreboardScalar);
    this.scoreboardSymbol.position.y = round(this.centerY + sin(scoreboardAngle) * scoreboardScalar);
    this.scoreboardSymbol.rotation = this.tommy.rotation;

    this.scoreSymbol.position.x = round(this.centerX + cos(angle1) * scalar1);
    this.scoreSymbol.position.y = round(this.centerY + sin(angle1) * scalar1);
    this.scoreSymbol.rotation = this.tommy.rotation;
    this.equalsSymbol.position.x = round(this.centerX + cos(angle2) * scalar2);
    this.equalsSymbol.position.y = round(this.centerY + sin(angle2) * scalar2);
    this.equalsSymbol.rotation = this.tommy.rotation;

    this.oneSymbol.position.x = round(this.centerX + cos(angle3) * scalar3);
    this.oneSymbol.position.y = round(this.centerY + sin(angle3) * scalar3);
    this.oneSymbol.rotation = this.tommy.rotation;

    this.tenSymbol.position.x = round(this.centerX + cos(angle4) * scalar4);
    this.tenSymbol.position.y = round(this.centerY + sin(angle4) * scalar4);
    this.tenSymbol.rotation = this.tommy.rotation;

    // Set the ones and tens based on score
    {
      // If the score is less than 10, the tens column will be invisible
      if (this.currentScore < 10) {
        this.tenSymbol.visible = false;
      } else {
        this.tenSymbol.visible = true;
      }

      // Set the ones for each trash picked up
      if (this.currentScore == 1) {
        this.oneSymbol.changeImage("one");
      } else if (this.currentScore == 2) {
        this.oneSymbol.changeImage("two");
      } else if (this.currentScore == 3) {
        this.oneSymbol.changeImage("three");
      } else if (this.currentScore == 4) {
        this.oneSymbol.changeImage("four");
      } else if (this.currentScore == 5) {
        this.oneSymbol.changeImage("five");
      } else if (this.currentScore == 6) {
        this.oneSymbol.changeImage("six");
      } else if (this.currentScore == 7) {
        this.oneSymbol.changeImage("seven");
      } else if (this.currentScore == 8) {
        this.oneSymbol.changeImage("eight");
      } else if (this.currentScore == 9) {
        this.oneSymbol.changeImage("nine");
      } else if (this.currentScore == 0) {
        this.oneSymbol.changeImage("zero");
      }

      // Set ones and tens for 10-19
      if (this.currentScore == 11) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("one");
      } else if (this.currentScore == 12) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("two");
      } else if (this.currentScore == 13) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("three");
      } else if (this.currentScore == 14) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("four");
      } else if (this.currentScore == 15) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("five");
      } else if (this.currentScore == 16) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("six");
      } else if (this.currentScore == 17) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("seven");
      } else if (this.currentScore == 18) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("eight");
      } else if (this.currentScore == 19) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("nine");
      } else if (this.currentScore == 10) {
        this.tenSymbol.changeImage("one");
        this.oneSymbol.changeImage("zero");
      }

      // Set ones and tens for 10-19
      if (this.currentScore == 21) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("one");
      } else if (this.currentScore == 22) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("two");
      } else if (this.currentScore == 23) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("three");
      } else if (this.currentScore == 24) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("four");
      } else if (this.currentScore == 25) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("five");
      } else if (this.currentScore == 26) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("six");
      } else if (this.currentScore == 27) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("seven");
      } else if (this.currentScore == 28) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("eight");
      } else if (this.currentScore == 29) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("nine");
      } else if (this.currentScore == 20) {
        this.tenSymbol.changeImage("two");
        this.oneSymbol.changeImage("zero");
      }
    }
  }

  // Initial Heart positions
  {
    var angle1 = this.angle + 0.15;
    var scalar1 = this.scalar - 100;
    var angle2 = this.angle - 0;
    var scalar2 = this.scalar - 100;
    var angle3 = this.angle - 0.15;
    var scalar3 = this.scalar - 100;
    this.hp1.addImage("Heart1", healthImage);
    this.hp1.scale = (0.090);
    this.hp1.position.x = round(this.centerX + cos(angle1) * scalar1);
    this.hp1.position.y = round(this.centerY + sin(angle1) * scalar1);
    this.hp1.rotation = 270;
    this.hp2.addImage("Heart2", healthImage);
    this.hp2.scale = (0.090);
    this.hp2.position.x = round(this.centerX + cos(angle2) * scalar2);
    this.hp2.position.y = round(this.centerY + sin(angle2) * scalar2);
    this.hp2.rotation = 270;
    this.hp3.addImage("Heart3", healthImage);
    this.hp3.scale = (0.090);
    this.hp3.position.x = round(this.centerX + cos(angle3) * scalar3);
    this.hp3.position.y = round(this.centerY + sin(angle3) * scalar3);
    this.hp3.rotation = 270;
  }

  /**
   * Update heart locations
   **/
  this.updateHearts = function() {
      var angle1 = this.angle - 0.05;
      var scalar1 = this.scalar - 110;
      var angle2 = this.angle - 0.125;
      var scalar2 = this.scalar - 100;
      var angle3 = this.angle - 0.20;
      var scalar3 = this.scalar - 100;

      //Heart #1
      this.hp1.position.x = round(this.centerX + cos(angle1) * scalar1);
      this.hp1.position.y = round(this.centerY + sin(angle1) * scalar1);
      this.hp1.rotation = this.tommy.rotation;

      //Heart #2
      this.hp2.position.x = round(this.centerX + cos(angle2) * scalar2);
      this.hp2.position.y = round(this.centerY + sin(angle2) * scalar2);
      this.hp2.rotation = this.tommy.rotation;

      //Heart #3
      this.hp3.position.x = round(this.centerX + cos(angle3) * scalar3);
      this.hp3.position.y = round(this.centerY + sin(angle3) * scalar3);
      this.hp3.rotation = this.tommy.rotation;
    }
    // Check for collisions against sprites
  this.checkCollisions = function(collider) {

    // If attacking, don't damage tommy
    if (this.punching || this.unpunching) {
      // Try to reach litterbug programatically
      if (this.angle >= 0) {
        // Positive
        if (this.angle + 0.4 > collider.angle && this.angle - 0.4 < collider.angle) {
          // Knock litterbug back
          if (collider.walkingRight) {
            collider.angle -= 0.20;
            collider.health -= 1;
            // draw blam image
            blam1.blam.visible = true;
          } else if (collider.walkingLeft) {
            collider.angle += 0.20;
            collider.health -= 1;
            // draw blam image
            blam1.blam.visible = true;
          }
        }
      } else if (this.angle < 0) {
        // Negative
        var localAngle = this.angle + 6.28;
        if (localAngle - 0.4 < collider.angle) {
          // Knock litterbug back
          if (collider.walkingRight) {
            collider.angle -= 0.20;
            collider.health -= 1;
            // draw blam image
            blam1.blam.visible = true;
          } else if (collider.walkingLeft) {
            collider.angle += 0.20;
            collider.health -= 1;
            // draw blam image
            blam1.blam.visible = true;
          }
        }
      }
    }

    if (this.tommy.overlap(collider.litterbug) ||
      collider.litterbug.overlap(this.tommy)) {

      if (this.tommy.dead) {
        return;
      }

      if (!this.jumping && !this.falling && collider.health > 0) {
        // If attempting to jump over, don't injure tommy
        // Remove health
        if (this.health == 3) {
          this.hp3.remove();
          this.health -= 1;
        } else if (this.health == 2) {
          this.hp2.remove();
          this.health -= 1;
        } else if (this.health == 1) {
          this.hp1.remove();
          this.health -= 1;
          // Play death stuff and remove movement
          this.tommy.dead = true;
          this.tommy.changeAnimation("Death");
          this.tommy.animation.goToFrame(0);
          deathAnimation = this.tommy.animation;
          setTimeout(function() {
            // Change to second frame after 1 second
            deathAnimation.goToFrame(1);
            tommy.scalar += 50;
          }, 1000);
          setTimeout(function() {
            // Change to final frame after another second
            deathAnimation.goToFrame(2);
          }, 2000);
          death.play();
        }

        // Set knock-back
        if (this.walkingLeft) {
          this.angle += 0.275;
        } else if (this.walkingRight) {
          this.angle -= 0.275;
        } else if (this.tommy.idle) {
          if (collider.walkingLeft) {
            this.angle -= 0.275;
          } else if (collider.walkingRight) {
            this.angle += 0.275;
          }
        }
      }
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    }

    // Always update his stats
    this.updateHearts();
    this.updateScore();
  }

  // Move rightward
  this.MoveRight = function() {
    if (this.tommy.dead) {
      return;
    } else {
      this.walkingLeft = true;
      this.facingLeft = true;
      this.facingRight = false;
      this.tommy.idle = false;
      this.tommy.changeAnimation("WalkingRight");
      this.angle -= this.speed;
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      this.tommy.rotation -= this.spin;
      this.resetRotation();
      this.updateHearts();
      this.updateScore();
    }
  }

  // Move leftward
  this.MoveLeft = function() {
    if (this.tommy.dead) {
      return;
    } else {
      this.walkingRight = true;
      this.facingRight = true;
      this.facingLeft = false;
      this.tommy.idle = false;
      this.tommy.changeAnimation("WalkingLeft");
      this.angle += this.speed;
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      this.tommy.rotation += this.spin;
      this.resetRotation();
      this.updateHearts();
      this.updateScore();
    }
  }

  // Start jump state
  this.jump = function() {
    if (this.tommy.dead) {
      return;
    }
    if (this.jumping == true || this.falling == true) {
      // Do nothing
    } else {
      this.jumping = true;
    }
  }

  // Handle tommys vertical state each frame
  this.handleJumping = function() {
    // If tommy is jumping, jump and set jumpHeight each time
    if (this.jumping) {
      this.scalar -= 10;
      this.jumpHeight += 10;
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      if (this.jumpHeight == 200) {
        this.jumping = false;
        this.falling = true;
      }
      this.updateScore();
      this.updateHearts();
    }

    // When max jumpheight is reached, start falling
    if (this.falling) {
      this.scalar += 10;
      this.jumpHeight -= 10;
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      if (this.jumpHeight == 0) {
        this.falling = false;
      }
      this.updateScore();
      this.updateHearts();
    }

    // Stop moving when jumpheight is 0
    if (this.jumpHeight == 0) {
      // this.falling = false
    }
  }

  // Assign animation functions
  this.setWalkingAnimations = function(WRAnimation, LRAnimation) {
    this.tommy.addAnimation("WalkingRight", WRAnimation);
    this.tommy.addAnimation("WalkingLeft", LRAnimation);
  }

  // Assign death animation function
  this.setDeathAnimation = function(deathAnim) {
    this.tommy.addAnimation("Death", deathAnim);
  }

  this.setAttackAnimation = function(attackAnimRight, attackAnimLeft) {
    this.tommy.addAnimation("AttackRight", attackAnimRight);
    this.tommy.addAnimation("AttackLeft", attackAnimLeft)
  }

  // Assign idle animation images
  this.setIdleImages = function(image1, image2) {
    this.tommy.addImage("IdleRight", image1);
    this.tommy.addImage("IdleLeft", image2);
  }

  // Stop tommy from moving
  this.stopMoving = function(idle) {
    if (this.tommy.dead) {
      return;
    } else {
      this.tommy.setSpeed(0, 0);
      this.tommy.idle = true;
      if (this.walkingLeft == true) {
        this.tommy.changeImage("IdleRight");
        this.walkingLeft = false;
      } else {
        this.tommy.changeImage("IdleLeft");
        this.walkingRight = false;
      }
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      this.updateHearts();
    }
    this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.updateScore();
    this.updateHearts();
  }

  // Punch forward and damage any litterbugs in front
  this.punch = function() {
    if (this.tommy.dead) {
      location.reload();
      return;
    }
    if (this.punching == true || this.unpunching == true) {
      // Do nothing
    } else {
      this.punching = true;
      if (this.facingLeft) {
        this.tommy.changeAnimation("AttackRight");
      } else {
        this.tommy.changeAnimation("AttackLeft");
      }
    }
  }

  this.handleMelee = function() {
    if (this.punching) {
      if (this.facingRight) {
        this.angle += 0.01;
      } else if (this.facingLeft) {
        this.angle -= 0.01;
      }
      this.punchDistance += 1;
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      if (this.punchDistance == 5) {
        this.punching = false;
        this.unpunching = true;
      }
      this.updateScore();
      this.updateHearts();
      blam1.update();
    }

    // When max jumpheight is reached, start falling
    if (this.unpunching) {
      if (this.facingRight) {
        this.angle -= 0.01;
      } else if (this.facingLeft) {
        this.angle += 0.01;
      }
      this.punchDistance -= 1;
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      if (this.punchDistance == 0) {
        // Re-hide blam and change blamImage
        blam1.blam.visible = false;
        blam1.updateBlamImage();

        this.unpunching = false;
        if (this.facingLeft) {
          this.tommy.changeImage("IdleRight");
        } else {
          this.tommy.changeImage("IdleLeft");
        }
      }
      this.updateScore();
      this.updateHearts();
    }
  }

  // Set tommy's correct orientation
  this.resetRotation = function() {
    var x = this.tommy.position.x;
    var y = this.tommy.position.y;

    // Reset circle at 2PIr and -2PIr
    if (this.angle > 6.28 || this.angle < -6.28) {
      this.angle = 0;
    }

    // Reset Tommy's angle for viewing in 360 degrees
    if (this.angle > -0.10 && this.angle < 0.05) {
      this.tommy.rotation = 270;
    }

    // Face tommy 315 + and -
    if ((this.angle > 0.61 && this.angle < 0.72) ||
      (this.angle > -5.55 && this.angle < -5.48)
    ) {
      this.tommy.rotation = 315;
    }

    // Face tommy 360 + and -
    if ((this.angle > 1.54 && this.angle < 1.59) ||
      (this.angle > -4.73 && this.angle < -4.67)
    ) {
      this.tommy.rotation = 360;
    }

    // Face tommy 45 + and -
    if ((this.angle > 2.44 && this.angle < 2.47) ||
      (this.angle > -3.98 && this.angle < -3.92)
    ) {
      this.tommy.rotation = 45;
    }

    // Face tommy 90 + and -
    if (
      (this.angle > 3.12 && this.angle < 3.17) ||
      (this.angle > -3.17 && this.angle < -3.12)
    ) {
      this.tommy.rotation = 90;
    }

    // Face tommy 135 + and -
    if (
      (this.angle > 3.92 && this.angle < 3.98) ||
      (this.angle > -2.47 && this.angle < -2.44)
    ) {
      this.tommy.rotation = 135;
    }

    // Face tommy 180 + and -
    if (
      (this.angle > 4.67 && this.angle < 4.73) ||
      (this.angle > -1.59 && this.angle < -1.54)
    ) {
      this.tommy.rotation = 180;
    }

    // Face tommy 235 + and -
    if (
      (this.angle > 5.48 && this.angle < 5.55) ||
      (this.angle > -0.72 && this.angle < -0.61)
    ) {
      this.tommy.rotation = 235;
    }
  }
}
