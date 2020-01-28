<template>
  <div class="home">
    <Header/>
    <Portfolio/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Portfolio from '@/components/Portfolio.vue';

export default {
  name: 'home',
  components: {
    Header,
    Portfolio,
  },
};
</script>
