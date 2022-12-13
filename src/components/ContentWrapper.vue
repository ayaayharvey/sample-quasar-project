<template>
  <div id="my-content" class="q-mx-xl q-my-lg">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#my-content {
  margin-inline: auto;
  max-width: 600px;
  width: 100%;
}
</style>
