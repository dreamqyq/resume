// 用例：
// let view = View('section.message')

window.View = function(selector){
 return document.querySelector(selector)
}
