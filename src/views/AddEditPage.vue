<template>
    <div class="main-content">
      <router-link to="/">Back</router-link>
      <AddEditContact :contact="contact" :onSave="saveContact" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import AddEditContact from '../components/AddEditContact.vue';
  
  export default {
    components: {
      AddEditContact,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contact = ref({ firstName: '', lastName: '', email: '', number: '', address: '' });
  
      const loadContact = () => {
        if (route.params.id) {
          const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
          contact.value = contacts.find(c => c.id === route.params.id);
        }
      };
  
      const saveContact = (contact) => {
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  
        if (contact.id) {
          const index = contacts.findIndex(c => c.id === contact.id);
          contacts[index] = contact;
        } else {
          contact.id = Date.now().toString();
          contacts.push(contact);
        }
  
        localStorage.setItem('contacts', JSON.stringify(contacts));
        router.push(`/contact/${contact.id}`);
      };
  
      onMounted(loadContact);
  
      return { contact, saveContact };
    },
  };
  </script>
  