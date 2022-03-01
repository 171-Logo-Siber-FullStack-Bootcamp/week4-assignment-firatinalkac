<template>
  <div class="dropdown">
    <div
      class="dropdown-toggle position-relative"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <slot name="dropdown"></slot>
      <span
        v-if="notificationCount"
        class="position-absolute translate-middle badge bg-danger"
      >
        {{ notificationCount }}
      </span>
    </div>
    <ul
      class="dropdown-menu shadow animated--grow-in"
      aria-labelledby="dropdownMenuButton1"
    >
      <slot name="dropdown-menu"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    notificationCount: {
      type: String,
      default: null,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.dropdown-toggle {
  position: relative;
  .notification-count {
    position: absolute;
    background: red;
  }
  .badge {
    font-size: 55%;
    font-weight: 700;
    padding: 0.25em 0.4em;
    border-radius: 0.35rem;
    top: 3px;
  }
}
.dropdown-menu {
  margin-top: 17px !important;
  border: 1px solid #fefefe !important;
  border-radius: 8px !important;
  & .dropdown-item {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 14px;
  }
}
</style>
