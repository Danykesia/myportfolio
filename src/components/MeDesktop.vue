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
            width: 11rem;
            height: 13rem;
          }

          .perfilDesktop {
            display: inline-block;
            margin-top: 4rem;
          }
        }
</style>
