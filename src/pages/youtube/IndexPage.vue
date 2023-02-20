<template>
  <q-page padding>
    <article class="contents">
      <div class="row q-gutter-x-md q-gutter-y-xl">
        <div v-for="n in 16" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <article>
            <q-img
              :ratio="16 / 9"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            >
            </q-img>
            <div class="row q-gutter-x-sm q-mt-md q-ml-sm">
              <div class="col-auto">
                <q-avatar sizes="md">
                  <q-img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
              </div>
              <div class="col">
                <div class="text-subtitle1 text-weight-bold">
                  퀘이사 강의 | Quasar Lecture
                </div>
                <div class="text-caption text-grey q-mt-xs">
                  [Tommy] Kim Young Ho
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </article>
    <q-page-sticky expand position="top">
      <q-toolbar class="bg-white toolbar">
        <q-space />
        <q-btn
          v-for="title in filters"
          :key="title"
          :label="title"
          rounded
          color="primary"
          class="q-mx-xs"
          size="12px"
        ></q-btn>
        <q-space />
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const filters = ['전체', '실시간', '게임', '음악', '요리'];
</script>
<style scoped>
.contents {
  margin-top: 50px;
}
.toolbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
