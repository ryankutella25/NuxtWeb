<script setup lang="ts">

    import '~/assets/css/mobileheader.css';

    const isOpen = ref(false)

</script>

<template>
  <div >
    <div class="mobileHeaderContainer">
        <UButton label="Tabs" class="burger" @click="isOpen = true" />

        <div class="rightHeader">Ryan Kutella</div>
    </div>
    


    <USlideover class="slideInPage" side="left" v-model="isOpen">
        <div class="mobileTabs">
            <NuxtLink class="mobileTabText" to="/">Home</NuxtLink>
            <NuxtLink class="mobileTabText" to="/projects">Projects</NuxtLink>
            <NuxtLink class="mobileTabText" to="/aboutme">About Me</NuxtLink>
        </div>

        <div class="mobileSocials">
          <UButton class="socialButton" :padded="false" variant="ghost" color="white" to="https://www.linkedin.com/in/ryankutella/" target="_blank"><Icon name="uil:linkedin" color="#ddd" size="24px"/>LinkedIn</UButton>
          <UButton class="socialButton" :padded="false" variant="ghost" color="white" to="mailto:ryankutella25@yahoo.com" target="_blank"><Icon name="ic:baseline-mail-outline" color="#ddd" size="24px"/>Email</UButton>
          <UButton class="socialButton" :padded="false" variant="ghost" color="white" to="https://github.com/ryankutella25" target="_blank"><Icon name="uil:github" color="#ddd" size="24px"/>GitHub</UButton>
          <UButton class="socialButton" color="cyan" variant="outline" to="/RyanKutellaResume.pdf" target="_blank">Resume</UButton>
        </div>
    </USlideover>
  </div>
</template>