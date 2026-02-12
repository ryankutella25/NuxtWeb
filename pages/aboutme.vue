<script setup lang="ts">
import { experiences, skillGroups } from "~/data/aboutData";

useHead({
  title: "About Ryan Kutella",
  meta: [
    {
      name: "description",
      content: "About Ryan Kutella, software developer focused on practical, high-quality products.",
    },
  ],
});
</script>

<template>
  <main class="relative overflow-hidden pb-12">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -left-36 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div class="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      <div class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    </div>

    <SectionCard class="mt-4 grid gap-6 rounded-3xl bg-slate-950/70 p-5 shadow-2xl shadow-black/30 sm:mt-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">About Me</p>
        <h1 class="mt-3 text-2xl font-semibold leading-tight text-slate-50 sm:text-4xl">Software Developer Focused on Practical Impact</h1>
        <p class="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          I am Ryan Kutella from Elk Grove Village, IL. I am currently pursuing Computer Science at the University of Alabama.
          I enjoy taking complex problems and turning them into clear, reliable software experiences.
        </p>
        <p class="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          I have been building software for over 7 years and have worked across web products, mobile experiences, and systems-level coursework.
          My priority is always the same: ship clean, useful solutions that are easy to maintain.
        </p>
        
        <div class="mt-5 grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
          <BaseButton
            href="https://github.com/ryankutella25"
            target="_blank"
            rel="noreferrer"
            variant="glass"
            size="sm"
            :full="true"
            aria-label="GitHub"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.21.68-.48v-1.67c-2.78.6-3.37-1.17-3.37-1.17-.46-1.15-1.11-1.46-1.11-1.46-.91-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.94.83.09-.64.35-1.08.64-1.33-2.22-.25-4.55-1.1-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.66-4.56 4.91.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0012 2z" />
            </svg>
            <span class="hidden sm:inline">GitHub</span>
          </BaseButton>
          <BaseButton
            href="https://www.linkedin.com/in/ryankutella/"
            target="_blank"
            rel="noreferrer"
            variant="glass"
            size="sm"
            :full="true"
            aria-label="LinkedIn"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.94 8.5H3.56v11h3.38v-11zM5.25 3A1.97 1.97 0 103.28 4.97 1.97 1.97 0 005.25 3zM20.44 12.56c0-3.31-1.77-4.85-4.13-4.85a3.57 3.57 0 00-3.24 1.78h-.05V8.5H9.64v11h3.38v-6.14c0-1.62.31-3.19 2.31-3.19 1.97 0 2 1.84 2 3.29v6.04h3.38l-.27-6.94z" />
            </svg>
            <span class="hidden sm:inline">LinkedIn</span>
          </BaseButton>
          <BaseButton
            href="mailto:ryankutella25@yahoo.com"
            variant="glass"
            size="sm"
            :full="true"
            aria-label="Email"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M4 6h16v12H4z" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 8l8 6 8-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="hidden sm:inline">Email</span>
          </BaseButton>
          <BaseButton
            href="/RyanKutella.pdf"
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="sm"
            :full="true"
            aria-label="Resume"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M7 3h7l5 5v13H7z" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 3v5h5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 13h6M10 17h6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="hidden sm:inline">Resume</span>
          </BaseButton>
        </div>
      </div>

      <div class="flex items-center justify-center md:justify-end">
        <div class="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900/70 p-4">
          <div class="h-80 w-full overflow-hidden rounded-xl">
            <NuxtImg
              src="/Headshot.webp"
              alt="Ryan headshot"
              sizes="100vw sm:420px"
              class="h-full w-full scale-[1.3] object-cover object-[center_30%]"
            />
          </div>
        </div>
      </div>
    </SectionCard>

    <SectionCard class="mt-6 rounded-2xl">
      <h2 class="text-xl font-semibold text-slate-100 sm:text-2xl">Technical Skills</h2>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <article v-for="group in skillGroups" :key="group.title" class="rounded-xl border border-white/10 bg-slate-900/70 p-4">
          <h3 class="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">{{ group.title }}</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <span v-for="item in group.items" :key="item" class="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300">{{ item }}</span>
          </div>
        </article>
      </div>
    </SectionCard>

    <SectionCard class="mt-6 rounded-2xl">
      <h2 class="text-xl font-semibold text-slate-100 sm:text-2xl">Experience</h2>
      <div class="mt-4 space-y-4">
        <article
          v-for="experience in experiences"
          :key="`${experience.role}-${experience.company}`"
          class="rounded-xl border border-white/10 bg-slate-900/70 p-5"
        >
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 class="text-lg font-semibold leading-tight text-slate-100 sm:text-xl">
                {{ experience.role }}
              </h3>
              <p class="mt-1 text-sm font-medium text-cyan-200">
                {{ experience.company }}
              </p>
            </div>
            <p class="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
              {{ experience.dateRange }}
            </p>
          </div>

          <ul class="mt-2 list-disc space-y-1 pl-5 marker:text-cyan-300">
            <li
              v-for="point in experience.bullets"
              :key="point"
              class="text-sm leading-relaxed text-slate-300"
            >
              {{ point }}
            </li>
          </ul>
        </article>
      </div>
    </SectionCard>
  </main>
</template>
