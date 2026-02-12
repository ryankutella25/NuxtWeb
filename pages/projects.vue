<script setup lang="ts">
import projects from "~/data/projects";
import type { Project } from "~/data/projects";

useHead({
  title: "Ryan Kutella's Portfolio",
  meta: [
    { name: "description", content: "Explore Ryan Kutella's software projects." },
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

const modalActive = ref(false);
const currentProject = ref<Project>(projects[0]);

const sortedProjects = computed(() => {
  const selectedTech = new Set(languagesSelected.value.map((item) => item.toLowerCase()));
  const q = searchQuery.value.trim().toLowerCase();

  return projects.filter((item) => {
    const matchesTech =
      selectedTech.size === 0 || item.tech.some((tech) => selectedTech.has(tech.toLowerCase()));
    const matchesText = q.length === 0 || item.searchableText.includes(q);

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

const seeMore = (itemNum: Project["itemNum"]) => {
  const selectedProject = projects.find((item) => item.itemNum === itemNum);
  if (!selectedProject) {
    return;
  }

  currentProject.value = selectedProject;
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

    <SectionCard tone="gradient" class="relative z-30 mt-4 rounded-3xl p-5 shadow-2xl shadow-black/30 sm:mt-6">
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
    </SectionCard>

    <section class="relative z-10 mx-auto mt-6 grid w-[94%] max-w-6xl gap-4 sm:grid-cols-2">
      <ProjectCard
        v-for="item in sortedProjects"
        :key="item.itemNum"
        :project="item"
        @open="seeMore"
      />
    </section>

    <ProjectModal v-model="modalActive" :project="currentProject" />
  </main>
</template>
