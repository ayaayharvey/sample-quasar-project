<template>
  <q-page>
    <PageTitleWrapper>Dashboard</PageTitleWrapper>

    <ContentWrapper>
      <q-btn
        to="/artists"
        size="lg"
        class="full-width"
        color="green"
        label="Go to Artist"
      />
    </ContentWrapper>
  </q-page>
</template>

<script setup>
import PageTitleWrapper from "src/components/PageTitleWrapper.vue";
import ContentWrapper from "src/components/ContentWrapper.vue";
</script>
