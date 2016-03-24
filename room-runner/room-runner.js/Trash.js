/**
 * Trash Objects Class
 */

function Trash(angle) {
    // litterbug's other attributes
    this.trashXYDIM = 25;
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.angle = angle;
    this.scalar = height / 2 - (this.trashXYDIM / 2) - 15;

    // Sprite attribute generation
    this.trash = createSprite(angle,
        this.trashXYDIM, this.trashXYDIM);

    // Initial Position and Size
    this.trash.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.trash.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.trash.rotation = 90;
    this.trash.scale = 0.20;

    /**
    *Detects collisions between Tommy and trash throughout level
    * if there is a collision the trash will be removed and Tommy's
    * score will be iterated.
    */
    this.checkCollisions = function (tommy) {
        if (this.trash.overlap(tommy.tommy)){
            this.trash.remove();
            tommy.tommy.currentScore = tommy.tommy.currentScore + 1;
        }
    }

    this.setImage = function (image) {
        this.trash.addImage(String(image), image);
    }
}
