var DeflectionDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps / 50);
// call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  this.$node.css({'border': '10px solid ' + '#'+Math.floor(Math.random()*16777215).toString(16)});
  this.positionYChange = 5;
  this.positionXChange = 5;
};

DeflectionDancer.prototype = Object.create(Dancer.prototype);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
DeflectionDancer.prototype.oldStep = Dancer.prototype.step;
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
DeflectionDancer.prototype.step = function() {
  this.top += this.positionYChange;
  this.left += this.positionXChange;
  this.bottom = this.left + 20;
  this.right =this.left + 20;

  if (this.checkForYCollision() && this.checkForXCollision()) {
    this.positionYChange = -this.positionYChange;
    this.positionXChange = -this.positionXChange;
    this.$node.css({'border': '10px solid ' + '#'+Math.floor(Math.random()*16777215).toString(16)});
  }
  if (this.top > WINDOWHEIGHT || this.top < 0) {
    this.positionYChange = -this.positionYChange;
    this.$node.css({'border': '10px solid ' + '#'+Math.floor(Math.random()*16777215).toString(16)});
  }
  if (this.left > WINDOWWIDTH || this.left < 0) {
    this.positionXChange = -this.positionXChange;
    this.$node.css({'border': '10px solid ' + '#'+Math.floor(Math.random()*16777215).toString(16)});
  }
  this.$node.css({top:this.top, left: this.left});
};

DeflectionDancer.prototype.checkForYCollision = function() {
  for (var i = 0; i < window.dancers.length; i++) {
    var dancer = window.dancers[i];
    if ((dancer !== this) && (Math.abs(this.top - dancer.top) < 5)) {
      return true;
    }
  }
  return false;
};

DeflectionDancer.prototype.checkForXCollision = function() {
  for (var i = 0; i < window.dancers.length; i++) {
    var dancer = window.dancers[i];
    if ((dancer !== this) && (Math.abs(this.left - dancer.left) < 5)) {
      return true;
    }
  }
  return false;
};




