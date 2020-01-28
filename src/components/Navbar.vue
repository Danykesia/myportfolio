<template>
  <nav id="navbar" class="container navbar">
    <img href="/" class="navbar_logo" src="../assets/DANIELE..png" alt="DANIELE">

    <ul id="myMenu" class="navbar_links menu">
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="#portfolio">Portfolio</router-link>
        <router-link to="#contato">Contato</router-link>
      </li>
    </ul>

    <font-awesome-icon id="btn" icon="bars"/>
  </nav>
</template>

<script>
export default {
  mounted() {
    window.onscroll = function scrollFunction() {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById('navbar').style.background = '#5e2a634b';
      } else {
        document.getElementById('navbar').style.background = 'transparent';
      }
    };
  },
};
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-top: 1rem;
    position: fixed;
    height: 60px;
  }

  img {
    height: 1.87rem;
    width: 8.12rem;
  }

  #btn {
    cursor: pointer;
    font-size: 2rem;
    color: purple;
    // padding: .3rem;
  }

  .show {
    display: block;
  }

  #myMenu {
    display: none;
  }
</style>
