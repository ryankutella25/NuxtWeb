<script setup>
    import '~/assets/css/main.css';

</script>

<template>
  <div class="fullWidth">

    <MobileHeader class="mobileHeader"/>
    <MainHeader class="mainHeader"/> <!-- Header (in components) --> 
    <NuxtPage style="height: 100%;"/> <!-- Page Content (in pages) -->

  </div>
</template>
