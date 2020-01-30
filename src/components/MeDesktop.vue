<template>
  <div class="perfil">
    <div class="perfil_Desktop">
      <img src="../assets/avatar.png" alt="Minha foto">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.perfil_Desktop {
  display: none;
}

@media (min-width: 992px) {
  img {
    width: 10rem;
    height: 12rem;
  }

  .perfil_Desktop {
    display: inline-block;
    margin-top: 6rem;
  }
}
</style>
