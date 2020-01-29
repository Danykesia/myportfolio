<template>
  <div class="home">
    <Header/>
    <Portfolio/>
    <Contact/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'home',
  components: {
    Header,
    Portfolio,
    Contact,
  },
};
</script>
