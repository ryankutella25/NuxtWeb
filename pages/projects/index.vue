<script setup lang="ts">

    import '~/assets/css/projects.css';

    import projects from "~/components/projects.js";

    //items are project items in carousel
    const items = [{}]

    for(var i = 0; i < 10000; i++){
      items.push({});
    }


onMounted(() => {
  fixBackgroundHeight(),
  //fixes carousel after resizing window
  window.addEventListener("resize", () => {
    fixBackgroundHeight();
  }),
  //fixes carousel when going fullscreen
  window.addEventListener("fullscreenchange", function() {
    fixBackgroundHeight();
  });
})


//fixes carousel and lets active item be on screen
function fixBackgroundHeight(){
  var projectsBackground = document.getElementById("projectsBackground");
  if(projectsBackground==null){
    return;
  }
  var body = document.body;
  if(body==null){
    return;
  }

  projectsBackground.style.height = body.offsetHeight+'px';
}

</script>

<template>
  <div class="projectPageContainer">
    <div class="background" id="projectsBackground"><span v-for="item in items" style="font-weight: bolder;"> &lt;Ryan_Kutella&gt; </span></div>
    <!-- This page correctly has only one single root element -->
    <div class="projectContainer" id="projectContainer">
      <div class="card" v-for="item in projects">

      </div>
    </div>
  </div>
</template>