<script setup lang="ts">

    import '~/assets/css/mobileheader.css';

    const isOpen = ref(false)

</script>

<template>
  <div >
    <div class="mobileHeaderContainer">
        <UButton class="burger" aria-label="Open Sidebar" @click="isOpen = true" color="cyan" :padded="false" variant="ghost" ><Icon name="mingcute:menu-line"  color="#ddd" size="24px"/></UButton>

        <div style="color: #ddd">Ryan Kutella</div>
    </div>
    


    <USlideover class="slideInPage" side="left" v-model="isOpen">
        <div class="mobileTabs">
            <NuxtLink class="mobileTabText" aria-label="Go To Home Page" @click="isOpen = false" to="/">Home</NuxtLink>
            <NuxtLink class="mobileTabText" aria-label="Go To Projects Page" @click="isOpen = false" to="/projects">Projects</NuxtLink>
            <NuxtLink class="mobileTabText" aria-label="Go To About Me Page" @click="isOpen = false" to="/aboutme">About Me</NuxtLink>
        </div>

        <div class="mobileSocials">
          <UButton class="socialButton" aria-label="Go To My LinkedIn" @click="isOpen = false" :padded="true" variant="ghost" to="https://www.linkedin.com/in/ryankutella/" target="_blank"><Icon name="uil:linkedin" color="#ddd" size="24px"/>LinkedIn</UButton>
          <UButton class="socialButton" aria-label="Email Me" @click="isOpen = false" :padded="true" variant="ghost" to="mailto:ryankutella25@yahoo.com" target="_blank"><Icon name="ic:baseline-mail-outline" color="#ddd" size="24px"/>Email</UButton>
          <UButton class="socialButton" aria-label="Go To My Github" @click="isOpen = false" :padded="true" variant="ghost" to="https://github.com/ryankutella25" target="_blank"><Icon name="uil:github" color="#ddd" size="24px"/>GitHub</UButton>
          <UButton class="resumeButton" aria-label="See my Resume" @click="isOpen = false" color="cyan" variant="outline" to="/RyanKutella.pdf" target="_blank">Resume</UButton>
        </div>
    </USlideover>
  </div>
</template>