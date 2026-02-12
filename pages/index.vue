<script setup lang="ts">
import projects from "~/data/projects";
import type { Project } from "~/data/projects";

useHead({
  title: "Ryan Kutella's Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Ryan Kutella, a software developer focused on solving real-world problems with clean, fast products.",
    },
  ],
});


const currentProject = ref<Project>(projects[0]);
const modalActive = ref(false);

const featuredProjects = computed(() => {
  const configuredFeatured = projects.filter((item) => item.featured);
  if (configuredFeatured.length >= 3) {
    return configuredFeatured.slice(0, 3);
  }

  return projects
    .filter((item) => item.itemNum !== 0)
    .sort((a, b) => {
      const aHasLinks = a.links.live || a.links.code || a.links.video ? 1 : 0;
      const bHasLinks = b.links.live || b.links.code || b.links.video ? 1 : 0;
      return bHasLinks - aHasLinks;
    })
    .slice(0, 3);
});

const credibilityPoints = [
  "7+ years building software",
  "Computer Science @ University of Alabama",
  "Production experience in ecommerce and internal systems",
  "End-to-end development across frontend and backend",
  "Focused on performance, maintainability, and user impact",
  "Built and shipped projects from concept to deployment",
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
      <div class="absolute -left-36 top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div class="absolute right-0 top-72 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      <div class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    </div>

    <section class="relative mx-auto mt-4 grid items-start w-[94%] max-w-6xl gap-5 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:mt-6 sm:gap-6 sm:p-6 md:gap-8 md:p-10">
      <div class="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <NuxtImg
          src="/CitySkylineDesktop.webp"
          alt=""
          aria-hidden="true"
          sizes="100vw md:1200px"
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
          sizes="100vw md:1200px"
          class="h-full w-full object-cover opacity-90"
          />
        </div>
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Software Developer</p>
        <h1 class="mt-2 max-w-[22ch] text-xl font-semibold leading-tight text-slate-50 sm:mt-3 sm:max-w-[18ch] sm:text-4xl md:text-5xl">I love solving complex problems through critical thinking and software engineering.</h1>
        <p class="mt-3 max-w-[60ch] text-sm leading-relaxed text-slate-300 sm:text-base">
          I build clean, reliable software across frontend and backend with a focus on performance and real-world impact.
        </p>

        <div class="mt-5 flex flex-wrap items-center gap-3 sm:mt-7">
          <BaseButton to="/projects" variant="primary" :full="true">Explore Projects</BaseButton>
          <BaseButton to="/aboutme" variant="glass" :full="true">Learn More About Me</BaseButton>
        </div>

      </div>

      <div>
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3">
          <StatChip v-for="point in credibilityPoints" :key="point" :text="point" />
        </div>
      </div>
    </section>

    <SectionCard class="mt-6 rounded-3xl sm:mt-8">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 class="text-xl font-semibold text-slate-100 sm:text-2xl">Featured Projects</h2>
          <p class="mt-1 text-sm text-slate-300">Fast snapshot of impact, stack, and implementation quality.</p>
        </div>
        <BaseButton to="/projects" size="sm">All Projects</BaseButton>
      </div>

      <div class="mt-5 grid gap-4 md:grid-cols-3">
        <ProjectCard
          v-for="item in featuredProjects"
          :key="item.itemNum"
          :project="item"
          compact
          @open="toProjects"
        />
      </div>
    </SectionCard>

    <ProjectModal v-model="modalActive" :project="currentProject" />

  </main>
</template>
