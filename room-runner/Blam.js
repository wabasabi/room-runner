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

  // Initial Position and Size
  this.blam.position.x = round(this.centerX + cos(tommy.angle) * tommy.scalar);
  this.blam.position.y = round(this.centerY + sin(tommy.angle) * tommy.scalar);
  this.blam.rotation = tommy.tommy.rotation;
  this.blam.scale = 1;
  this.blam.visible = false;

  this.setImage = function(image) {
    this.blam.addImage(String(image), image);
  }

  this.update = function() {
    this.blam.position.x = round(this.centerX + cos(tommy.angle) * tommy.scalar);
    this.blam.position.y = round(this.centerY + sin(tommy.angle) * tommy.scalar);
    this.blam.rotation = tommy.tommy.rotation;
  }

}
