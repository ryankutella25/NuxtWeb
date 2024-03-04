<script setup>
    import '~/assets/css/main.css';

    import projects from "~/components/projects.js";

    const carouselCount = useCarousel();
    const isPaused = usePaused();
    const oneStop = useStop();

    onMounted(() => {
      setInterval(() => {

        var carouselHolder = document.getElementById("carouselHolder");

        if(carouselHolder!=null&&isPaused.value===false&&oneStop.value===false){
          carouselCount.value = (carouselCount.value+1)%projects.length;
        shiftCarousel();

      }
      oneStop.value=false;
      }, 3000)
    })

    function shiftCarousel(){
      var carouselHolder = document.getElementById("carouselHolder");
      if(carouselHolder==null){
        console.log('didnt')
        return;
      }

      var activeItemWidth = 320;
      var normalItemWidth = 220;

      var width = carouselHolder.clientWidth;  //width of carousel
      // console.log(width);
      var itemsWidth = (projects.length-1)*normalItemWidth+activeItemWidth; //width of all items
      // console.log(itemsWidth);

      if(itemsWidth>width){//if greater we need to shift
        var offset;
        var itemWidthToRight = (projects.length-carouselCount.value-1)*normalItemWidth+activeItemWidth; //width to right of active item (including active item)

        if(itemWidthToRight>width||width<800){//active element on left
          offset=itemsWidth-itemWidthToRight;
        }else{//last item on right
          offset=itemsWidth-width;
        }

        var negative = "-";

        if(width<800){//want object in middle
          offset = offset - (width-320)/2;

          if(offset<0) {
            offset = (width-320)/2;
            negative = "";
          };

        }

        var carousel = document.getElementById("carousel");
        if(carousel==null){
          console.log("HUH")
          return;
        }
        
        carousel.style.left = negative+offset+"px";
      }
    }

</script>

<template>
  <div class="fullWidth">

    <MobileHeader class="mobileHeader"/>
    <MainHeader class="mainHeader"/> <!-- Header (in components) --> 
    <NuxtPage style="height: 100%;"/> <!-- Page Content (in pages) -->

  </div>
</template>
