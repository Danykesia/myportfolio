<template>
  <div class="perfil">
    <div class="perfilMobile">
      <img src="../assets/avatar.png" alt="Minha foto">
      <h2>Olá, eu sou Daniele Késia!</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-weight: 500;
  margin-top: -8rem;
  margin-left: 9.37rem;
  font-size: 1.1rem;
  color: #f3ecec;
  font-weight: bold;
}

img {
  width: 8rem;
  height: 9rem;
}

.perfilMobile {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}

        @media (min-width: 576px) {
          img {
            width: 11rem;
            height: 12.5rem;
          }

          h2{
            font-size: 1.5rem;
            margin-right: 3rem;
            padding-left: 3rem;
          }

          .perfilMobile {
            padding-top: 2rem;
          }
        }

        @media (min-width: 992px) {
          .perfilMobile {
            display: none;
          }
        }
</style>
