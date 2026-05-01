<template>
  <nav class="toc sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto text-sm">
    <p v-if="title" class="mb-2 line-clamp-3 font-semibold leading-snug text-gray-900 dark:text-gray-100">
      {{ title }}
    </p>
    <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
      Contents
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
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

const props = defineProps<{ headings: Heading[]; title?: string }>();
const activeSlug = ref('');

function scrollTo(slug: string) {
  const el = document.getElementById(slug);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
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
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>
