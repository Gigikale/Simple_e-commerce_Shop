<template>
  <li>
    <div>
      <img :src="image" :alt="title" />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <div class="item__data">
        <div>
          Price per Item: <strong>{{ price | currency }}</strong>
        </div>
        <div>
          Quantity: <strong>{{ quantity }}</strong>
        </div>
      </div>
      <div class="item__total">Total: {{ itemTotal | currency }}</div>
      <button @click="removeProduct" aria-label="Remove Product">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },

  methods: {
    removeProduct() {
      this.$store.dispatch("cart/removeProductFromCart", { productId: this.id });
    },
  },

  computed: {
    itemTotal() {
      return (this.price * this.quantity).toFixed(2);
    },
  },

  filters: {
    currency(value) {
      if (!value) return '0.00';
      return `$${parseFloat(value).toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
:root {
  --primary-color: #8f0030;
  --secondary-color: #53001c;
  --border-color: #474747;
  --box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  --border-radius: 30px;
}

li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: var(--box-shadow);
  text-align: center;
  max-width: 25rem;
}

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 2px solid var(--border-color);
  padding: 0.25rem 0;
  width: auto;
}

button {
  font: inherit;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}
</style>
