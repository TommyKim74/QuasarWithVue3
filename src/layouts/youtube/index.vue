<template>
  <q-layout view="hHh Lpr lFf">
    <YoutubeHeader />
    <YoutubeDrawer />
    <YoutubeContents />
  </q-layout>
</template>

<script setup>
import YoutubeHeader from './YoutubeHeader.vue';
import YoutubeDrawer from './YoutubeDrawer.vue';
import YoutubeContents from './YoutubeContents.vue';
</script>

<style lang="scss" scoped></style>
