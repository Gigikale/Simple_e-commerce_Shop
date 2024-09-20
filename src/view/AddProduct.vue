<template>
  <div>
    <TheHeader /><br /><br />
    <form @submit.prevent="submitForm" class="add-product-form">
      <div class="form-control">
        <label for="name">Product Name</label>
        <input type="text" id="name" v-model="productName" required />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <div class="form-control">
        <label for="price">Price</label>
        <input type="number" id="price" v-model="price" required min="0" />
      </div>
      <div class="form-control">
        <label for="stock">Stock</label>
        <input type="number" id="stock" v-model="stock" required min="0" />
      </div>
      <div class="form-control">
        <label for="image">Product Image</label>
        <input
          type="file"
          id="image"
          @change="handleImageUpload"
          accept="image/*"
          required
        />
        <div v-if="imagePreview" class="image-preview">
          <img :src="imagePreview" alt="Image Preview" />
        </div>
      </div>
      <button type="submit">Add Product</button>
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      productName: "",
      description: "",
      price: null,
      stock: null,
      image: null,
      imagePreview: null,
      successMessage: null,
      error: null,
    };
  },
  methods: {
    async handleImageUpload(event) {
      const file = event.target.files[0];
      this.imagePreview = URL.createObjectURL(file);
      this.image = file;
    },
    async uploadImage(file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "simple_ecommerce"); // Replace with your Cloudinary preset

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Image upload failed.");
        }
        return data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        this.error = error.message;
      }
    },
    async submitForm() {
      this.error = null;
      this.successMessage = null;
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Authorization token not found. Please log in.");
        }

        const imageUrl = await this.uploadImage(this.image);

        const productData = {
          name: this.productName,
          description: this.description,
          price: this.price,
          stock: this.stock,
          image: imageUrl,
        };

        const response = await fetch("https://mini-shop-kq17.onrender.com/api/add-product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add Bearer token to headers
          },
          body: JSON.stringify(productData),
        });

        if (!response.ok) {
          throw new Error("Product addition failed.");
        }

        const result = await response.json();
        console.log("Product added:", result);

        // Set success message
        this.successMessage =
          "Product added successfully! Redirecting to Product...";

        // Reset form fields
        this.productName = "";
        this.description = "";
        this.price = null;
        this.stock = null;
        this.image = null;
        this.imagePreview = null;

        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = "/products";
        }, 2000);
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style>
:root {
  --primary-color: #8f0030;
  --secondary-color: #53001c;
  --border-color: #474747;
  --box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  --border-radius: 30px;
}
the-header {
  position: absolute;
  align-item: right;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: orange; /* Orange background color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Added box-shadow for better visibility */
  color: white; /* Adjust text color if needed */
}
.add-product-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background-color: white;
}

.form-control {
  margin-bottom: 1rem;
}

.form-control label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-control input,
.form-control textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font: inherit;
}

.form-control input[type="file"] {
  border: none;
  padding: 0;
}

.image-preview {
  margin-top: 1rem;
  text-align: center;
}

.image-preview img {
  max-width: 100%;
  border-radius: var(--border-radius);
}

.success-message {
  color: green;
  margin-top: 1rem;
}

.error-message {
  color: red;
  margin-top: 1rem;
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
