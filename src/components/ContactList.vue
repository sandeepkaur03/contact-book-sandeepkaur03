<template>
    <div>
      <input v-model="searchQuery" placeholder="Search contacts" />
      <div class="contact-list">
        <div class="contact-card card" v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="{ name: 'ContactPage', params: { id: contact.id } }">
            <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      contacts: Array,
    },
    data() {
      return {
        searchQuery: '',
      };
    },
    computed: {
      filteredContacts() {
        return this.contacts
          .filter(contact =>
            `${contact.firstName} ${contact.lastName}`
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
          )
          .sort((a, b) => a.lastName.localeCompare(b.lastName));
      },
    },
  };
  </script>
  