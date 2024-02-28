<script setup lang="ts">

    import '~/assets/css/projects.css';

    //items are project items in carousel
    const items = [{}]

    for(var i = 0; i < 10000; i++){
      items.push({});
    }

</script>

<template>
  <div class="projectPageContainer">
    <div class="background" ><span v-for="item in items">Ryan Kutella </span></div>
    <!-- This page correctly has only one single root element -->
    <div class="projectContainer">
      <div class="card">

      </div>
      <div class="card">
        
      </div>
      <div class="card">
        
      </div>
      <div class="card">

      </div>
      <div class="card">
        
      </div>
      <div class="card">
        
      </div>
    </div>
  </div>
</template>