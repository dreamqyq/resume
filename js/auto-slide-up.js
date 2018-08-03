!function(){
  let targetArea = document.querySelectorAll('[data-x]');
  for(let i = 0;i < targetArea.length; i++){
      targetArea[i].classList.add('offset')
  }
  window.addEventListener('scroll',function(){
    findClosestAndRemoveOffset()
  })

  function findClosestAndRemoveOffset(){
    let currentY = window.scrollY + 80;

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
}.call()
