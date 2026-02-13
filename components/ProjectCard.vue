<script setup lang="ts">
import type { Project } from "~/data/projects";

const props = withDefaults(defineProps<{
  project: Project;
  compact?: boolean;
  headingTag?: "h2" | "h3";
}>(), {
  compact: false,
  headingTag: "h3",
});

const emit = defineEmits<{
  (e: "open", project: Project): void;
}>();

const onOpen = () => emit("open", props.project);
const onLinkClick = (event: MouseEvent) => {
  event.stopPropagation();
};
</script>

<template>
  <article
    :class="compact
      ? 'group relative cursor-pointer rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/50'
      : 'group relative flex min-h-[340px] cursor-pointer flex-col rounded-2xl border border-white/15 bg-gradient-to-br from-slate-950 via-slate-950/95 to-cyan-950/20 p-5 shadow-lg shadow-black/30 backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/50 hover:shadow-cyan-500/10'"
    @click="onOpen"
  >
    <button
      v-if="compact"
      type="button"
      class="absolute right-3 top-3 inline-flex items-center rounded-md p-1 text-slate-300 transition hover:bg-white/10 hover:text-cyan-200"
      aria-label="Open Case Study"
      @click.stop="onOpen"
    >
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M7 3H3v4M13 3h4v4M7 17H3v-4M17 13v4h-4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <button
      v-if="!compact"
      type="button"
      class="absolute right-4 top-4 inline-flex items-center rounded-md p-1 text-slate-300 transition hover:bg-white/10 hover:text-cyan-200"
      aria-label="Show More"
      @click.stop="onOpen"
    >
      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M7 3H3v4M13 3h4v4M7 17H3v-4M17 13v4h-4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <component
      :is="headingTag"
      :class="compact ? 'pr-10 text-lg font-semibold text-slate-50' : 'pr-16 text-xl font-semibold text-slate-50'"
    >
      {{ project.name }}
    </component>

    <div v-if="!compact" class="mt-3 flex flex-wrap gap-2">
      <span class="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-300">{{ project.type }}</span>
      <span class="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-cyan-200">{{ project.tech.length }} technologies</span>
      <span class="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-300">{{ project.links.live || project.links.code || project.links.video ? "External links" : "Details only" }}</span>
    </div>

    <p :class="compact ? 'mt-2 text-sm leading-relaxed text-slate-300' : 'mt-4 flex-1 text-sm leading-relaxed text-slate-300'">
      {{ compact ? project.quickDesc : project.longDesc }}
    </p>

    <p class="mt-3 text-xs font-medium text-cyan-200/90">{{ project.tech.join(compact ? " • " : ", ") }}</p>

    <div class="mt-4 flex flex-wrap gap-2">
      <BaseButton v-if="compact" size="sm" variant="primary" @click="onOpen">Case Study</BaseButton>
      <BaseButton
        v-if="project.links.live"
        size="sm"
        :variant="compact ? 'ghost' : 'primary'"
        :href="project.links.live"
        target="_blank"
        rel="noreferrer"
        @click="onLinkClick"
      >Live</BaseButton>
      <BaseButton
        v-if="project.links.code"
        size="sm"
        variant="outline"
        :href="project.links.code"
        target="_blank"
        rel="noreferrer"
        @click="onLinkClick"
      >Code</BaseButton>
      <BaseButton
        v-if="project.links.video"
        size="sm"
        variant="outline"
        :href="project.links.video"
        target="_blank"
        rel="noreferrer"
        @click="onLinkClick"
      >Video</BaseButton>
    </div>
  </article>
</template>
