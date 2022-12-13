<template>
  <q-page>
    <PageTitleWrapper>Artist Page</PageTitleWrapper>

    <ContentWrapper>
      <q-table
        ref="tableRef"
        binary-state-sort
        @request="getList"
        :loading="loading"
        v-model:pagination="pagination"
        title="Artists"
        :columns="tableLabels"
        :rows="tableRows"
        table-header-class="text-blue"
        no-data-label="No record available"
      >
        <template v-slot:top>
          <div class="text-h6">List of Artist</div>
          <q-space />
          <q-btn
            color="primary"
            :disable="loading"
            label="Add Artist"
            to="/artists/add-artist"
          />
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              dense
              flat
              color="primary"
              field="edit"
              icon="visibility"
              :to="`/artists/` + props.row.id"
              @click="artistStore.setArtist(props.row.id)"
            ></q-btn>
          </q-td>
        </template>
      </q-table>
    </ContentWrapper>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PageTitleWrapper from "src/components/PageTitleWrapper.vue";
import ContentWrapper from "src/components/ContentWrapper.vue";
import { useArtistStore } from "../../stores/artist-store";

const artistStore = useArtistStore();
const loading = ref(false);
const tableRef = ref();
const tableRows = ref([]);
const tableLabels = [
  {
    name: "title",
    align: "left",
    label: "Artist Name",
    field: "title",
  },
  {
    name: "actions",
    align: "right",
    label: "Actions",
    field: "  ",
  },
];
const pagination = ref({
  page: 1,
  rowsPerPage: 5,
  rowsNumber: null,
});

onMounted(() => {
  tableRef.value.requestServerInteraction();
  artistStore.checkLocal();
});

const getList = async (props) => {
  const { page, rowsPerPage, sortBy, descending } = props.pagination;
  loading.value = true;
  await artistStore.getArtists();
  if (artistStore.data.length !== 0) {
    tableRows.value.splice(0, tableRows.value.length, ...artistStore.data.data);
    pagination.value.rowsNumber = artistStore.data.data.length;
    pagination.value.page = artistStore.data.current_page;
    pagination.value.rowsPerPage = artistStore.data.per_page;
  }
  loading.value = false;
};
</script>
