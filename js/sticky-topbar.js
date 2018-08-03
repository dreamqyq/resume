!function(){
  let view = document.getElementById('navBar')
  let controller = {
    view : null,
    siteMenu : null,
    init : function(view){
      this.view = view
      this.siteMenu = view.querySelectorAll('nav > ul > li')
      this.bindEvents()
      this.menuHover()
    },
    bindEvents : function(){
      window.addEventListener('scroll', function(){
        if(window.scrollY > 0){
          this.active(this.view,'sticky')
        }else{
          this.deactive(this.view,'sticky')
        }
      }.bind(controller))
    },
    menuHover : function(){
      let siteMenu = this.siteMenu
      for(let i = 0; i < siteMenu.length;  i++){
        siteMenu[i].onmouseenter = function(ele){
          this.active(ele.currentTarget,'active') 
        }.bind(controller)
        siteMenu[i].onmouseleave = function(ele){
          this.deactive(ele.currentTarget,'active')
        }.bind(controller)
      }
    },
    active : function(ele,className){
      ele.classList.add(className)
    },
    deactive : function(ele,className){
      ele.classList.remove(className)
    },
  }
  controller.init(view)
}.call()
