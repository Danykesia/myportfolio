<template>
  <div class="perfil">
    <div class="perfil_Mobile">
      <img src="../assets/avatar.png" alt="Minha foto">
      <h2>Olá, meu nome é Daniele Késia!</h2>
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
}

.perfil_Mobile {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}

@media (min-width: 992px) {
  .perfil_Mobile {
    display: none;
  }
}
</style>
