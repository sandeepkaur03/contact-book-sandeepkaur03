<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" v-model="contact.firstName" required />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="contact.lastName" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="contact.email" required />
      </div>
      <div>
        <label for="number">Phone Number:</label>
        <input type="tel" v-model="contact.number" required />
      </div>
      <div>
        <label for="address">Address:</label>
        <textarea v-model="contact.address" required></textarea>
      </div>
      <button type="submit">Save</button>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      contact: Object,
      onSave: Function,
    },
    methods: {
      submitForm() {
        this.onSave(this.contact);
      },
    },
  };
  </script>
  