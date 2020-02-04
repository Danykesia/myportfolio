<template>
  <div class="desktop_perfil container">
    <div class="desktop mobile">
      <h1>Seja bem vindo(a) ao meu Portfolio.</h1>
      <MeDesktop/>
    </div>
    <h3 class="desktop">Olá, meu nome é Daniele Késia!</h3>
    <MeMobile/>
    <p>
      Sou <span class="bold">Web Designer</span> e
      <span class="bold">Desenvolvedora Web</span> (front-end).
    </p>
    <p>
      Como web designer, atuo com foco em <span class="bold">design responsivo</span>,
      usabilidade e na experiência do usuário.
    <p>
      Já na área de desenvolvimento web, possuo experiência em frameworks JavaScript, como VueJS.
    </p>
    <p>
      Além disso, trabalho com desenvolvimento de projetos em <span class="bold">WordPress</span>
      e <span class="bold">Elementor</span>.
    </p>
  </div>
</template>

<script>
import MeMobile from '@/components/MeMobile.vue';
import MeDesktop from '@/components/MeDesktop.vue';

export default {
  name: 'home',
  components: {
    MeMobile,
    MeDesktop,
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
  padding-top: 5rem;
  margin-bottom: 1rem;
}

p {
  color: #f3ecec;
  margin-top: .5rem;
  font-size: 1rem;

  &:first-of-type {
    padding-top: 6.5rem;
  }
}

.desktop {
  display: none;
}

.mobile {
  display: block;
}

.bold {
  font-weight: bold;
}

@media (min-width: 319px) and (max-width: 358px) {
  h1 {
    font-size: 1.6rem;
  }

  p {
    &:first-of-type {
      padding-top: 4.8rem;
    }
  }
}

@media (min-width: 500px) and (max-width: 991px) {
  h1 {
    font-size: 2.2rem;
  }

  p {
    &:first-of-type {
      padding-top: 7.8rem;
    }
  }
}

@media (min-width: 992px) {
  h1 {
    margin-top: 4rem;
  }

  h3 {
    margin-bottom: 3rem;
    font-size: 1.6rem;
    color: #f3ecec;
  }

  p {
    &:first-of-type {
      padding-top: 1rem;
  }
}
  .desktop {
    display: flex;
    justify-content: space-between;
  }
}
</style>
