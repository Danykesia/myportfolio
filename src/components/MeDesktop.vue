<template>
  <div class="perfil">
    <div class="perfilDesktop">
      <img src="../assets/avatar.png" alt="Minha foto">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.perfilDesktop {
  display: none;
}

        @media (min-width: 992px) {
          img {
            width: 10rem;
            height: 12rem;
          }

          .perfilDesktop {
            display: inline-block;
            margin-top: 4rem;
          }
        }
</style>
