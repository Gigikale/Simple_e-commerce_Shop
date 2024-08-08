<!-- src/components/ProductItem.vue -->
<template>
  <div>
    <img :src="product.image" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p>\${{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style scoped>
img {
  width: 100px;
  height: auto;
}

h3 {
  margin: 10px 0;
}
</style>
