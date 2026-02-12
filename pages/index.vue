<script setup lang="ts">
import projects from "~/data/projects";
import type { Project } from "~/data/projects";
import { defineAsyncComponent } from "vue";

useHead({
  title: "Ryan Kutella's Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Ryan Kutella, a software developer focused on solving real-world problems with clean, fast products.",
    },
  ]
});


const currentProject = ref<Project>(projects[0]);
const modalActive = ref(false);
const AsyncProjectModal = defineAsyncComponent(() => import("~/components/ProjectModal.vue"));

const featuredProjects = (() => {
  const configuredFeatured = projects.filter((item) => item.featured);
  if (configuredFeatured.length >= 3) {
    return configuredFeatured.slice(0, 3) as Project[];
  }

  return projects
    .filter((item) => item.itemNum !== 0)
    .sort((a, b) => {
      const aHasLinks = a.links.live || a.links.code || a.links.video ? 1 : 0;
      const bHasLinks = b.links.live || b.links.code || b.links.video ? 1 : 0;
      return bHasLinks - aHasLinks;
    })
    .slice(0, 3) as Project[];
})();

const credibilityPoints = [
  "Software Developer Co-op @ Mercedes Benz U.S.",
  "Computer Science @ University of Alabama",
  "IT Intern @ Abbott Rubber Company",
  "7+ years building software",
  "Experience building full-stack production applications",
  "Strong collaboration, ownership, and communication skills",
];

const toProjects = (itemNum: Project["itemNum"]) => {
  const selectedProject = projects.find((item) => item.itemNum === itemNum);
  if (!selectedProject) {
    return;
  }

  currentProject.value = selectedProject;
  modalActive.value = true;
};

</script>

<template>
  <main class="relative overflow-hidden pb-12">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -left-36 top-16 hidden h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl sm:block" />
      <div class="absolute right-0 top-72 hidden h-80 w-80 rounded-full bg-teal-400/10 blur-3xl sm:block" />
      <div class="absolute bottom-0 left-1/3 hidden h-72 w-72 rounded-full bg-blue-500/10 blur-3xl sm:block" />
    </div>

    <section class="relative mx-auto mt-4 grid items-start w-[94%] max-w-6xl gap-5 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-lg shadow-black/20 sm:mt-6 sm:gap-6 sm:p-6 sm:shadow-2xl sm:shadow-black/30 sm:backdrop-blur md:gap-8 md:p-10">
      <div class="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <NuxtImg
          src="/CitySkylineDesktop.webp"
          alt=""
          aria-hidden="true"
          width="1200"
          height="675"
          loading="eager"
          decoding="async"
          class="h-full w-full object-cover opacity-90"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
      </div>

      <div>
        <div class="mb-3 overflow-hidden rounded-xl border border-white/10 lg:hidden">
          <NuxtImg
            src="/CitySkylineMobile.webp"
            alt=""
            aria-hidden="true"
            width="661"
            height="250"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            class="h-full w-full object-cover opacity-90"
          />
        </div>
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Software Developer</p>
        <h1 class="mt-2 max-w-[26ch] text-xl font-semibold leading-tight text-slate-50 sm:mt-3 sm:max-w-[26ch] sm:text-4xl md:text-5xl">I love solving complex problems through critical thinking and software engineering.</h1>


        <div class="mt-5 flex flex-wrap items-center gap-3 sm:mt-7">
          <BaseButton to="/projects" variant="primary" :full="true">Explore Projects</BaseButton>
          <BaseButton to="/aboutme" variant="glass" :full="true">Learn More About Me</BaseButton>
        </div>

      </div>

      <div>
        <div v-once class="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3">
          <StatChip v-for="point in credibilityPoints" :key="point" :text="point" />
        </div>
      </div>
    </section>

    <LazyHomeFeaturedProjects
      class="mt-6 rounded-3xl sm:mt-8 [content-visibility:auto] [contain-intrinsic-size:1px_800px]"
      :featured-projects="featuredProjects"
      @open="toProjects"
    />

    <AsyncProjectModal v-if="modalActive" v-model="modalActive" :project="currentProject" />

  </main>
</template>
