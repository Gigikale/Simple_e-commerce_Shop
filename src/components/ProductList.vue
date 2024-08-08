<template>
  <div class="product-list">
    <div class="product" v-for="product in products" :key="product.id">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('products', ['products']),
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #f9f9f9;
}

.product {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  text-align: center;
  width: 300px;
  transition: transform 0.3s;
}

.product:hover {
  transform: translateY(-10px);
}

.product-image {
  border-radius: 8px;
  height: 200px;
  object-fit: cover;
  width: 100%;
}

.product-title {
  color: #333;
  font-size: 1.5em;
  margin: 15px 0;
}

.product-description {
  color: #666;
  font-size: 1em;
  margin-bottom: 15px;
}

.product-price {
  color: #e91e63;
  font-size: 1.25em;
  font-weight: bold;
}
</style>
