<template>
  <div class="container text">
    <h1>Seja bem vindo(a) ao meu Portfolio.</h1>
    <h3>Olá, meu nome é Daniele Késia!</h3>
    <hr>
    <div>
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
  </div>
</template>

<style lang="scss" scoped>
h1 {
  // Background-gradient
  background: -webkit-linear-gradient(to right, #f4b3c4, #f4b3c4, #ffffff, #ffffff);
  background: linear-gradient(to right, #f4b3c4, #f4b3c4, #ffffff, #ffffff);

  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: normal;
  font-size: 2.3rem;
  padding-top: 7rem;
}

h3 {
  color: #f3ecec;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
}

p {
  color: #f3ecec;
  margin-top: .5rem;
  font-size: 1rem;

  &:first-of-type {
    padding-top: 2rem;
  }
}

hr {
  margin: auto;
  width: 10rem;
}

.text {
  text-align: center;
}

.bold {
  font-weight: bold;
}

@media (min-width: 500px) and (max-width: 991px) {
  h1 {
    font-size: 2.8rem;
  }
}

@media (min-width: 992px) {
  h1 {
    font-size: 4rem;
  }

  h3 {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: #f3ecec;
  }

  p {
    text-align: center;
    font-size: 1rem;

    &:first-of-type {
      padding-top: 2rem;
  }
}
}
</style>
