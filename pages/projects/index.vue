<script setup lang="ts">

    import '~/assets/css/projects.css';

    import projects from "~/components/projects.js";

    //items are project items in carousel
    const items = [{}]

    for(var i = 0; i < 10000; i++){
      items.push({});
    }

</script>

<template>
  <div class="projectPageContainer">
    <div class="background" ><span v-for="item in items" style="font-weight: bolder;"> &lt;Ryan_Kutella&gt; </span></div>
    <!-- This page correctly has only one single root element -->
    <div class="projectContainer">
      <div class="card" v-for="item in projects">

      </div>
    </div>
  </div>
</template>