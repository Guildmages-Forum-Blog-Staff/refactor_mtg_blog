<template>
  <div class="flex flex-wrap gap-3 items-center">
    <div
      v-for="author in authors"
      :key="author.id"
      class="flex items-center gap-2"
    >
      <a :href="author.url || `/tags/${author.id}`" class="shrink-0">
        <img
          :src="author.avatar"
          :alt="author.name"
          class="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-gray-700"
        />
      </a>
      <a
        :href="author.url || `/tags/${author.id}`"
        class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
      >
        {{ author.name }}
      </a>
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
