!function(){
  let view = document.querySelector('.slide-wrapper')
  let controller = {
    view : null,
    swiper : null,
    swiperOptions : null,
    init : function(view){
      this.view = view  
      this.swiperOptions = {
        loop : true,
        pagination : {
          el : '.swiper-pagination'
        },
        navigation : {
          nextEl : '.swiper-button-next',
          prevEl : '.swiper-button-prev'
        }
      }
      this.initSwiper()
    },
    initSwiper : function(){
      this.swiper = new Swiper(this.view.querySelector('.swiper-container'),this.swiperOptions) 
    }
  }
  controller.init(view)
}.call()
