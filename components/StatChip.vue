<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <p class="flex min-h-[58px] min-w-0 items-center justify-center rounded-xl border border-white/20 bg-slate-950/80 px-2.5 py-1.5 text-center text-[11px] font-medium leading-snug text-slate-100 shadow-lg shadow-black/20 backdrop-blur-md sm:min-h-[64px] sm:px-3 sm:text-xs">
    {{ text }}
  </p>
</template>
