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

<style lang="scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-top: 1rem;
    position: fixed;
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
