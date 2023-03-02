<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import LangSelect from '../components/LangSelect.vue'
</script>

<template>
  <main>
    <TheWelcome />

    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
      <n-button>
        <slot name="submitBtnText">{{ $t('sousuo') }}</slot>
      </n-button>
    </n-space>

    <LangSelect></LangSelect>
  </main>
</template>
