<script setup lang="ts">
import projects from "~/components/projects.js";

useHead({
  title: "Ryan Kutella's Portfolio",
  meta: [
    { name: "description", content: "Learn more about me, Ryan Kutella" },
  ],
});

const languagesSelected = ref<string[]>([]);
const searchQuery = ref("");
const languageDropdownOpen = ref(false);
const languageDropdownRef = ref<HTMLElement | null>(null);

const languages = [
  "Java",
  "C++",
  "C#",
  "JavaScript",
  "NoSQL",
  "SQL",
  "Vue",
  "Nuxt",
  "CSS",
  "Expo",
  "React Native",
  "Unity",
  "AI",
  "Firebase",
  "Firestore",
];

const modalActive = useModalActive();
const currentProject = useProjectOpen();

const sortedProjects = computed(() => {
  const selectedTech = new Set(languagesSelected.value);
  const q = searchQuery.value.trim().toLowerCase();

  return projects.filter((item) => {
    const matchesTech =
      selectedTech.size === 0 || item.tech?.some((tech: string) => selectedTech.has(tech));
    const matchesText =
      q.length === 0 ||
      item.name.toLowerCase().includes(q) ||
      item.quickDesc.toLowerCase().includes(q) ||
      item.longDesc.toLowerCase().includes(q) ||
      item.tech?.some((tech: string) => tech.toLowerCase().includes(q));

    return Boolean(matchesTech && matchesText);
  });
});

const languageFilterLabel = computed(() => {
  if (languagesSelected.value.length === 0) {
    return "All languages";
  }

  if (languagesSelected.value.length <= 2) {
    return languagesSelected.value.join(", ");
  }

  return `${languagesSelected.value.length} selected`;
});

const toggleLanguage = (language: string) => {
  if (languagesSelected.value.includes(language)) {
    languagesSelected.value = languagesSelected.value.filter((item) => item !== language);
    return;
  }

  languagesSelected.value = [...languagesSelected.value, language];
};

const clearLanguageFilters = () => {
  languagesSelected.value = [];
};

const seeMore = (itemNum: Number) => {
  currentProject.value = projects[itemNum.valueOf()];
  modalActive.value = true;
};

const onDocumentClick = (event: MouseEvent) => {
  const target = event.target as Node | null;
  if (!languageDropdownRef.value || !target) {
    return;
  }

  if (!languageDropdownRef.value.contains(target)) {
    languageDropdownOpen.value = false;
  }
};

const onEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    languageDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", onDocumentClick);
  document.addEventListener("keydown", onEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onDocumentClick);
  document.removeEventListener("keydown", onEscape);
});
</script>

<template>
  <main class="relative overflow-hidden pb-12">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -left-36 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div class="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      <div class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    </div>

    <section class="relative z-30 mx-auto mt-4 w-[94%] max-w-6xl rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:mt-6 sm:p-6">
      <h1 class="text-2xl font-semibold text-slate-100 sm:text-3xl">Projects</h1>
      <p class="mt-2 text-sm text-slate-300 sm:text-base">Browse by technologies or keywords to quickly find related projects.</p>

      <div class="mt-5 grid gap-3 md:grid-cols-[1fr_300px]">
        <label class="block">
          <span class="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Search</span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search projects"
            class="h-11 w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
          >
        </label>

        <div ref="languageDropdownRef" class="relative">
          <span class="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Technologies</span>
          <button
            type="button"
            class="group flex h-11 w-full items-center justify-between rounded-lg border border-white/15 bg-slate-900/80 px-3 text-left transition hover:border-cyan-300"
            @click="languageDropdownOpen = !languageDropdownOpen"
            :aria-expanded="languageDropdownOpen"
          >
            <p class="truncate pr-2 text-sm font-medium text-slate-100">{{ languageFilterLabel }}</p>
            <svg
              class="h-4 w-4 text-cyan-300 transition-transform"
              :class="languageDropdownOpen ? 'rotate-180' : ''"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>

          <div v-if="languageDropdownOpen" class="absolute z-[70] mt-2 w-full rounded-xl border border-white/10 bg-slate-950 p-3 shadow-2xl shadow-black/40">
            <div class="mb-2 flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Select Languages</span>
              <button
                type="button"
                class="text-xs font-semibold text-cyan-300 transition hover:text-cyan-200"
                @click="clearLanguageFilters"
              >
                Clear
              </button>
            </div>

            <div class="max-h-56 space-y-1 overflow-auto pr-1">
              <label
                v-for="language in languages"
                :key="language"
                class="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <input
                  type="checkbox"
                  class="h-4 w-4 rounded border-slate-500 bg-slate-900 text-cyan-300 focus:ring-cyan-300"
                  :checked="languagesSelected.includes(language)"
                  @change="toggleLanguage(language)"
                >
                <span>{{ language }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-3 text-sm text-slate-400">Showing {{ sortedProjects.length }} of {{ projects.length }} projects</p>
    </section>

    <section class="relative z-10 mx-auto mt-6 grid w-[94%] max-w-6xl gap-4 sm:grid-cols-2">
      <article
        v-for="item in sortedProjects"
        :key="item.itemNum"
        class="group relative flex min-h-[340px] cursor-pointer flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/50"
        @click="seeMore(item.itemNum)"
      >
        <button
          type="button"
          class="absolute right-4 top-4 inline-flex items-center rounded-md p-1 text-slate-300 transition hover:bg-white/10 hover:text-cyan-200"
          aria-label="Show More"
          @click.stop="seeMore(item.itemNum)"
        >
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M7 3H3v4M13 3h4v4M7 17H3v-4M17 13v4h-4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <h2 class="pr-16 text-xl font-semibold text-slate-50">{{ item.name }}</h2>

        <div class="mt-3 flex flex-wrap gap-2">
          <span class="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-300">{{ item.type }}</span>
          <span class="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-cyan-200">{{ item.tech?.length || 0 }} technologies</span>
          <span class="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-300">{{ item.goTo || item.git || item.video ? "External links" : "Details only" }}</span>
        </div>

        <p class="mt-4 flex-1 text-sm leading-relaxed text-slate-300">{{ item.longDesc }}</p>
        <p class="mt-3 text-xs font-medium text-cyan-200/90">{{ item.tech?.join(", ") }}</p>

        <div class="mt-4 flex flex-wrap gap-2">
          <a
            v-if="item.goTo"
            class="inline-flex items-center rounded-md bg-cyan-300 px-3 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            aria-label="Go To Project"
            :href="item.goTo"
            target="_blank"
            rel="noreferrer"
            @click.stop
          >Live</a>
          <a
            v-if="item.git"
            class="inline-flex items-center rounded-md border border-cyan-300 px-3 py-1.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
            aria-label="Go To Github"
            :href="item.git"
            target="_blank"
            rel="noreferrer"
            @click.stop
          >Code</a>
          <a
            v-if="item.video"
            class="inline-flex items-center rounded-md border border-cyan-300 px-3 py-1.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
            aria-label="Go To Video"
            :href="item.video"
            target="_blank"
            rel="noreferrer"
            @click.stop
          >Video</a>
        </div>
      </article>
    </section>

    <div v-if="modalActive" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close project details"
        class="absolute inset-0 bg-black/70"
        @click="modalActive = false"
      />
      <div class="relative z-10 flex h-[min(74vh,560px)] w-full max-w-3xl flex-col rounded-2xl border border-white/10 bg-slate-950 p-5 sm:p-6">
        <button
          type="button"
          aria-label="Close project details"
          class="absolute right-5 top-5 inline-flex items-center rounded-md p-0.5 text-slate-300 transition hover:bg-white/10 hover:text-cyan-200 sm:right-6 sm:top-6"
          @click="modalActive = false"
        >
          <svg class="h-7 w-7" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <h3 class="pr-14 text-2xl font-semibold leading-none text-slate-50 sm:pr-16 sm:text-3xl">{{ currentProject.name }}</h3>

        <div class="mt-5 flex-1 overflow-auto pr-1">
          <p class="text-base leading-relaxed text-slate-300 sm:text-lg">{{ currentProject.longDesc }}</p>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            v-if="currentProject.goTo"
            class="inline-flex items-center rounded-md bg-cyan-300 px-4 py-2 text-base font-semibold text-slate-950 transition hover:bg-cyan-200"
            aria-label="Go To Project"
            :href="currentProject.goTo"
            target="_blank"
            rel="noreferrer"
          >Live</a>
          <a
            v-if="currentProject.git"
            class="inline-flex items-center rounded-md border border-cyan-300 px-4 py-2 text-base font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
            aria-label="Go To Github"
            :href="currentProject.git"
            target="_blank"
            rel="noreferrer"
          >Code</a>
          <a
            v-if="currentProject.video"
            class="inline-flex items-center rounded-md border border-cyan-300 px-4 py-2 text-base font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
            aria-label="Go To Video"
            :href="currentProject.video"
            target="_blank"
            rel="noreferrer"
          >Video</a>
        </div>

        <p class="mt-5 text-sm font-semibold text-cyan-200 sm:text-base">Used: {{ currentProject.tech?.join(", ") }}</p>
      </div>
    </div>
  </main>
</template>
