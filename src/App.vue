<template>
  <div>
    <div class="navbar">
      <h1>Contact Book</h1>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Contact</router-link>
      </div>
    </div>
    <router-view class="main-content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  color: #333;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Top Navigation Bar */
.navbar {
  width: 100%;
  background-color: #343a40;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.navbar h1 {
  font-size: 1.5rem;
}

.navbar a {
  color: #ddd;
  margin-left: 20px;
}

.navbar a:hover {
  color: #fff;
}

/* Main Content */
.main-content {
  padding: 20px;
  margin-top: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

/* Cards */
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  color: #666;
}

.card .actions {
  display: flex;
  gap: 10px;
}

.card button {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.card button:hover {
  background-color: #0056b3;
}

/* Form Styles */
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
}

form div {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

button {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

/* Contact List */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-list .contact-card {
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
}
</style>
