<script setup lang="ts">
const route = useRoute();

const navLinkClass = (path: string) =>
  route.path === path
    ? "text-cyan-200 border-cyan-300"
    : "text-slate-300 border-transparent hover:text-cyan-300 hover:border-cyan-300/60";
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
    <div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
      <NuxtLink
        to="/"
        class="rounded-md px-2 py-1 text-sm font-semibold tracking-[0.18em] text-slate-100 transition hover:bg-white/10 hover:text-cyan-300"
      >
        RYAN KUTELLA
      </NuxtLink>

      <nav class="hidden items-center gap-1 md:flex">
        <NuxtLink to="/" :class="['border-b-2 px-3 py-2 text-sm font-medium transition', navLinkClass('/')]">Home</NuxtLink>
        <NuxtLink to="/projects" :class="['border-b-2 px-3 py-2 text-sm font-medium transition', navLinkClass('/projects')]">Projects</NuxtLink>
        <NuxtLink to="/aboutme" :class="['border-b-2 px-3 py-2 text-sm font-medium transition', navLinkClass('/aboutme')]">About</NuxtLink>
      </nav>

      <div class="hidden items-center gap-2 lg:flex">
        <a
          href="https://github.com/ryankutella25"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          class="inline-flex items-center rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-cyan-300"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.21.68-.48v-1.67c-2.78.6-3.37-1.17-3.37-1.17-.46-1.15-1.11-1.46-1.11-1.46-.91-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.94.83.09-.64.35-1.08.64-1.33-2.22-.25-4.55-1.1-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.66-4.56 4.91.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0012 2z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ryankutella/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          class="inline-flex items-center rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-cyan-300"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.94 8.5H3.56v11h3.38v-11zM5.25 3A1.97 1.97 0 103.28 4.97 1.97 1.97 0 005.25 3zM20.44 12.56c0-3.31-1.77-4.85-4.13-4.85a3.57 3.57 0 00-3.24 1.78h-.05V8.5H9.64v11h3.38v-6.14c0-1.62.31-3.19 2.31-3.19 1.97 0 2 1.84 2 3.29v6.04h3.38l-.27-6.94z" />
          </svg>
        </a>
        <a
          href="/RyanKutella.pdf"
          target="_blank"
          rel="noreferrer"
          class="ml-2 rounded-md border border-cyan-300/80 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300/20"
        >Resume</a>
      </div>
    </div>
  </header>
</template>
