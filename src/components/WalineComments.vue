<template>
  <div ref="el" class="waline-container" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { init } from '@waline/client';
import '@waline/client/style';
import { HTML_LANG, type Lang } from '../i18n';

const props = defineProps<{ path: string; lang: Lang }>();
const el = ref<HTMLElement | null>(null);
let waline: { destroy: () => void } | null = null;

// Waline's `dark` option injects a <style> into <head> via VueUse useStyleTag.
// ClientRouter's head swap removes that <style> before this island unmounts, so
// a destroy() in onUnmounted hits `head.removeChild(null)` and throws. Tear down
// on astro:before-swap instead, while the <style> is still in the document.
function destroyWaline() {
  waline?.destroy();
  waline = null;
}

onMounted(() => {
  if (!el.value) return;
  document.addEventListener('astro:before-swap', destroyWaline, { once: true });
  waline = init({
    el: el.value,
    serverURL: 'https://mtg-blog-comment.vercel.app/',
    path: props.path,
    lang: HTML_LANG[props.lang],
    emoji: [],
    dark: 'html.dark',
  });
});

onUnmounted(() => {
  document.removeEventListener('astro:before-swap', destroyWaline);
  destroyWaline();
});
</script>
