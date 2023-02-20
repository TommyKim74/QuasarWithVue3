<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Quasar Language Pack Runtime</div>
      <q-separator class="q-my-md"></q-separator>
      <q-select
        v-model="lang"
        :options="langOptions"
        label="퀘이사 언어"
        outlined
        emit-value
        map-options
      ></q-select>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">$q.lang</div>
      <q-separator class="q-my-md"></q-separator>
      <div>
        {{ $q.lang }}
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">i18n - locale</div>
      <q-separator class="q-my-md"></q-separator>
      <div>locale - {{ lang }}</div>
      <div>hello - {{ $t('hello') }}</div>
      <div>product name - {{ $t('productName') }}</div>
    </section>
  </q-page>
</template>
<script>
import languages from 'quasar/lang/index.json';

const appLanguages = languages.filter(lang =>
  ['ko-KR', 'en-US'].includes(lang.isoName),
);

const langOptions = appLanguages.map(lang => {
  return {
    label: lang.nativeName,
    value: lang.isoName,
  };
});
// console.log(langOptions);
</script>

<script setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const lang = ref($q.lang.isoName);

watch(lang, val => {
  import(`../../node_modules/quasar/lang/${val}.mjs`).then(lang => {
    $q.lang.set(lang.default);
    $q.localStorage.set('lang', val);
    locale.value = val;
  });
});

const { t, locale } = useI18n();
console.log('product Name ', t('productName'));
</script>
<style lang="scss" scoped></style>
