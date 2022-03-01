<template>
  <div
    class="sidebar bg-primary vh-100 px-3 py-2"
    :style="{ width: is_expanded ? '6.5rem' : '14rem' }"
  >
    <SidebarBrand />
    <div class="sidebar-items">
      <SidebarItems :sidebarItems="sidebarItems" />
    </div>
    <div
      role="button"
      @click="changeWidth"
      class="collapse-icon text-center py-3 pointer-event"
      :class="{ transfrom: !is_expanded }"
    >
      <i class="bi bi-arrow-right-circle-fill text-white h1"></i>
    </div>
  </div>
</template>

<script>
import { ref, provide } from "vue";
import SidebarBrand from "@/components/Layout/sidebar/SidebarBrand";
import SidebarItems from "@/components/Layout/sidebar/SidebarItems";

export default {
  name: "Sidebar",
  components: {
    SidebarBrand,
    SidebarItems,
  },
  setup() {
    const is_expanded = ref(false);
    const sidebarItems = ref([
      {
        items: [{ text: "Dashboard", icon: "bi bi-speedometer2" }],
      },
      {
        headTitle: "INTERFACE",
        items: [
          { text: "Component", icon: "bi bi-gear" },
          { text: "Utils", icon: "bi bi-wrench" },
        ],
      },
      {
        headTitle: "ADDONS",
        items: [
          { text: "Pages", icon: "bi bi-folder-fill" },
          { text: "Charts", icon: "bi bi-graph-up" },
          { text: "Tables", icon: "bi bi-table" },
        ],
      },
    ]);

    provide("is_expanded", is_expanded);

    function changeWidth() {
      is_expanded.value = !is_expanded.value;
    }

    return {
      changeWidth,
      is_expanded,
      sidebarItems,
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  transition: 0.5s ease;
}
.collapse-icon {
  transition: 0.5s all ease;
}
.transfrom {
  transform: rotate(180deg);
}
</style>
