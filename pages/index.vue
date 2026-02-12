<script setup lang="ts">
import projects from "~/components/projects.js";

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

const currentProject = useProjectOpen();
const modalActive = useModalActive();

const featuredProjects = computed(() =>
  projects
    .filter((item) => item.itemNum !== 0)
    .sort((a, b) => Number(Boolean(b.goTo || b.git || b.video)) - Number(Boolean(a.goTo || a.git || a.video)))
    .slice(0, 3),
);

const credibilityPoints = [
  "7+ years building software",
  "Computer Science @ University of Alabama",
  "Production experience in ecommerce and internal systems",
];

const focusAreas = ["Web Applications", "Mobile Experiences", "System Design", "Performance and UX"];

const toProjects = (itemNum: Number) => {
  currentProject.value = projects[itemNum.valueOf()];
  modalActive.value = true;

  return navigateTo({ path: "/projects" });
};
</script>

<template>
  <main class="relative overflow-hidden pb-12">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -left-36 top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div class="absolute right-0 top-72 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      <div class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    </div>

    <section class="mx-auto mt-4 grid w-[94%] max-w-6xl gap-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:mt-6 sm:p-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:p-10">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Software Developer</p>
        <h1 class="mt-3 max-w-[18ch] text-2xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">I solve hard problems with thoughtful software.</h1>
        <p class="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          I build products end-to-end, from user-facing interfaces to backend systems. My work focuses on clean architecture,
          practical UX decisions, and measurable impact.
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-3">
          <NuxtLink to="/projects" class="inline-flex w-full items-center justify-center rounded-lg bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-200 sm:w-auto">Explore Projects</NuxtLink>
          <a href="/RyanKutella.pdf" target="_blank" rel="noreferrer" class="inline-flex w-full items-center justify-center rounded-lg border border-cyan-300/80 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10 sm:w-auto">View Resume</a>
          <NuxtLink to="/aboutme" class="inline-flex w-full items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10 sm:w-auto">About Me</NuxtLink>
        </div>

        <div class="mt-8 grid gap-3 sm:grid-cols-3">
          <p v-for="point in credibilityPoints" :key="point" class="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-slate-300">
            {{ point }}
          </p>
        </div>
      </div>

      <div class="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4 sm:p-5">
        <img
          src="/CitySkylineDesktop.webp"
          alt="City skyline background"
          class="h-48 w-full rounded-xl border border-white/10 object-cover opacity-90"
        >
        <div class="mt-4">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Current Focus</p>
          <div class="mt-2 flex flex-wrap gap-2">
            <span v-for="focus in focusAreas" :key="focus" class="rounded-full border border-white/15 bg-white/[0.02] px-3 py-1 text-xs font-medium text-slate-300">{{ focus }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto mt-6 w-[94%] max-w-6xl rounded-2xl border border-white/10 bg-slate-950/60 p-4 backdrop-blur sm:mt-8 sm:p-6">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 class="text-xl font-semibold text-slate-100 sm:text-2xl">Featured Projects</h2>
          <p class="mt-1 text-sm text-slate-300">Fast snapshot of impact, stack, and implementation quality.</p>
        </div>
        <NuxtLink to="/projects" class="rounded-md border border-white/20 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10">All Projects</NuxtLink>
      </div>

      <div class="mt-5 grid gap-4 md:grid-cols-3">
        <article v-for="item in featuredProjects" :key="item.itemNum" class="group rounded-xl border border-white/10 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:border-cyan-300/50">
          <h3 class="text-lg font-semibold text-slate-50">{{ item.name }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-300">{{ item.quickDesc }}</p>
          <p class="mt-3 text-xs font-medium text-cyan-200/90">{{ item.tech?.join(" • ") }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <button type="button" class="rounded-md bg-cyan-300 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-cyan-200" @click="toProjects(item.itemNum)">Case Study</button>
            <a v-if="item.goTo" :href="item.goTo" target="_blank" rel="noreferrer" class="rounded-md border border-cyan-300/80 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300/10">Live</a>
            <a v-else-if="item.git" :href="item.git" target="_blank" rel="noreferrer" class="rounded-md border border-cyan-300/80 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300/10">Code</a>
          </div>
        </article>
      </div>
    </section>

  </main>
</template>
