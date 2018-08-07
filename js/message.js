!function(){
  // View() Model() Controller() 方法源代码见/base文件夹
  
  let view = View('section.message')

  let model = Model({tableName:'Message'})

  let controller = Controller({
    form : null,
    messageList : null,
    init : function(view,model){
      this.form = this.view.querySelector('#messageForm')
      this.messageList = this.view.querySelector('#messageList')
      this.loadMessage()
    },
    bindEvents : function(){
      this.form.addEventListener('submit',function(e){
        e.preventDefault()
        this.saveMessage()
      }.bind(controller))
    },
    loadMessage : function(){
      this.model.fetch()
        .then(
          function (messages) {
            messages.forEach(function(items){
              let li = document.createElement('li')
              li.textContent = `${items.attributes.name} : ${items.attributes.content}`
              this.messageList.appendChild(li)
            })
          }.bind(controller))
    },
    saveMessage : function(){
      let messageForm = this.form
      let name = messageForm.querySelector('input[name=name]').value
      let content = messageForm.querySelector('input[name=content]').value
      this.model.save({name:name,content:content})
        .then(function(object) {
          let li = document.createElement('li')
          li.textContent = `${object.attributes.name} : ${object.attributes.content}`
          this.messageList.appendChild(li)
          messageForm.querySelector('input[name=content]').value = ''
      })
    }
  })
  controller.init(view,model)
}.call()
