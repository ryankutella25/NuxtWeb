<script setup lang="ts">

    import '~/assets/css/main.css';
    const items = [{
      src : 'https://picsum.photos/600/600?random=1',
      active : true,
      itemNum : 0,
    },
    {
      src : 'https://picsum.photos/600/600?random=2',
      active : false,
      itemNum : 1,
    },
    {
      src : 'https://picsum.photos/600/600?random=3',
      active : false,
      itemNum : 2,
    },
    {
      src : 'https://picsum.photos/600/600?random=4',
      active : false,
      itemNum : 3,
    },
    {
      src : 'https://picsum.photos/600/600?random=3',
      active : false,
      itemNum : 4,
    },
    {
      src : 'https://picsum.photos/600/600?random=4',
      active : false,
      itemNum : 5,
    }
]

const carouselRef = ref(0)
const isPaused = ref(false)
const oneStop = ref(false)

onMounted(() => {
  window.addEventListener("resize", () => {
    shiftCarousel();
  }),
  setInterval(() => {
    if(isPaused.value===false&&oneStop.value===false){
      carouselRef.value = (carouselRef.value+1)%items.length;
      shiftCarousel();
    }
    oneStop.value=false;
  }, 3000)
})

function onPrev(){
  oneStop.value = true;
  carouselRef.value=(carouselRef.value-1+items.length)%items.length;
  shiftCarousel();
}

function onNext(){
  oneStop.value = true;
  carouselRef.value=(carouselRef.value+1+items.length)%items.length;
  shiftCarousel();
}

function shiftCarousel(){
  var carouselDiv = document.getElementById("carousel");
  if(carouselDiv==null){
    return;
  }

  var width = carouselDiv.clientWidth;
  var itemsWidth = (items.length-1)*200+300;
  if(itemsWidth>width){//if greater we need to shift
    var offset;
    var itemWidthToRight = (items.length-carouselRef.value-1)*200+300;

    if(itemWidthToRight>width){//active element on left
      offset=itemsWidth-itemWidthToRight;
    }else{//last item on right
      offset=itemsWidth-width;
    }

    for(var i = 0; i < items.length; i++){
      var string = "image"+items[i].itemNum;
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
    <img class="cityImg" src="/AdobeStock_294490632.jpeg"/>
    <div class="projectDiv">
      <h2 class="projectText">Projects</h2>
      <div id="carouselHolder" class="carouselHolder">
        <div id="carousel" class="projectCarousel">
          <img v-for="item in items" :id="'image'+item.itemNum" :src="item.src" class="projectItem" :width="item.itemNum==carouselRef ? '300px' : '200px'">
        </div>
      </div>
      <UButton @click="onPrev()">Prev</UButton>
      <UButton @click="isPaused=true">Pause</UButton>
      <UButton @click="isPaused=false">Play</UButton>
      <UButton @click="onNext()">Next</UButton>
    </div>

  </div>
</template>