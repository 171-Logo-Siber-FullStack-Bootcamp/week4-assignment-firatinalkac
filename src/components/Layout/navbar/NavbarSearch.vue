<template>
  <div class="input-group search-input">
    <input
      type="text"
      class="form-control bg-light border-0"
      placeholder="Search for..."
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <button class="btn btn-primary border-0" type="button" id="button-addon2">
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "NavbarSearch",
};
</script>

<style scoped lang="scss">
.search-input {
  width: 400px;
  & .form-control {
    font-size: 12px;
    font-weight: 500;
    &::placeholder {
    }
  }
}
</style>
