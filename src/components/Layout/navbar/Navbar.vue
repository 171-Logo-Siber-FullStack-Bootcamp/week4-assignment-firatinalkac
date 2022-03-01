<template>
  <div
    class="bg-white px-4 py-3 d-flex align-items-center justify-content-between"
  >
    <div class="ps-2">
      <NavbarSearch />
    </div>
    <div class="d-flex align-items-center">
      <NavbarRightAction />
    </div>
  </div>
</template>

<script>
import NavbarSearch from "@/components/Layout/navbar/NavbarSearch";
import NavbarRightAction from "@/components/Layout/navbar/NavbarRightAction";

export default {
  name: "Navbar",
  components: {
    NavbarSearch,
    NavbarRightAction,
  },
};
</script>

<style scoped lang="scss"></style>
