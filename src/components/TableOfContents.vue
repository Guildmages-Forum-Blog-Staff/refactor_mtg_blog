<template>
  <nav class="toc sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto text-sm">
    <p class="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-xs uppercase tracking-wider">
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
            'block py-0.5 pr-2 border-l-2 pl-2 transition-colors leading-snug',
            activeSlug === heading.slug
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300'
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

const props = defineProps<{ headings: Heading[] }>();
const activeSlug = ref('');

function scrollTo(slug: string) {
  const el = document.getElementById(slug);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const slugs = props.headings.map(h => h.slug);
  const elements = slugs.map(s => document.getElementById(s)).filter(Boolean) as HTMLElement[];

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSlug.value = entry.target.id;
          break;
        }
      }
    },
    { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
  );

  elements.forEach(el => observer!.observe(el));
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>
