$(function() {
    const counter = $('#counter');
    const target = 400;
    const duration = 2000;
    
    let current = 0;
    let startTime = null;
  
    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.sqrt(1 - progress); // Quadratic easing
      current = Math.floor(easedProgress * target);
      counter.text(current);
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
  
    requestAnimationFrame(animate);
  });
  