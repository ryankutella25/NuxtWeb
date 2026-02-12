<script setup lang="ts">
import type { Project } from "~/data/projects";

defineProps<{
  featuredProjects: Project[];
}>();

const emit = defineEmits<{
  (e: "open", itemNum: number): void;
}>();
</script>

<template>
  <SectionCard>
    <div class="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h2 class="text-xl font-semibold text-slate-100 sm:text-2xl">Featured Projects</h2>
      </div>
      <BaseButton to="/projects" size="sm">All Projects</BaseButton>
    </div>

    <div class="mt-5 grid gap-4 md:grid-cols-3">
      <ProjectCard
        v-for="item in featuredProjects"
        :key="item.itemNum"
        :project="item"
        compact
        @open="(itemNum) => emit('open', itemNum)"
      />
    </div>
  </SectionCard>
</template>
