let aTags = document.querySelectorAll('.navBar nav > ul > li > a');
for(let i = 0 ; i < aTags.length ; i++){
  aTags[i].onclick = function(ele){
    ele.preventDefault();
    let targetY = document.querySelector(ele.target.getAttribute('href')).offsetTop - 80;
    let currentY = window.scrollY;
    let distance = currentY - targetY;
    let time = Math.abs((distance/100) * 300);
    if(time > 500){ time = 500 ;}

    // Setup the animation loop.
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    var coords = {  y: currentY }; 
    var tween = new TWEEN.Tween(coords) 
            .to({  y: targetY }, time) 
            .easing(TWEEN.Easing.Quadratic.InOut) 
            .onUpdate(function() { 
                window.scrollTo(0,coords.y)
            })
            .start(); 
  }
}

		let targetArea = document.querySelectorAll('[data-x]');

		for(let i = 0;i < targetArea.length; i++){
				targetArea[i].classList.add('offset')
		}

		function findMinDistance(){
			let currentY = window.scrollY + 80;
			let targetArea = document.querySelectorAll('[data-x]');

			let minIndex = 0;
			for(let i = 1;i < targetArea.length;i++){
				if(Math.abs(targetArea[i].offsetTop - currentY) < Math.abs(targetArea[minIndex].offsetTop - currentY)){
					minIndex = i;
				}
			}
			let navA = document.querySelector('a[href="#'+ targetArea[minIndex].id +'"]');
			let navLi = navA.parentNode.parentNode.children;
			for(let i = 0; i < navLi.length; i++){
				navLi[i].classList.remove('highlight')
			}
			navA.parentNode.classList.add('highlight');

			let currentArea = targetArea[minIndex];
			currentArea.classList.remove('offset');

		}

