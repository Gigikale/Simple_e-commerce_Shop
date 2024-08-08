<template>
  <div class="home-page">
    <the-header></the-header>
    <div class="home-img">
      <img src="@/assets/homeImg.png" alt="BgImg" />
      <h1>Welcome to Simple E-commerce Shop</h1>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue"; // Adjust the path if necessary


export default {
  name: "HomePage",
  components: {
    TheHeader,
    
  }
};
</script>

<style scoped>
/* Add your specific styles for HomePage here */
.home-page {
  text-align: center;
  margin-top: 20px; /* Adjust margin to position below the header */
}

.home-img {
  position: relative;
  width: 100%;
  height: 100vh; /* Full height of viewport */
  overflow: hidden;
}

.home-img img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire container */
  position: absolute;
  top: 0;
  left: 0;
}

.home-img h1 {
  position: absolute;
  top: 10%;
  left: 60%;
  align-item:right;
  transform: transate(-50%, -50%);
  color: white;
  font-size: 4rem; /* Larger font size for better visibility */
  background-color: rgba(255, 87, 34, 0.7); /* Semi-transparent orange */
  padding: 5px;
  border-radius: 15px;
  margin-right: 30px;
  margin-left: 90px;
  font-family: 'Arial', sans-serif; /* Adjust font as needed */
}

/* Header component */
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
</style>
