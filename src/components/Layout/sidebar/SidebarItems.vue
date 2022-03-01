<template>
  <div class="items">
    <div
      v-for="(sidebarItem, index) in sidebarItems"
      :key="index"
      class="border-sidebar py-2"
    >
      <span
        v-if="sidebarItem.headTitle && !is_expanded"
        class="sidebar-heading d-inline-block py-2"
      >
        {{ sidebarItem.headTitle }}
      </span>
      <SidebarItem
        v-for="(item, index) in sidebarItem.items"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import SidebarItem from "@/components/Layout/sidebar/SidebarItem";
import { inject } from "vue";

export default {
  name: "SidebarItems",
  components: {
    SidebarItem,
  },
  props: {
    sidebarItems: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const is_expanded = inject("is_expanded");
    return {
      is_expanded,
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar-heading {
  font-weight: 800;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
}
</style>
