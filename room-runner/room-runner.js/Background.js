// Create a background class so it is easy to change color/add images/etc.
function Background() {
  this.x = 0;
  this.y = 0;
  this.backgroundColor = color('#000');
  
  this.draw = function(){
    fill(this.backgroundColor);
    rect(this.x,this.y,width,height);
  }
}