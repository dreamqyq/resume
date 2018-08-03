var APP_ID = 'mhV5mbomQXQnB50TUsfuGmCB-gzGzoHsz';
var APP_KEY = 'w4usAIsSAERkgINFpAfrtEN2';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
let messagesList = document.getElementById('messagesList')
query.find()
  .then(
    function (messages) {
      messages.forEach(function(items){
        let li = document.createElement('li')
        li.textContent = `${items.attributes.name} : ${items.attributes.content}`
        messagesList.appendChild(li)
      })
    },
    function (error) {
    // 异常处理
    });

var Message = AV.Object.extend('Message');
let messageForm = document.getElementById('messageForm')
messageForm.addEventListener('submit',function(e){
  e.preventDefault()
  var message = new Message();
  let name = messageForm.querySelector('input[name=name]').value
  let content = messageForm.querySelector('input[name=content]').value
  message.save({
    name : name,
    content : content 
  }).then(function(object) {
    let li = document.createElement('li')
    li.textContent = `${object.attributes.name} : ${object.attributes.content}`
    messagesList.appendChild(li)
    messageForm.querySelector('input[name=content]').value = ''
  })
})
