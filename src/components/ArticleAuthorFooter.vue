<template>
  <div class="flex flex-col gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
    <div
      v-for="author in authors"
      :key="author.id"
      class="flex gap-6 items-start"
    >
      <a :href="author.url || `/tags/${author.id}`" class="shrink-0">
        <img
          :src="author.avatar"
          :alt="author.name"
          class="w-20 h-20 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
        />
      </a>
      <div class="flex flex-col gap-1 min-w-0">
        <a
          :href="author.url || `/tags/${author.id}`"
          class="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-primary transition-colors"
        >
          {{ author.name }}
        </a>
        <div
          v-for="(line, i) in author.intro"
          :key="i"
          class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
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
