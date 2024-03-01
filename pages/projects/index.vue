<script setup lang="ts">
import "~/assets/css/projects.css";
import projects from "~/components/projects.js";

const isOpen = ref([false]);  //array of booleans to say if modal is open for each project
for (let i = 1; i < projects.length; i++) isOpen.value.push(false); //fill to size of projects

//languages selected holds value from languages, used in sorting
const languagesSelected = ref([]);
const languages = ["Java", "Python"];


//type selected holds value from languages, used in sorting
const typesSelected = ref([]);
const projectType = ["Personal", "School"];

//sortedProjects is just a filtered version of projects, using above selected arrays
const sortedProjects = computed(() => {
  return projects.filter((item) => {
    //make sure it fits sorting tech
    let techTrue = false;
    if (languagesSelected.value.length != 0) {
      if (item.tech == null) return false;
      for (let i = 0; i < item.tech.length && !techTrue; i++) {
        for (let j = 0; j < languagesSelected.value.length; j++) {
          console.log(item.tech[0] + " and " + languagesSelected.value[j]);
          if (item.tech[0] == languagesSelected.value[j]) {
            techTrue = true;
            break;
          }
        }
      }
    } else techTrue = true;

    let typeTrue = false;
    if (typesSelected.value.length != 0) {
      if (item.type == null) return false;
      for (let j = 0; j < typesSelected.value.length; j++) {
        if (item.type == typesSelected.value[j]) {
          typeTrue = true;
          break;
        }
      }
    } else typeTrue = true;

    return techTrue && typeTrue;
  });
});

</script>

<template>
  <div class="projectPageContainer" id="projectPageContainer">
    <!-- This page correctly has only one single root element -->
    <div class="selectMenuContainer">
      <USelectMenu
        variant="none"
        class="selectMenus"
        style="z-index: 2"
        v-model="languagesSelected"
        :options="languages"
        multiple
        placeholder="Technology"
      >
        <template #label>
          <span v-if="languagesSelected.length" class="truncate">
          {{ languagesSelected.join(", ") }}
          </span>
          <span v-else>Technology</span>
        </template>
      </USelectMenu>
      <USelectMenu
        variant="none"
        class="selectMenus"
        style="z-index: 2"
        v-model="typesSelected"
        :options="projectType"
        multiple
        placeholder="Personal/School"
      >
        <template #label>
          <span v-if="typesSelected.length" class="truncate">
            {{typesSelected.join(", ")}}
          </span>
          <span v-else>Personal/School</span>
        </template>
      </USelectMenu>
    </div>

    <div class="projectContainer" id="projectContainer">
      <div class="card" v-for="item in sortedProjects">
        {{ item.itemNum }}
        <div v-for="tech in item.tech">
          {{ tech }}
        </div>
      </div>
    </div>

    <!-- Just modals below -->
    <UModal v-for="item in projects" v-model="isOpen[item.itemNum]">
      <div class="p-4">
        {{ item.name }}
      </div>
    </UModal>
  </div>
</template>
