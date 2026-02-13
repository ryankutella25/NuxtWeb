<script setup lang="ts">
import type { Project } from "~/data/projects";

const props = defineProps<{
  modelValue: boolean;
  project: Project | null;
}>();

// Emit is how we send info from child to parent
const emit = defineEmits<{(e: "update:modelValue", value: boolean): void;}>();

// Tell parent to close modal
const close = () => emit("update:modelValue", false);
</script>

<template>
  <div v-if="modelValue && project" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <button
      type="button"
      aria-label="Close project details"
      class="absolute inset-0 bg-black/70"
      @click="close"
    ></button>
    <div class="relative z-10 flex h-[min(74vh,560px)] w-full max-w-3xl flex-col rounded-2xl border border-white/10 bg-slate-950 p-5 sm:p-6">
      <button
        type="button"
        aria-label="Close project details"
        class="absolute right-5 top-5 inline-flex items-center rounded-md p-0.5 text-slate-300 transition hover:bg-white/10 hover:text-cyan-200 sm:right-6 sm:top-6"
        @click="close"
      >
        <svg class="h-7 w-7" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M5 5l10 10M15 5L5 15" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <h3 class="pr-14 text-2xl font-semibold leading-none text-slate-50 sm:pr-16 sm:text-3xl">{{ project.name }}</h3>

      <div class="mt-5 flex-1 overflow-auto pr-1">
        <p class="text-base leading-relaxed text-slate-300 sm:text-lg">{{ project.longDesc }}</p>
      </div>

      <div class="mt-6 flex flex-wrap gap-3">
        <BaseButton
          v-if="project.links.live"
          variant="primary"
          :href="project.links.live"
          target="_blank"
          rel="noreferrer"
        >Live</BaseButton>
        <BaseButton
          v-if="project.links.code"
          variant="outline"
          :href="project.links.code"
          target="_blank"
          rel="noreferrer"
        >Code</BaseButton>
        <BaseButton
          v-if="project.links.video"
          variant="outline"
          :href="project.links.video"
          target="_blank"
          rel="noreferrer"
        >Video</BaseButton>
      </div>

      <p class="mt-5 text-sm font-semibold text-cyan-200 sm:text-base">Used: {{ project.tech.join(", ") }}</p>
    </div>
  </div>
</template>
