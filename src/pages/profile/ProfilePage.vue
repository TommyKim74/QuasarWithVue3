<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-auto q-py-md">
        <q-avatar size="150px">
          <q-img src="https://cdn.quasar.dev/img/avatar2.jpg"></q-img>
        </q-avatar>
      </div>
      <div class="text-black col-grow column justify-between">
        <div class="row items-center">
          <span class="text-h6 text-weight-bold">helinlee.gram</span>
          <q-space></q-space>
          <div class="q-gutter-x-sm">
            <q-btn outline>프로필 편집1</q-btn>
            <q-btn outline>프로필 편집2</q-btn>
            <q-btn outline>프로필 편집3</q-btn>
            <q-btn flat color="secondary" icon="more_horiz"></q-btn>
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시글 238</span>
          <span>팔로워 238</span>
          <span>팔로우 238</span>
        </div>
        <div>
          <div>헬린이</div>
          <div>ㄴㅇㄹㄴㄹㄴ</div>
          <div>ㄴㄹㄴㅇㄹ</div>
        </div>
      </div>
    </section>
    <section class="q-py-sm">
      <div class="row no-wrap scroll q-col-gutter-x-xl">
        <div class="col-auto" v-for="n in 10" :key="n">
          <article>
            <div class="column">
              <q-avatar size="77px">
                <q-img src="https://cdn.quasar.dev/img/avatar2.jpg"></q-img>
              </q-avatar>
              <div class="text-black text-center q-mt-sm">제목</div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="q-mt-xl">
      <q-tabs
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
        class="text-black q-mb-lg"
      >
        <q-route-tab
          :ripple="false"
          icon="edit"
          to="/profile"
          label="게시글"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="bookmark"
          to="/profile/saved"
          label="저장됨"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="style"
          to="/profile/tagged"
          label="태그됨"
          exact
        />

        <!-- <q-tab name="mails" icon="mail" label="게시글" />
        <q-tab name="alarms" icon="alarm" label="저장됨" />
        <q-tab name="movies" icon="movie" label="태그됨" /> -->
      </q-tabs>
      <router-view></router-view>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const tab = ref('mails');
</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
