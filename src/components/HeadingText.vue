<template>
  <div class="container">
    <h1>Seja bem vindo(a) ao meu Portfolio.</h1>
    <Me/>
    <h2>Olá, eu sou Daniele Késia!</h2>
    <p>
      Sou <span class="bold">Web Designer</span> e
      <span class="bold">Desenvolvedora Web</span> (front-end).
    </p>
    <p>
      Como web designer, atuo com foco em <span class="bold">design responsivo</span>,
      usabilidade e na experiência do usuário.
    <p>
      Já na área de desenvolvimento web, possuo experiência em frameworks JavaScrip, como VueJS.
    </p>
    <p>
      Além disso, trabalho com desenvolvimento de projetos em <span class="bold">WordPress</span>
      e <span class="bold">Elementor</span>.
    </p>
  </div>
</template>

<script>
import Me from '@/components/Me.vue';

export default {
  name: 'home',
  components: {
    Me,
  },
};
</script>


<style lang="scss" scoped>
h1 {
  // Background-gradient
  background: -webkit-linear-gradient(to right, #f4b3c4, #f4b3c4, #ffffff, #ffffff);
  background: linear-gradient(to right, #f4b3c4, #f4b3c4, #ffffff, #ffffff);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  padding-top: 60px;
}

h2 {
  font-weight: 500;
  margin-top: -105px;
  margin-left: 150px;
  font-size: 1.2rem;
  color: #f3ecec;
  font-weight: bold;
}

p {
  margin-top: 7px;
  color: #f3ecec;

  &:first-of-type {
    padding-top: 65px;
  }
}

.bold {
  font-weight: bold;
}
</style>
