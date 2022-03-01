<template>
  <div
    class="d-flex justify-content-center align-items-center gap-4 pb-2 border-sidebar"
  >
    <i class="bi bi-emoji-laughing text-white h1 mb-0"></i>
    <span v-if="!is_expanded" class="text-white brand-title fw-bold"
      >SB ADMIN</span
    >
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "NavbarBrand",
  setup() {
    const is_expanded = inject("is_expanded");

    return {
      is_expanded,
    };
  },
};
</script>

<style scoped lang="scss"></style>
