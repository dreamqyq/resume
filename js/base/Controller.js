/*
 用例：
 let controller = Controller({
  init:function(){
    this.xxx()
    this.yyy()
  },
  xxx : function(){},
  yyy : function(){}
 
 })

 */
window.Controller = function(options){
  let object = {
    view : null,
    model : null,
    init : function(view,model){
      this.view = view
      this.model = model
      this.model.init()
      options.init.call(this,view,model)
      options.bindEvents.call(this)
    }
  }
  for(let key in options){
    if(key !== 'init'){
      object[key] = options[key]
    }
  }
  return object
}
