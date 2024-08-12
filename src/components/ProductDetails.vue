<template>
  <div class="item__data">
    <div>
      Price per Item: <strong>{{ price | currency }}</strong>
    </div>
    <div>
      Quantity: <strong>{{ quantity }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: Number,
    quantity: Number
  },
  filters: {
    currency(value) {
      if (!value) return '₦0.00';
      return `₦${parseFloat(value).toFixed(2)}`;
    }
  }
};
</script>
