<template>
  <div ref="sidebarRef" class="toc sticky top-20 flex flex-col gap-3">
    <nav class="max-h-[calc(100vh-9rem)] overflow-y-auto text-sm">
      <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        Contents
      </p>
      <p v-if="title" class="mb-3 line-clamp-3 text-base font-bold leading-snug text-gray-900 dark:text-gray-100">
        {{ title }}
      </p>
      <ul class="flex flex-col gap-1">
        <li
          v-for="heading in headings"
          :key="heading.slug"
          :style="{ paddingLeft: `${(heading.depth - 2) * 12}px` }"
        >
          <a
            :href="`#${heading.slug}`"
            :class="[
              'block border-l-2 py-0.5 pl-2 pr-2 leading-snug transition-colors',
              activeSlug === heading.slug
                ? 'border-primary font-medium text-primary'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200',
            ]"
            @click.prevent="scrollTo(heading.slug)"
          >
            {{ heading.text }}
          </a>
        </li>
      </ul>
    </nav>

    <button
      v-show="showBtn"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-opacity hover:opacity-80 dark:bg-dark-bg/90"
      @click="scrollToTop"
    >
      <svg class="absolute inset-0 h-10 w-10 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="2.5" class="text-gray-200 dark:text-gray-700" />
        <circle
          cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
          class="text-primary transition-[stroke-dashoffset] duration-100"
          :style="`stroke-dasharray: 125.66; stroke-dashoffset: ${125.66 * (1 - scrollProgress)}`"
        />
      </svg>
      <svg class="relative h-4 w-4 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

const props = defineProps<{ headings: Heading[]; title?: string }>();
const sidebarRef = ref<HTMLElement | null>(null);
const activeSlug = ref('');
const showBtn = ref(false);
const scrollProgress = ref(0);

function scrollTo(slug: string) {
  const el = document.getElementById(slug);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  showBtn.value = scrollTop >= 50;
  scrollProgress.value = docHeight > 0 ? scrollTop / docHeight : 0;
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const slugs = props.headings.map((h) => h.slug);
  const elements = slugs.map((s) => document.getElementById(s)).filter(Boolean) as HTMLElement[];

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSlug.value = entry.target.id;
          break;
        }
      }
    },
    { rootMargin: '-80px 0px -70% 0px', threshold: 0 },
  );

  elements.forEach((el) => observer!.observe(el));
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  observer?.disconnect();
  window.removeEventListener('scroll', onScroll);
});
</script>
