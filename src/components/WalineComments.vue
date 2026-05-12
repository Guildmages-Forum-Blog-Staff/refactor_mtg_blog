<template>
  <div ref="el" class="waline-container"/>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { init } from '@waline/client';
import '@waline/client/style';

const props = defineProps<{ path: string }>();
const el = ref<HTMLElement | null>(null);
let waline: { destroy: () => void } | null = null;

onMounted(() => {
  if (!el.value) return;
  waline = init({
    el: el.value,
    serverURL: 'https://mtg-blog-comment.vercel.app/',
    path: props.path,
    lang: 'zh-TW',
    emoji: [],
    dark: 'html.dark',
  });
});

onUnmounted(() => {
  waline?.destroy();
});
</script>
