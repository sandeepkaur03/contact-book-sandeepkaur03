<template>
    <div class="main-content">
      <h1>My Contacts</h1>
      <ContactList :contacts="contacts" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import ContactList from '../components/ContactList.vue';
  
  export default {
    components: {
      ContactList,
    },
    setup() {
      const contacts = ref([]);
  
      const loadContacts = () => {
        const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts.value = storedContacts;
      };
  
      onMounted(loadContacts);
  
      return { contacts };
    },
  };
  </script>
  