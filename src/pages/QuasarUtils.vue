<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Date Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">
        formatDate = {{ formatDate(new Date(), dt_format) }}
      </div>
      <div class="text-h6">
        addToDate =
        {{
          formatDate(addToDate(new Date(), { days: 7, months: 1 }), dt_format)
        }}
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Format Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">Pad String = {{ pad('2', 10) }}</div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">Type Checking Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">
        is.deepEqual {{ objA }} {{ objB }} = {{ is.deepEqual(objA, objB) }}
      </div>
      <div class="text-h6">
        is.deepEqual {{ objC }} {{ objD }} = {{ is.deepEqual(objC, objD) }}
      </div>
    </section>
  </q-page>

  <div>Typography</div>
</template>

<script setup>
import { date, format, is } from 'quasar';

const dt_format = 'YYYY-MM-DD HH:mm:ss';

const { formatDate, addToDate } = date;
const { pad } = format;

const objA = { name: 'abc' };
const objB = { name: 'abc' };
const objC = { name: 'abc', age: 20 };
const objD = { name: 'abc', age: 22 };
</script>
<style lang="scss" scoped></style>
