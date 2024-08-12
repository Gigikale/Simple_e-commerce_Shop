<template>
  <div class="product-image">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String
  }
};
</script>

<style>
.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7; /* Light grey background */
  border-radius: 10px; /* Rounded corners */
  padding: 10px; /* Spacing around the image */
  max-width: 300px; /* Limit the container width */
  margin: auto; /* Center align the container */
}

.product-image img {
  max-width: 100%; /* Ensure the image is responsive */
  height: auto; /* Maintain aspect ratio */
  border-radius: 5px; /* Slightly round the image corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}
</style>
