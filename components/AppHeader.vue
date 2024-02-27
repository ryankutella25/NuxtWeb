<script setup lang="ts">

    import '~/assets/css/header.css';

    const counter = ref(1)

    const tabTextActive = ref('tabTextActive')
    const tabText = ref('tabText')

</script>

<template>
  <div class="header">
        <div class="leftHeader">
          <div class="titleText">Ryan Kutella</div>
        </div>

        <div class="middleHeader">
            <NuxtLink @click="counter=1" :class="[counter == 1 ? tabTextActive : '', tabText]" to="/">Home</NuxtLink>
            <NuxtLink @click="counter=2" :class="[counter == 2 ? tabTextActive : '', tabText]" to="/projects">Projects</NuxtLink>
            <NuxtLink @click="counter=3" :class="[counter == 3 ? tabTextActive : '', tabText]" to="/projects">Projects</NuxtLink>
        </div>

        <div class="rightHeader">
          <Icon name="uil:github" color="#ddd" size="24px" style="margin-left: 20px;"/>
          <Icon name="uil:github" color="#ddd" size="24px" style="margin-left: 20px;"/>
          <Icon name="uil:github" color="#ddd" size="24px" style="margin-left: 20px;"/>

          <UButton color="cyan" variant="outline" style="margin-left: 20px;" to="/RyanKutellaResume.pdf">Resume</UButton>

        </div>
  </div>
</template>