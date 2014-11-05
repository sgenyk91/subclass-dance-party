// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.$node.css({top:top,left:left});
  this.interval = null;
};

// use jQuery to create an HTML <span> tag
Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  this.interval = setInterval(function() {
    that.step();
  }, that.timeBetweenSteps);
};


