<template>
  <div class="sideber-item d-flex align-items-center gap-2 ps-1 py-2">
    <span :class="is_expanded ? 'icon-container' : ''">
      <i :class="'item-icon' + item.icon"></i>
    </span>
    <small v-if="!is_expanded" class="title"> {{ item.text }} </small>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      default: () => {},
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
.sideber-item {
  cursor: pointer;
  transition: 0.3s ease;
  color: #d2d2d7;
  &:hover {
    color: white;
  }
  & .icon-container {
    display: flex;
    justify-content: center;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 14px;
    color: #ffffff;
    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }
}
</style>
