<template>
  <div class="mt-8 flex flex-col gap-6 border-t border-gray-200 pt-8 dark:border-gray-800">
    <div v-for="author in authors" :key="author.id" class="flex items-start gap-6">
      <a :href="`/authors/${author.id}`" class="shrink-0">
        <img
          :src="author.avatar"
          :alt="author.name"
          loading="lazy"
          class="h-20 w-20 rounded-full border-2 border-gray-200 object-cover dark:border-gray-700"
        />
      </a>
      <div class="flex min-w-0 flex-col gap-1">
        <a
          :href="`/authors/${author.id}`"
          class="text-xl font-bold text-gray-900 transition-colors hover:text-primary dark:text-gray-100"
        >
          {{ author.name }}
        </a>
        <div
          v-for="(line, i) in author.intro"
          :key="i"
          class="text-sm leading-relaxed text-gray-600 dark:text-gray-400"
          v-html="line"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Author {
  id: string;
  username: string;
  name: string;
  avatar: string;
  url?: string;
  intro: string[];
}
defineProps<{ authors: Author[] }>();
</script>
