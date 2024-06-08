<script setup lang="ts">

    import '~/assets/css/header.css';

</script>

<template>
  <div class="header">
        <div class="leftHeader">
          <div class="titleText">Ryan Kutella</div>
        </div>

        <div class="middleHeader">
            <NuxtLink class="tabText" aria-label="Home Page" to="/">Home</NuxtLink>
            <NuxtLink class="tabText" aria-label="Projects Page" to="/projects">Projects</NuxtLink>
            <NuxtLink class="tabText" aria-label="About Me Page" to="/aboutme">About Me</NuxtLink>
        </div>

        <div class="rightHeader">
          <UButton aria-label="Go To My LinkedIn" :padded="false" variant="ghost" style="margin-left: 20px;"  to="https://www.linkedin.com/in/ryankutella/" target="_blank"><Icon name="uil:linkedin" color="#ddd" to="https://www.linkedin.com/in/ryankutella/" size="24px"/></UButton>
          <UButton aria-label="Send Me An Email" :padded="false" variant="ghost" style="margin-left: 20px;"  to="mailto:ryankutella25@yahoo.com" target="_blank"><Icon name="ic:baseline-mail-outline" color="#ddd" size="24px"/></UButton>
          <UButton aria-label="Go To My Github" :padded="false" variant="ghost" style="margin-left: 20px;"  to="https://github.com/ryankutella25" target="_blank"><Icon name="uil:github" color="#ddd" size="24px"/></UButton>
          <UButton aria-label="See My Resume" color="cyan" variant="outline" style="margin-left: 20px;" to="/RyanKutella.pdf" target="_blank">Resume</UButton>
        </div>
  </div>
</template>