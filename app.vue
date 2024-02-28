<script setup>
    import '~/assets/css/main.css';
    const isOpen = ref(false)
</script>

<template>
  <div class="fullWidth">
    <UButton label="Tabs" class="burger" @click="isOpen = true" />

    
    <AppHeader class="mainHeader"/> <!-- Header (in components) --> 
    <NuxtPage /> <!-- Page Content (in pages) -->

    <USlideover side="left" v-model="isOpen">
      <div class="p-4 flex-1">  
        <!-- <Placeholder class="h-full" />  -->
      </div>
    </USlideover>
  </div>
</template>
