<template>
  <q-table
    ref="tableRef"
    binary-state-sort
    @request="getList"
    :loading="loading"
    v-model:pagination="pagination"
    title="Songs"
    :columns="tableLabels"
    :rows="tableRows"
    table-header-class="text-blue"
    no-data-label="No record available"
  >
    <template v-slot:top>
      <div class="text-h6">List of Songs</div>
      <q-space />
      <q-btn
        color="primary"
        :disable="loading"
        label="Add Song"
        to="/songs/add-song"
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
          :to="`/songs/` + props.row.id"
        ></q-btn>
      </q-td>
    </template>
  </q-table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSongStore } from "../../stores/song-store";

const songStore = useSongStore();
const loading = ref(false);
const tableRef = ref();
const tableRows = ref([]);
const tableLabels = [
  {
    name: "title",
    align: "left",
    label: "Title",
    field: "title",
  },
  {
    name: "year",
    align: "left",
    label: "Year",
    field: "year",
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
});

const getList = async (props) => {
  const { page, rowsPerPage, sortBy, descending } = props.pagination;
  loading.value = true;
  await songStore.getSongs();
  tableRows.value.splice(0, tableRows.value.length, ...songStore.data.data);
  pagination.value.rowsNumber = songStore.data.data.length;
  pagination.value.page = songStore.data.current_page;
  pagination.value.rowsPerPage = songStore.data.per_page;
  loading.value = false;
};
</script>
