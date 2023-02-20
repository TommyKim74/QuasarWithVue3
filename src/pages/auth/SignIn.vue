<template>
  <!-- class="flex flex-center" -->
  <q-page>
    <div class="row window-height">
      <!-- <div class="col flex flex-center" :class="{ hidden: $q.screen.lt.md }">
        <div class="q-ml-xl">
          <q-img
            src="/sign-up-bg.jpg"
            :style="{ width: '600px', height: '800px' }"
          />
        </div>
      </div> -->
      <div class="col" :class="{ hidden: $q.screen.lt.md }">
        <q-img src="/sign-up-bg.jpg" height="100vh" />
      </div>
      <div class="col flex flex-center">
        <q-card flat :style="{ minWidth: '400px' }">
          <q-card-section>
            <div class="text-h6">로그인 하기</div>
            <div class="text-subtitle2 text-grey">또 와주셔서 감사합니다.</div>
          </q-card-section>
          <q-card-section>
            <q-form>
              <div class="q-gutter-y-lg">
                <q-input filled label="이메일" hint="이메일을 입력해 주세요.">
                </q-input>
                <q-input
                  filled
                  type="password"
                  label="비밀번호"
                  hint="영문 대소문자 포함 8자 이상."
                >
                </q-input>
              </div>
              <q-btn
                label="로그인 하기"
                unelevated
                color="primary"
                size="lg"
                class="full-width q-mt-lg"
              ></q-btn>
              <q-btn
                label="회원가입"
                flat
                class="full-width q-mt-md"
                to="/auth/sign-up"
              ></q-btn>
              <q-btn
                label="대시보드로 이동"
                flat
                class="full-width q-mt-xs"
                to="/"
              ></q-btn>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>
