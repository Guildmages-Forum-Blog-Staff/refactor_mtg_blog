<template>
  <div class="mb-6 flex items-stretch gap-4">
    <!-- Avatars left, full height -->
    <div class="flex shrink-0 gap-2">
      <a
        v-for="author in authors"
        :key="author.id"
        :href="`${base}/authors/${author.id}`"
        class="shrink-0"
      >
        <img
          :src="author.avatar"
          :alt="author.name"
          loading="lazy"
          class="h-14 w-14 rounded-full border border-gray-200 object-cover dark:border-gray-700"
        />
      </a>
    </div>

    <!-- Right column -->
    <div class="flex flex-col justify-center gap-1">
      <!-- Line 1: names -->
      <div class="flex flex-wrap gap-1">
        <a
          v-for="(author, i) in authors"
          :key="author.id"
          :href="`${base}/authors/${author.id}`"
          class="text-sm font-semibold text-gray-900 transition-colors hover:text-primary dark:text-gray-100"
          >{{ author.name }}<span v-if="i < authors.length - 1">,</span></a
        >
      </div>

      <!-- Line 2: date · categories · views -->
      <div
        class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-400"
      >
        <span>{{ date }}</span>
        <template v-if="categories.length">
          <span>·</span>
          <span v-for="(crumb, i) in categories" :key="crumb.cat" class="flex items-center gap-1">
            <a
              :href="`${base}/categories/${encodeURIComponent(crumb.cat)}/`"
              class="transition-colors hover:text-primary"
              >{{ crumb.label }}</a
            ><span v-if="i < categories.length - 1">&nbsp;·</span>
          </span>
        </template>
        <span>·</span>
        <span><span id="busuanzi_value_page_pv">-</span> 次閱讀</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

interface CategoryCrumb {
  label: string;
  cat: string;
}
interface Author {
  id: string;
  username: string;
  name: string;
  avatar: string;
  url?: string;
  intro: string[];
}
defineProps<{ authors: Author[]; date: string; categories: CategoryCrumb[] }>();
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

onMounted(() => {
  if (!document.getElementById('vercount-script')) {
    const script = document.createElement('script');
    script.id = 'vercount-script';
    script.src = 'https://cn.vercount.one/js';
    document.head.appendChild(script);
  }
});
</script>
