<template>
  <li class="product-item">
    <ProductImage :src="image" :alt="title" />
    <div>
      <h3>{{ title }}</h3>
      <ProductDetails :price="price" :quantity="quantity" />
      <div class="item__total">Total: {{ itemTotal | currency }}</div>
      <button @click="removeProduct" aria-label="Remove Product">Remove</button>
    </div>
  </li>
</template>

<script>
import ProductImage from './ProductImage.vue';
import ProductDetails from './ProductDetails.vue';
import productService from '@/services/productService'; // hypothetical service file

export default {
  components: {
    ProductImage,
    ProductDetails
  },
  props: {
    id: Number,
    title: String,
    image: String,
    price: Number,
    quantity: Number
  },
  methods: {
    async addProduct(file) {
      try {
        const imageUrl = await productService.uploadImage(file);
        const productData = {
          title: this.title,
          image: imageUrl,
          price: this.price,
          quantity: this.quantity
        };
        await this.$store.dispatch('addProduct', productData);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    removeProduct() {
      this.$store.dispatch('cart/removeProductFromCart', { productId: this.id });
    }
  },
  computed: {
    itemTotal() {
      return (this.price * this.quantity).toFixed(2);
    }
  },
  filters: {
    currency(value) {
      if (!value) return '₦0.00';
      return `₦${parseFloat(value).toFixed(2)}`;
    }
  }
};
</script>


<style>
img {
  width: 100px;
  height: auto;
}

h3 {
  margin: 10px 0;
}
</style>
