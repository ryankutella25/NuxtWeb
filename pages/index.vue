<script setup lang="ts">
import "~/assets/css/main.css";

import projects from "~/components/projects.js";

const carouselRef = useCarousel(); //which carousel item is active
const isPaused = usePaused(); //true when carousel is paused
const oneStop = useStop(); //true one cycle after pressing next/prev

const currentProject = useProjectOpen();//just used when clicking see more on project carousel
const modalActive = useModalActive();//just used when clicking see more on project carousel

onMounted(() => {
  shiftCarousel(),
  //fixes carousel after resizing window
  window.addEventListener("resize", () => {
    shiftCarousel();
  }),
  //fixes carousel when going fullscreen
  window.addEventListener("fullscreenchange", function () {
    shiftCarousel();
  });
});

//goes to item to left in carousel
function onPrev() {
  oneStop.value = true;
  carouselRef.value = (carouselRef.value - 1 + projects.length) % projects.length;
  shiftCarousel();
}

//goes to item to right in carousel
function onNext() {
  oneStop.value = true;
  carouselRef.value = (carouselRef.value + 1 + projects.length) % projects.length;
  shiftCarousel();
}

//fixes carousel and lets active item be on screen
function shiftCarousel() {
  var carouselHolder = document.getElementById("carouselHolder");
  if (carouselHolder == null) {
    return;
  }

  var activeItemWidth = 320;
  var normalItemWidth = 220;

  var width = carouselHolder.clientWidth; //width of carousel
  // console.log(width);
  var itemsWidth = (projects.length - 1) * normalItemWidth + activeItemWidth; //width of all items
  // console.log(itemsWidth);

  if (itemsWidth > width) {
    //if greater we need to shift
    var offset;
    var itemWidthToRight =
      (projects.length - carouselRef.value - 1) * normalItemWidth +
      activeItemWidth; //width to right of active item (including active item)

    if (itemWidthToRight > width || width < 800) {
      //active element on left
      offset = itemsWidth - itemWidthToRight;
    } else {
      //last item on right
      offset = itemsWidth - width;
    }

    var negative = "-";

    if (width < 800) {
      //want object in middle
      offset = offset - (width - 320) / 2;

      if (offset < 0) {
        offset = (width - 320) / 2;
        negative = "";
      }
    }

    var carousel = document.getElementById("carousel");
    if (carousel == null) {
      console.log("HUH");
      return;
    }
    carousel.style.left = negative + offset + "px";
  }
}

//called from see more, passes in itemNum
const toProjects = (itemNum: Number) => {

  currentProject.value = projects[itemNum.valueOf()];
  modalActive.value = true;

  return navigateTo({
    path: '/projects',
  })

}
</script>

<template>
  <div class="mainContainer">
    <!-- This page correctly has only one single root element -->
    <div class="cityImg">
      <div class="infoContainer">
        <div style="font-size: 21px; text-align: center">
          WELCOME TO MY WEBSITE,
        </div>
        <div style="font-size: 29px; text-align: center">
          I AM
          <span
            style="
              font-size: 29px;
              font-weight: bolder;
              text-align: center;
              color: cyan;
            "
            >
            RYAN KUTELLA
          </span>
        </div>
        <div style="font-size: 20px; text-align: center; ">
          CS STUDENT @ U of ALABAMA
        </div>
      </div>
    </div>
    <div class="projectDiv">
      <NuxtLink class="projectText" to="/projects" aria-label="Go To Projects" >Projects</NuxtLink>
      <div id="carouselHolder" class="carouselHolder">
        <div id="carousel" class="projectCarousel">
          <div
            v-for="item in projects"
            :class="[item.itemNum == carouselRef ? 'projectItemActive' : '','projectItem',]"
          >
            <div style="flex: 1; font-size: 18px;" class="projectItemText">{{ item.name }}</div>
            <div v-if="item.itemNum==carouselRef" style="flex: 4" class="projectItemText">{{ item.quickDesc }}</div>
            <div style="flex: 2;" class="projectItemText">{{ item.tech?.join(", ") }}</div>
            <UButton aria-label="Go To Project" v-if="item.itemNum==carouselRef" style="flex: 1; margin-top: 10px;" class="seeMoreButton" variant="solid" color="cyan" @click="toProjects(item.itemNum)">See More</UButton>
          </div>
        </div>
      </div>
      <div class="carouselButtons">
        <UButton aria-label="Previous Slide" variant="outline" color="cyan" @click="onPrev()">Prev</UButton>
        <UButton aria-label="Play/Pause" color="cyan" @click="isPaused = !isPaused">
          <Icon v-if="isPaused" name="ph:play-bold"  color="#121212" size="24px"/>
          <Icon v-if="!isPaused" name="ph:pause-bold"  color="#121212" size="24px"/>
        </UButton>
        <UButton aria-label="Next Slide" variant="outline" color="cyan" @click="onNext()">Next</UButton>
      </div>
    </div>
  </div>
</template>
