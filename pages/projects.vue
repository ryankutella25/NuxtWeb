<script setup lang="ts">
import "~/assets/css/projects.css";
import projects from "~/components/projects.js";

//languages selected holds value from languages, used in sorting
const languagesSelected = ref([]);
const languages = ["Java", "C++", "C#", "JavaScript", "NoSQL", "SQL", "Vue", "Nuxt", "CSS", "Expo", "React Native", "Unity", "AI", "Firebase"];

//modal stuff below
const modalActive = useModalActive();
const currentProject = useProjectOpen();

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
          // console.log(item.tech[i] + " and " + languagesSelected.value[j]);
          if (item.tech[i] == languagesSelected.value[j]) {
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

const seeMore = (itemNum: Number) => {
  currentProject.value = projects[itemNum.valueOf()];
  modalActive.value = true;
}

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
        :popper="{ offsetDistance: 0 }"
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
        :popper="{ offsetDistance: 0}"
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
        <UButton class="expand" aria-label="Show More" variant="ghost" :padded="false"><Icon @click="seeMore(item.itemNum)" name="flowbite:expand-solid" color="#bbb" size="25px"/></UButton>
        <div style="flex: 1;" class="projectItemTitle">{{ item.name }}</div>
        <div style="flex: 5" class="projectItemText">{{ item.longDesc }}</div>
        <div style="flex: 1" class="projectItemText">Used: {{ item.tech?.join(", ") }}</div>
        <div>
          <UButton class="projectButton" aria-label="Go To Project" v-if="item.goTo!=''" :to="item.goTo" target="_blank" variant="solid" color="cyan" @click="">Go To</UButton>
          <UButton class="projectButton" aria-label="Go To Github" v-if="item.git!=''" :to="item.git" target="_blank" variant="outline" color="cyan" @click="">Git</UButton>
          <UButton class="projectButton" aria-label="Go To Video" v-if="item.video!=''" :to="item.video" target="_blank" variant="outline" color="cyan" @click="">Video</UButton>
        </div>
      </div>
    </div>

    <!-- Just project child below -->
    <UModal v-model="modalActive">
        <div class="modal">
          <UButton variant="ghost" aria-label="Show More" class="modalClose" :padded="false"><Icon @click="modalActive=false" name="material-symbols:close" color="#bbb" size="25px"/></UButton>
          <div style="flex: 1;" class="modalItemTitle">{{ currentProject.name }}</div>
          <div style="flex: 5" class="modalItemText">{{ currentProject.longDesc }}</div>
          <div style="flex: 1" class="modalItemText">Used: {{ currentProject.tech?.join(", ") }}</div>
          <div>
            <UButton class="projectButton" aria-label="Go To Project" v-if="currentProject.goTo!=''" :to="currentProject.goTo" target="_blank" variant="solid" color="cyan" @click="">Go To</UButton>
            <UButton class="projectButton" aria-label="Go To Github" v-if="currentProject.git!=''" :to="currentProject.git" target="_blank" variant="outline" color="cyan" @click="">Git</UButton>
            <UButton class="projectButton" aria-label="Go To Video" v-if="currentProject.video!=''" :to="currentProject.video" target="_blank" variant="outline" color="cyan" @click="">Vid</UButton>
          </div>
        </div>
    </UModal>
    <!-- <NuxtPage/> -->
  </div>
</template>
