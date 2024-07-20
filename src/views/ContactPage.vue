<template>
    <div class="main-content">
      <router-link to="/">Back</router-link>
      <ViewContact :contact="contact" :onDelete="deleteContact" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import ViewContact from '../components/ViewContact.vue';
  
  export default {
    components: {
      ViewContact,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contact = ref(null);
  
      const loadContact = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contact.value = contacts.find(c => c.id === route.params.id);
      };
  
      const deleteContact = (id) => {
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts = contacts.filter(c => c.id !== id);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        router.push('/');
      };
  
      onMounted(loadContact);
  
      return { contact, deleteContact };
    },
  };
  </script>
  