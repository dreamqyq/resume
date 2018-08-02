!function(){
  let view = document.getElementById('start')
  let controller = {
    view : null,
    init : function(view){
      this.view = view
      this.bindEvents()
    },
    bindEvents : function(){
      let start = this.view
      setTimeout(function() {
        start.classList.remove('active')
        window.scroll(0,window.scrollY+1)
      }, 1500)
    }
  }
  controller.init(view)
}.call()
