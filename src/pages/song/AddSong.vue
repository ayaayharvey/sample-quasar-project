<template>
  <q-page>
    <PageTitleWrapper>Add Song</PageTitleWrapper>

    <ContentWrapper>
      <q-input outlined stack-label label="Title" class="q-pb-md" />
      <q-input outlined stack-label label="Year" class="q-pb-md" />
      <q-input
        type="textarea"
        outlined
        stack-label
        label="Lyrics"
        class="q-pb-md"
      />
      <q-btn size="lg" class="full-width" color="green" label="Save" />
    </ContentWrapper>
  </q-page>
</template>

<script setup>
import PageTitleWrapper from "src/components/PageTitleWrapper.vue";
import ContentWrapper from "src/components/ContentWrapper.vue";
</script>
