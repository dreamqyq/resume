!function(){
  let view = document.querySelectorAll('.navBar nav > ul > li > a')
  let controller = {
    view : null,
    currentY : null,
    targetY : null,
    distance : null,
    time : null,
    init : function(view){
      this.view = view
      this.bindEvents()
    },
    bindEvents : function(){
      let view = this.view
      for(let i = 0 ; i < view.length ; i++){
        view[i].onclick = function(ele){
          ele.preventDefault();
          this.targetY = document.querySelector(ele.target.getAttribute('href')).offsetTop - 80;
          this.currentY = window.scrollY;
          this.distance = this.currentY - this.targetY;
          this.time = Math.abs((this.distance/100) * 300);
          if(this.time > 500){ this.time = 500 ;}
          this.initAnimation()
          this.smoothAnimation()
        }.bind(controller)
      }
    },
    initAnimation : function(){
      // Setup the animation loop.
      function animate(time) {
          requestAnimationFrame(animate);
          TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    smoothAnimation : function(){
      var coords = {  y: this.currentY }; 
      var tween = new TWEEN.Tween(coords) 
              .to({  y: this.targetY }, this.time) 
              .easing(TWEEN.Easing.Quadratic.InOut) 
              .onUpdate(function() { 
                  window.scrollTo(0,coords.y)
              })
              .start(); 
    }
  }
  controller.init(view)
}.call()
