<script setup lang="ts">
withDefaults(defineProps<{
  tag?: string;
  tone?: "default" | "gradient";
}>(), {
  tag: "section",
  tone: "default",
});

const baseClasses = "mx-auto w-[94%] max-w-6xl border border-white/10 p-4 backdrop-blur sm:p-6";
const toneClasses = {
  default: "bg-slate-950/60",
  gradient: "border-white/15 bg-gradient-to-br from-slate-950 via-slate-950/95 to-cyan-950/20",
};
</script>

<template>
  <component :is="tag" :class="[baseClasses, toneClasses[tone]]">
    <slot />
  </component>
</template>
