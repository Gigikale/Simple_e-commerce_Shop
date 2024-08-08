<template>
  <div class="product-list">
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search products..."
        class="search-input"
      />
    </div>
    <div class="product" v-for="product in filteredProducts" :key="product.id">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">
        <span class="price-symbol">₦</span>{{ product.price.toFixed(2) }}
      </p>
      <!-- Add Product Button -->
      <button @click="addProduct(product)" class="add-product-button">Add Product</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters('products', ['products']),
    filteredProducts() {
      const query = this.searchQuery.toLowerCase();
      return this.products.filter(product => 
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    addProduct(product) {
      // Logic for adding a product goes here
      // For example, you might dispatch an action to Vuex or trigger a modal
      alert(`Product added: ${product.title}`);
    },
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

.search-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-input {
  width: 80%;
  max-width: 600px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1em;
  outline: none;
}

.search-input:focus {
  border-color: #e91e63;
  box-shadow: 0 0 5px rgba(233, 30, 99, 0.3);
}

.product {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  text-align: center;
  width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
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
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.product-description {
  color: #666;
  font-size: 1em;
  margin-bottom: 15px;
  font-family: 'Georgia', serif;
}

.product-price {
  color: #e91e63;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
}

.price-symbol {
  font-size: 1.25em;
  color: #d81b60;
}

.add-product-button {
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #87ceeb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-product-button:hover {
  background-color: #d81b60;
}
</style>
