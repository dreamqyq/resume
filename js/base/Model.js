// 用例：
/*
  var model = Model({
    tableName : '表名'
  })
*/
window.Model = function(options){
  let tableName = options.tableName
  return{
    init : function(){
      var APP_ID = 'mhV5mbomQXQnB50TUsfuGmCB-gzGzoHsz'
      var APP_KEY = 'w4usAIsSAERkgINFpAfrtEN2'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },

    fetch : function(){
      var query = new AV.Query(tableName)
      return query.find()
    },

    save : function(object){
      var Table = AV.Object.extend(tableName);
      var table = new Table();
      return table.save(object)
    }
  }
}
