const productService = {
  async uploadImage(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'simple_ecommerce');

      const response = await fetch('https://api.cloudinary.com/v1_1/productimg/image/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  },

  async addProduct(productData) {
    try {
      const response = await fetch('https://mini-shop-kq17.onrender.com/api/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  }
};

export default productService;
