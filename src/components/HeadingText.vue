<template>
  <div class="container">
    <h1>Seja bem vindo(a) ao meu Portfolio.</h1>
    <Me/>
    <p>
      Trabalho como <span class="bold">Web Designer</span> e
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

  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: normal;
  font-size: 1.8rem;
  padding-top: 3.75rem;
}

p {
  color: #f3ecec;
  margin-top: .5rem;

  &:first-of-type {
    padding-top: 7rem;
  }
}

.bold {
  font-weight: bold;
}
</style>
