
<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      @input="onSearch"
      placeholder="Search products..."
      aria-label="Search products"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
input {
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
