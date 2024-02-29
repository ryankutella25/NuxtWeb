<script setup lang="ts">
    import '~/assets/css/projects.css';
import projects from "~/components/projects.js";

    //items are project items in carousel
    const items = [{}]

    for(var i = 0; i < 10000; i++){
      items.push({});
    }

    const languagesSelected = ref([]);
    const languages = ['Java', 'Python'];

    const projectTypesSelected = ref([]);
    const projectType = ['Personal', 'School'];

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

    var projectsPage = document.getElementById("projectPageContainer");
    if(projectsPage==null){
      return;
    }

    var body = document.body;
    if(body==null){
      return;
    }

    if(projectsPage.offsetHeight>body.offsetHeight) projectsBackground.style.height = projectsPage.offsetHeight+'px';
    else projectsBackground.style.height = body.offsetHeight+'px';
    
  }

  const sortedProjects = computed(() => {
    return projects.filter((item)=> {

      //make sure it fits sorting tech
      let techTrue = false;
      if(languagesSelected.value.length!=0){
        if(item.tech==null) return false;
        for(let i = 0; i < item.tech.length && !techTrue; i++){
          for(let j = 0; j < languagesSelected.value.length; j++){
            console.log(item.tech[0]+" and "+languagesSelected.value[j])
            if(item.tech[0]==languagesSelected.value[j]){
              techTrue = true;
              break;
            };
          }
        }
      }else techTrue = true;

      let typeTrue = false;
      if(projectTypesSelected.value.length!=0){
        if(item.type==null) return false;
        for(let j = 0; j < projectTypesSelected.value.length; j++){
          if(item.type==projectTypesSelected.value[j]){
            typeTrue = true;
            break;
          }
        }
      }else typeTrue=true;

      return techTrue&&typeTrue;
    })
  })

</script>

<template>
  <div class="projectPageContainer" id="projectPageContainer">
    <div class="background" id="projectsBackground"><span v-for="item in items" style="font-weight: bolder;"> &lt;Ryan_Kutella&gt; </span></div>
    <!-- This page correctly has only one single root element -->
    <div class="selectMenuContainer">
      <USelectMenu variant="none" class="selectMenus" style="z-index: 2;" v-model="languagesSelected" :options="languages" multiple placeholder="Technology" >
        <template #label>
          <span v-if="languagesSelected.length" class="truncate">{{ languagesSelected.join(', ') }}</span>
          <span v-else>Technology</span>
        </template>
      </USelectMenu>
      <USelectMenu variant="none" class="selectMenus" style="z-index: 2;" v-model="projectTypesSelected" :options="projectType" multiple placeholder="Personal/School" >
        <template #label>
          <span v-if="projectTypesSelected.length" class="truncate">{{ projectTypesSelected.join(', ') }}</span>
          <span v-else>Personal/School</span>
        </template>
      </USelectMenu>
    </div>


    <div class="projectContainer" id="projectContainer">
      <div class="card" v-for="item in sortedProjects" >
        {{ item.itemNum }}
        <div v-for="tech in item.tech">
          {{ tech }}
        </div>
      </div>
    </div>
  </div>
</template>