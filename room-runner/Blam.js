/**
 * Blams always exist as sprites, but are only visible at specific times
 */

function Blam() {

  // litterbug's other attributes
  this.blamXYDIM = 25;
  this.centerX = width / 2;
  this.centerY = height / 2;
  this.scalar = height / 2 - (this.trashXYDIM / 2) - 150;

  // Sprite attribute generation
  this.blam = createSprite(this.centerX, this.centerY,
    this.blamXYDIM, this.blamXYDIM);

    // Current blam iamge 1-3
    this.currentBlam = 1;

  // Initial Position and Size
  this.blam.position.x = round(this.centerX + cos(tommy.angle) * tommy.scalar);
  this.blam.position.y = round(this.centerY + sin(tommy.angle) * tommy.scalar);
  this.blam.rotation = tommy.tommy.rotation;
  this.blam.scale = 1;
  this.blam.visible = false;

  this.setImage = function(image1, image2, image3) {
    this.blam.addImage("atk1", image1);
    this.blam.addImage("atk2", image2);
    this.blam.addImage("atk3", image3)
  }

  this.update = function() {

    if (tommy.facingRight) {
      this.blam.position.x = round(this.centerX + cos(tommy.angle + 0.2) * tommy.scalar);
      this.blam.position.y = round(this.centerY + sin(tommy.angle + 0.2) * tommy.scalar);
    } else {
      this.blam.position.x = round(this.centerX + cos(tommy.angle - 0.2) * tommy.scalar);
      this.blam.position.y = round(this.centerY + sin(tommy.angle - 0.2) * tommy.scalar);
    }
    this.blam.rotation = tommy.tommy.rotation;
  }

  this.updateBlamImage = function(){
    // ENABLE THIS LINE TO TEST DEBUG
    //this.blam.visible = true;
    if(this.currentBlam == 1){
      this.currentBlam++;
      this.blam.changeImage("atk2");
    } else if(this.currentBlam == 2){
      this.currentBlam++;
      this.blam.changeImage("atk3");
    } else if(this.currentBlam == 3){
      this.currentBlam = 1;
      this.blam.changeImage("atk1");
    }
  }

}
