<template>
  <div v-for="(item, i) in list" :key="i">
    <q-item
      clickable
      @click="item.child.length !== 0 && toggleChildMenu(i)"
      :to="item.path && item.path"
    >
      <q-item-section v-if="item.icon" avatar>
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
      </q-item-section>
      <q-item-section v-if="item.child.length !== 0" avatar>
        <q-icon v-if="!withChild[i]?.show" name="keyboard_arrow_down" />
        <q-icon v-if="withChild[i]?.show" name="keyboard_arrow_up" />
      </q-item-section>
    </q-item>
    <div v-if="item.child.length !== 0 && withChild[i]?.show">
      <div
        v-for="itemChild in item.child"
        :key="itemChild.title"
        class="q-ml-lg"
      >
        <q-item clickable :to="itemChild.path">
          <q-item-section v-if="itemChild.icon" avatar>
            <q-icon :name="itemChild.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ itemChild.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  list: Array,
});
const withChild = ref([]);

onMounted(() => {
  // Setting Menu with Child
  props.list.forEach((item, i) => {
    withChild.value.push({
      id: i,
      show: false,
    });
  });
});

const toggleChildMenu = (key) => {
  withChild.value[key].show = !withChild.value[key].show;
};
</script>
