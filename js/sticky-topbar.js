		window.onscroll = function(){
			if(window.scrollY > 0){
				navBar.classList.add('sticky');				
			}else{
				navBar.classList.remove('sticky');
			}
			findMinDistance();
		}
		let siteMenu = document.querySelectorAll('.navBar nav > ul > li');
		for(let i = 0; i < siteMenu.length;  i++){
			siteMenu[i].onmouseenter = function(ele){
				ele.currentTarget.classList.add('active');
			}
			siteMenu[i].onmouseleave = function(ele){
				ele.currentTarget.classList.remove('active');				
			}
		}

