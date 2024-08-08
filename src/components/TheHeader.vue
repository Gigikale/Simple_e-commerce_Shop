<template>
  <header>
    <h1>
      <router-link to="/">Simple E-commerce Shop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/add-product">Add Product</router-link>
        </li>
      </ul>
    </nav>
    <div class="reg">
      <router-link to="/login" v-if="!isLoggedIn">
        <button>Login</button>
      </router-link>
      <button v-if="isLoggedIn" @click="logoutAndRedirect">Logout</button>
      <router-link to="/signup" v-if="!isLoggedIn">
        <button>Sign Up</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    signup() {
      this.$router.push('/');
    },
    logoutAndRedirect() {
      this.isLoggedIn = false;
      this.$router.push('/');
    },
  },
};
</script>

<style>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

nav li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

.reg {
  display: flex;
  align-items: center;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
  margin-left: 0.5rem;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>
