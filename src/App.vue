<template>
  <div id="app" class="h-100">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
.h-100 {
  height: 100%;
}

#app {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li, a {
  text-decoration: none;
  list-style: none;
}

.container {
  margin: 0 auto;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
}

        /*Extra large devices (large desktops, 1200px  e maiores)*/
        @media (min-width: 768px) {
          .container {
            max-width: 1920px;
            padding-left: 4rem;
            padding-right: 4rem;
          }
        }
</style>
