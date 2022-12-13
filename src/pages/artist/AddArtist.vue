<template>
  <q-page>
    <PageTitleWrapper>Add Artist</PageTitleWrapper>

    <ContentWrapper>
      <q-input
        v-model="name"
        outlined
        stack-label
        label="Artist Name"
        class="q-pb-md"
      />
      <q-input
        v-model="location"
        outlined
        stack-label
        label="Location"
        class="q-pb-md"
      />
      <q-btn
        @click="submit"
        size="lg"
        class="full-width"
        color="green"
        label="Save"
      />
      <!-- <div>
        Name:
        {{
          artistStore.localFormData.name
            ? artistStore.localFormData.name
            : "none"
        }}
      </div>
      <div>
        Location:
        {{
          artistStore.localFormData.location
            ? artistStore.localFormData.location
            : "none"
        }}
      </div> -->
    </ContentWrapper>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import PageTitleWrapper from "src/components/PageTitleWrapper.vue";
import ContentWrapper from "src/components/ContentWrapper.vue";
import { useArtistStore } from "../../stores/artist-store";

const artistStore = useArtistStore();
const router = useRouter();
const name = ref("");
const location = ref("");

onMounted(() => {
  artistStore.checkLocal();
});

const submit = async () => {
  let form = {
    name: name.value,
    location: location.value,
  };

  await artistStore.addArtist(form);
  router.push({ path: "/artists" });
};
</script>
