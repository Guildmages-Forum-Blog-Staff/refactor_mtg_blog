<template>
  <div ref="sidebarRef" class="toc sticky top-20 flex flex-col gap-3">
    <nav class="max-h-[calc(100vh-9rem)] overflow-y-auto text-sm">
      <p
        class="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400"
      >
        Contents
      </p>
      <p
        v-if="title"
        class="mb-3 line-clamp-3 text-base leading-snug font-bold text-gray-900 dark:text-gray-100"
      >
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
              'block border-l-2 py-0.5 pr-2 pl-2 leading-snug transition-colors',
              activeSlug === heading.slug
                ? 'border-primary text-primary font-medium'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200',
            ]"
            @click.prevent="scrollTo(heading.slug)"
          >
            {{ heading.text }}
          </a>
        </li>
      </ul>
    </nav>
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
