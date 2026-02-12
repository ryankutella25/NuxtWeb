<script setup lang="ts">
type ButtonVariant = "primary" | "glass" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

const props = withDefaults(defineProps<{
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
}>(), {
  type: "button",
  variant: "ghost",
  size: "md",
  full: false,
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-200",
  glass: "border border-white/20 bg-slate-950/80 text-slate-100 shadow-lg shadow-black/20 backdrop-blur-md hover:bg-slate-900/80",
  outline: "border border-cyan-300/80 bg-cyan-300/10 text-cyan-200 hover:bg-cyan-300/20",
  ghost: "border border-white/20 text-slate-200 hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-semibold",
  md: "px-5 py-2.5 text-sm font-semibold",
};

const classes = computed(() => [
  "inline-flex items-center justify-center gap-2 rounded-lg transition duration-300 ease-out hover:-translate-y-0.5",
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.full ? "w-full sm:w-auto" : "",
]);

const onClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes" @click="onClick">
    <slot />
  </NuxtLink>
  <a v-else-if="href" :href="href" :target="target" :rel="rel" :class="classes" @click="onClick">
    <slot />
  </a>
  <button v-else :type="type" :class="classes" @click="onClick">
    <slot />
  </button>
</template>
