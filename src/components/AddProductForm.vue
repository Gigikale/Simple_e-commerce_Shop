<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="name" placeholder="Name" />
      <textarea v-model="description" placeholder="Description"></textarea>
      <input v-model="price" type="number" placeholder="Price" />
      <input v-model="stock" type="number" placeholder="Stock" />
      <input type="file" @change="handleFileUpload" />
      <button type="submit">Add Product</button>
    </form>
    <img v-if="imageUrl" :src="imageUrl" alt="Product Image" />
  </div>
</template>

<script>
import cloudinary from '@/cloudinary';

export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      stock: '',
      imageFile: null,
      imageUrl: ''
    };
  },
  methods: {
    async handleFileUpload(event) {
      this.imageFile = event.target.files[0];

      if (this.imageFile) {
        const formData = new FormData();
        formData.append('file', this.imageFile);
        formData.append('upload_preset', 'simple-shop'); // Replace with your upload preset

        try {
          const response = await fetch(`https://api.cloudinary.com/v1_1/productimg/image/upload`, {
            method: 'POST',
            body: formData
          });
          const data = await response.json();
          this.imageUrl = data.secure_url;
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    },
    async handleSubmit() {
      // Your logic to submit the form, including the imageUrl
      console.log({
        name: this.name,
        description: this.description,
        price: this.price,
        stock: this.stock,
        image: this.imageUrl
      });
    }
  }
};
</script>


<style scoped>
.product {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>