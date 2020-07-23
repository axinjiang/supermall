<template>
    <div class="hy-swiper">
        <div class="swiper" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
            <slot></slot>
        </div>

        <div class="indicator">
            <div v-for="(item,index) in slideCount" class="indi" :class="{active:index == currentIndex-1}" :key="index"></div>
        </div>
    </div>
</template>

<script>
export default {
  name:'Swiper',
  props: {
     interval:{
         type:Number,
         default:3000
     } ,
     animDuration:{
         type:Number,
         default:300
     },
     moveRatio:{
         type:Number,
         default:0.25
     },
     showIndicator:{
         type:Boolean,
         default:true
     }
  },
  data(){
      return{
          slideCount:0,
          totalWidth:0,
          swiperStyle:{},
          currentIndex:1,
          scrolling:false
      }
  },
  mounted () {
      setTimeout(() => {
          this.handle();
          this.startTimer();
      }, 300);
  },
  methods: {
      handle(){
          let swiper = document.querySelector('.swiper');
          let slide = swiper.getElementsByClassName('slide');

          this.slideCount = slide.length;

          if(this.slideCount > 1){
            let cloneFirst = slide[0].cloneNode(true);
            let cloneLast = slide[this.slideCount - 1].cloneNode(true);
            swiper.insertBefore(cloneLast,slide[0]);
            swiper.appendChild(cloneFirst);
            this.totalWidth = swiper.offsetWidth;
            this.swiperStyle = swiper.style;
          }
          
          this.setTransfrom(-this.currentIndex * this.totalWidth);     
      },
      setTransfrom(n){
          this.swiperStyle.transform = `translate3d(${n}px, 0, 0)`;
          this.swiperStyle['-webkit-transform'] = `translate3d(${n}px), 0, 0`;
          this.swiperStyle['-ms-transform'] = `translate3d(${n}px), 0, 0`;
      },
      startTimer(){
          this.playTimer = setInterval(() => {
              this.currentIndex++;
              this.scrollContent(-this.currentIndex * this.totalWidth);
          }, this.interval);
      },
      stopTimer(){
          window.clearInterval(this.playTimer);
      },

      scrollContent(n){
          this.scrolling = true;

          this.swiperStyle.transition = `transform ${this.animDuration}ms`;
          this.setTransfrom(n);

          this.checkPosition();

          this.scrolling = false;
      },
      checkPosition(){
          setTimeout(() => {
              this.swiperStyle.transition = `0ms`;
              if(this.currentIndex > this.slideCount){
                  this.currentIndex = 1;
                  this.setTransfrom(-this.currentIndex * this.totalWidth);
              }else if(this.currentIndex <= 0){
                  this.currentIndex = this.slideCount;
                  this.setTransfrom(-this.currentIndex * this.totalWidth);
              }
          }, this.animDuration);
      },
      touchstart(e){
          if(this.scrolling){
              return
          }else{
              this.stopTimer();
              this.startX = e.touches[0].pageX;
          }
      },
      touchmove(e){
          this.currentX = e.touches[0].pageX;      
          this.distance = this.currentX - this.startX;
          let currentPosition = -this.currentIndex * this.totalWidth + this.distance;
          this.setTransfrom(currentPosition); 
      },
      touchend(e){
          let currentMove = Math.abs(this.distance);
          if(this.distance == 0){
              return
          }else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
              this.currentIndex++;
          }else if(this.distance >0 && currentMove > this.totalWidth * this.moveRatio){
              this.currentIndex--;
          }
          this.scrollContent(-this.currentIndex * this.totalWidth);
          this.startTimer();
      }

  }
}
</script>
<style scoped>
.hy-swiper{
    position:relative;
    overflow:hidden;
}
.swiper{
    display: flex;
}
.indicator{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;                                                                        
}
.indi{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    margin: 0 5px;
}
.active{
    background-color: red;
}
</style>