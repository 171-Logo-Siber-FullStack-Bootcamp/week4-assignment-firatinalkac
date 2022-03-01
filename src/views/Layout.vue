<template>
  <div class="main-container">
    <div class="sidebar-container">
      <Sidebar ref="sidebar" />
    </div>
    <div class="content w-100">
      <div class="navbar-container shadow-sm">
        <Navbar />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Layout/sidebar/Sidebar";
import Navbar from "@/components/Layout/navbar/Navbar";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
}
</style>
