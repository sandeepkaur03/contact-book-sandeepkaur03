<template>
    <div v-if="contact" class="card">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
      <p>Phone: {{ contact.number }}</p>
      <p>Address: {{ contact.address }}</p>
      <div class="actions">
        <router-link :to="{ name: 'EditPage', params: { id: contact.id } }">
          <button>Edit</button>
        </router-link>
        <button @click="deleteContact">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      contact: Object,
      onDelete: Function,
    },
    methods: {
      deleteContact() {
        this.onDelete(this.contact.id);
      },
    },
  };
  </script>
  