<template>
  <q-page>
    <PageTitleWrapper>Artist Details</PageTitleWrapper>
    <ContentWrapper>
      <div class="q-mb-md">
        <div class="text-h6">{{ artistStore.formData.name }}</div>
        <div class="text-subtitle1">{{ artistStore.formData.location }}</div>
      </div>
      <!-- <SongList /> -->
    </ContentWrapper>
  </q-page>
</template>

<script setup>
import PageTitleWrapper from "src/components/PageTitleWrapper.vue";
import ContentWrapper from "src/components/ContentWrapper.vue";
import SongList from "../song/SongList.vue";
import { useArtistStore } from "../../stores/artist-store";

const artistStore = useArtistStore();
</script>
