/**
 * Health kit that heals tommy when collided
 */

function Heart(angle, rotation) {
    // litterbug's other attributes
    this.trashXYDIM = 25;
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.angle = angle;
    this.scalar = height / 2 - (this.trashXYDIM / 2) - 150;

    // Sprite attribute generation
    this.trash = createSprite(angle,
        this.trashXYDIM, this.trashXYDIM);

    // Initial Position and Size
    this.trash.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.trash.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.trash.rotation = rotation;
    this.trash.scale = 0.25;

    /**
    *Detects collisions between Tommy and trash throughout level
    * if there is a collision the trash will be removed and Tommy's
    * score will be iterated.
    */
    this.checkCollisions = function (tommy) {
        if (this.trash.overlap(tommy.tommy)){
          tommy.tommy.health++;
          this.trash.remove();
        }
    }

    this.setImage = function (image) {
        this.trash.addImage(String(image), image);
    }
}
