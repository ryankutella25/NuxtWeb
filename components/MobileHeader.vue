<script setup lang="ts">
const isOpen = ref(false);
const route = useRoute();
const closeMenu = () => {
  isOpen.value = false;
};

const openExternal = (url: string) => {
  closeMenu();
  window.open(url, "_blank", "noopener,noreferrer");
};

const openEmail = (email: string) => {
  closeMenu();
  window.location.href = `mailto:${email}`;
};

const mobileNavLinkClass = (path: string) =>
  route.path === path
    ? "text-cyan-200 border-cyan-300/80 bg-cyan-300/5"
    : "text-slate-200 border-transparent hover:bg-white/10 hover:border-cyan-300/40";
</script>

<template>
  <div class="sticky top-0 z-50 md:hidden">
    <div class="flex h-14 items-center justify-between border-b border-white/10 bg-slate-950/90 px-4 backdrop-blur">
      <NuxtLink to="/" class="rounded-md px-2 py-1 text-xs font-semibold tracking-[0.16em] text-slate-100">RYAN KUTELLA</NuxtLink>
      <button
        type="button"
        aria-label="Open menu"
        class="rounded-md border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-200"
        @click="isOpen = true"
      >
        Menu
      </button>
    </div>

    <Transition name="mobile-menu">
      <div v-if="isOpen" class="fixed inset-0 z-50 md:hidden">
        <button
          type="button"
          aria-label="Close menu"
          class="absolute inset-0 bg-black/70"
          @click="closeMenu"
        />

        <aside class="mobile-menu-panel relative ml-auto flex h-full w-[84vw] max-w-80 flex-col overflow-y-auto border-l border-white/10 bg-slate-950 p-5">
        <div class="mb-6 flex items-center justify-between">
          <p class="text-xs font-semibold tracking-[0.16em] text-slate-300">NAVIGATION</p>
          <button
            type="button"
            aria-label="Close menu"
            class="rounded-md border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-200"
            @click="closeMenu"
          >Close</button>
        </div>

        <nav class="flex flex-col gap-2">
          <NuxtLink to="/" :class="['border-l-2 px-3 py-2 text-sm font-medium transition', mobileNavLinkClass('/')]" @click="closeMenu">Home</NuxtLink>
          <NuxtLink to="/projects" :class="['border-l-2 px-3 py-2 text-sm font-medium transition', mobileNavLinkClass('/projects')]" @click="closeMenu">Projects</NuxtLink>
          <NuxtLink to="/aboutme" :class="['border-l-2 px-3 py-2 text-sm font-medium transition', mobileNavLinkClass('/aboutme')]" @click="closeMenu">About</NuxtLink>
        </nav>

        <div class="mt-auto flex flex-col gap-2 pt-6">
          <button type="button" aria-label="GitHub" class="grid w-full grid-cols-[1.35rem_1fr] items-center gap-2 rounded-md px-3 py-2 text-left text-base font-medium text-slate-300 transition hover:bg-white/10" @click="openExternal('https://github.com/ryankutella25')">
            <svg class="h-[1.35rem] w-[1.35rem]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.21.68-.48v-1.67c-2.78.6-3.37-1.17-3.37-1.17-.46-1.15-1.11-1.46-1.11-1.46-.91-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.94.83.09-.64.35-1.08.64-1.33-2.22-.25-4.55-1.1-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.66-4.56 4.91.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0012 2z" />
            </svg>
            <span>GitHub</span>
          </button>
          <button type="button" aria-label="LinkedIn" class="grid w-full grid-cols-[1.35rem_1fr] items-center gap-2 rounded-md px-3 py-2 text-left text-base font-medium text-slate-300 transition hover:bg-white/10" @click="openExternal('https://www.linkedin.com/in/ryankutella/')">
            <svg class="h-[1.35rem] w-[1.35rem]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.94 8.5H3.56v11h3.38v-11zM5.25 3A1.97 1.97 0 103.28 4.97 1.97 1.97 0 005.25 3zM20.44 12.56c0-3.31-1.77-4.85-4.13-4.85a3.57 3.57 0 00-3.24 1.78h-.05V8.5H9.64v11h3.38v-6.14c0-1.62.31-3.19 2.31-3.19 1.97 0 2 1.84 2 3.29v6.04h3.38l-.27-6.94z" />
            </svg>
            <span>LinkedIn</span>
          </button>
          <button type="button" class="grid w-full grid-cols-[1.35rem_1fr] items-center gap-2 rounded-md px-3 py-2 text-left text-base font-medium text-slate-300 transition hover:bg-white/10" @click="openEmail('ryankutella25@yahoo.com')">
            <svg class="h-[1.35rem] w-[1.35rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M4 6h16v12H4z" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 8l8 6 8-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Email</span>
          </button>
          <button
            type="button"
            class="mx-1 inline-flex w-[calc(100%-1rem)] items-center justify-start rounded-md border border-cyan-300/80 bg-cyan-300/10 px-3 py-2 text-base font-medium text-cyan-200"
            @click="openExternal('/RyanKutella.pdf')"
          >Resume</button>
        </div>
        </aside>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 220ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-active .mobile-menu-panel,
.mobile-menu-leave-active .mobile-menu-panel {
  transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-menu-enter-from .mobile-menu-panel,
.mobile-menu-leave-to .mobile-menu-panel {
  transform: translateX(20px);
}
</style>
