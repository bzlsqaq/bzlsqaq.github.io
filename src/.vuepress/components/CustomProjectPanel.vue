<template>
  <div class="project">
    <h3>{{ project.name }}</h3>
    <Markdown v-if="project.desc" :content="project.desc" />
  </div>
</template>

<script setup lang="ts">
import { Markdown } from "vuepress-theme-hope/components";
defineProps<{ project: Record<string, any> }>();
</script>
