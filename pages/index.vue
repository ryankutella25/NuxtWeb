<script setup lang="ts">

    import '~/assets/css/main.css';

    import projects from "~/components/projects.js";


const carouselRef = ref(0); //which item is active
const isPaused = ref(false) //true when carousel paused
const oneStop = ref(false)  //true one cycle after pressing next/prev

onMounted(() => {
  //fixes carousel after resizing window
  window.addEventListener("resize", () => {
    shiftCarousel();
  }),
  //fixes carousel when going fullscreen
  window.addEventListener("fullscreenchange", function() {
    shiftCarousel();
  });
  //automatically goes through carousel
  setInterval(() => {
    if(isPaused.value===false&&oneStop.value===false){
      carouselRef.value = (carouselRef.value+1)%projects.length;
      shiftCarousel();
    }
    oneStop.value=false;
  }, 3000)
})

//goes to item to left in carousel
function onPrev(){
  oneStop.value = true;
  carouselRef.value=(carouselRef.value-1+projects.length)%projects.length;
  shiftCarousel();
}

//goes to item to right in carousel
function onNext(){
  oneStop.value = true;
  carouselRef.value=(carouselRef.value+1+projects.length)%projects.length;
  shiftCarousel();
}

//fixes carousel and lets active item be on screen
function shiftCarousel(){
  var carouselDiv = document.getElementById("carousel");
  if(carouselDiv==null){
    return;
  }

  var activeItemWidth = 320;
  var normalItemWidth = 220;

  var width = carouselDiv.clientWidth;  //width of carousel
  var itemsWidth = (projects.length-1)*normalItemWidth+activeItemWidth; //width of all items
  if(itemsWidth>width){//if greater we need to shift
    var offset;
    var itemWidthToRight = (projects.length-carouselRef.value-1)*normalItemWidth+activeItemWidth; //width to right of active item (including active item)

    if(itemWidthToRight>width){//active element on left
      offset=itemsWidth-itemWidthToRight;
    }else{//last item on right
      offset=itemsWidth-width;
    }

    for(var i = 0; i < projects.length; i++){
      var string = "image"+projects[i].itemNum;
      var temp = document.getElementById(string);
      if(temp!=null){
        temp.style.left = "-"+offset+"px";
      }
    }
  }
}

</script>

<template>
  <div>
    <!-- This page correctly has only one single root element -->
    <div class="cityImg">
      <div class="infoContainer">
        <div style="font-size: 21px;text-align: center;">WELCOME TO MY WEBSITE,</div>
        <div style="font-size: 29px;text-align: center;">I AM <span style="font-size: 29px; font-weight: bolder;text-align: center;color: cyan;">RYAN KUTELLA</span></div>
        <div style="font-size: 19px;text-align: center;">CS STUDENT @ U of ALABAMA</div>
      </div>
    </div>
    <div class="projectDiv">
      <h2 class="projectText">Projects</h2>
      <div id="carouselHolder" class="carouselHolder">
        <div id="carousel" class="projectCarousel">
          <div v-for="item in projects" :id="'image'+item.itemNum" :class="[item.itemNum==carouselRef ? 'projectItemActive' : '','projectItem']"></div>
        </div>
      </div>
      <div class="carouselButtons">
        <UButton variant="outline" color="cyan" @click="onPrev()">Prev</UButton>
        <UButton color="cyan" @click="isPaused=!isPaused">{{isPaused?"Play":"Pause"}}</UButton>
        <UButton variant="outline" color="cyan" @click="onNext()">Next</UButton>
      </div>
    </div>

  </div>
</template>