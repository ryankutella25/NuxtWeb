<script setup lang="ts">

    import '~/assets/css/header.css';

</script>

<template>
  <div class="header">
        <div class="leftHeader">
          <div class="titleText">Ryan Kutella</div>
        </div>

        <div class="middleHeader">
            <NuxtLink class="tabText" to="/">Home</NuxtLink>
            <NuxtLink class="tabText" to="/projects">Projects</NuxtLink>
            <NuxtLink class="tabText" to="/aboutme">About Me</NuxtLink>
        </div>

        <div class="rightHeader">
          <UButton :padded="false" variant="ghost" style="margin-left: 20px;"  to="https://www.linkedin.com/in/ryankutella/" target="_blank"><Icon name="uil:linkedin" color="#ddd" size="24px"/></UButton>
          <UButton :padded="false" variant="ghost" style="margin-left: 20px;"  to="mailto:ryankutella25@yahoo.com" target="_blank"><Icon name="ic:baseline-mail-outline" color="#ddd" size="24px"/></UButton>
          <UButton :padded="false" variant="ghost" style="margin-left: 20px;"  to="https://github.com/ryankutella25" target="_blank"><Icon name="uil:github" color="#ddd" size="24px"/></UButton>

          <UButton color="cyan" variant="outline" style="margin-left: 20px;" to="/RyanKutellaResume.pdf" target="_blank">Resume</UButton>

        </div>
  </div>
</template>