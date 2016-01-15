(function() {
  'use strict';

  var particleCount = 52;
  var particles = [];
  var speed = 60;

  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  for (var i = 0; i < particleCount; i++) {
    particles[i] = new Particle({
      ttl: 20000,
      speed: speed,
      maxRadius: 60,
      containerWidth: width,
      containerHeight: height,
      context: context
    });

    particles[i].reset();
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    for (var i = 0; i < particles.length; i++) {
      particles[i].fade();
      particles[i].move();
      particles[i].draw();
    }
  }

  var interval = setInterval(draw,speed);

})();
