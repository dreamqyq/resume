!function(){
  let view = document.querySelector('section.message')

  let model = {
    init : function(){
      var APP_ID = 'mhV5mbomQXQnB50TUsfuGmCB-gzGzoHsz'
      var APP_KEY = 'w4usAIsSAERkgINFpAfrtEN2'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch : function(){
      var query = new AV.Query('Message')
      return query.find()
    },
    save : function(name,content){
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({
          name : name,
          content : content 
      })
    }
  }

  let controller = {
    view : null,
    model : null,
    form : null,
    messageList : null,
    init : function(view,model){
      this.view = view 
      this.model = model
      this.form = this.view.querySelector('#messageForm')
      this.messageList = this.view.querySelector('#messagesList')
      this.model.init()
      this.loadMessage()
      this.bindEvents()
    },
    bindEvents : function(){
      let messageForm = this.form
      messageForm.addEventListener('submit',function(e){
        e.preventDefault()
        this.saveMessage()
      }.bind(controller))
    },
    loadMessage : function(){
      let messagesList = this.view.messageList
      this.model.fetch()
        .then(
          function (messages) {
            messages.forEach(function(items){
              let li = document.createElement('li')
              li.textContent = `${items.attributes.name} : ${items.attributes.content}`
              messagesList.appendChild(li)
            })
          }.bind(controller),
          function (error) {
          // 异常处理
          });
    },
    saveMessage : function(){
      let name = messageForm.querySelector('input[name=name]').value
      let content = messageForm.querySelector('input[name=content]').value
      this.model.save(name,content)
        .then(function(object) {
        let li = document.createElement('li')
        li.textContent = `${object.attributes.name} : ${object.attributes.content}`
        messagesList.appendChild(li)
        messageForm.querySelector('input[name=content]').value = ''
      })
    }
  }
  controller.init(view,model)
}.call()
