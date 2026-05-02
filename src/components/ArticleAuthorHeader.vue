<template>
  <div class="flex flex-wrap items-center gap-3">
    <div v-for="author in authors" :key="author.id" class="flex items-center gap-2">
      <a :href="`/authors/${author.id}`" class="shrink-0">
        <img
          :src="author.avatar"
          :alt="author.name"
          class="h-8 w-8 rounded-full border border-gray-200 object-cover dark:border-gray-700"
        />
      </a>
      <a
        :href="`/authors/${author.id}`"
        class="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-300"
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
