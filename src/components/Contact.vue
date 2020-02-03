<template>
  <section id="contato" class="container contact">
    <h3>Contato</h3>
    <hr>
    <p>
      Que tal me falar sobre o seu projeto? Será um prazer ajudá-lo(a)!
    </p>
    <Form/>
    <SecondaryFooter/>
  </section>
</template>

<script>
import Form from '@/components/Form.vue';
import SecondaryFooter from '@/components/SecondaryFooter.vue';

export default {
  name: 'contact',
  components: {
    Form,
    SecondaryFooter,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.5rem;
  color: white;
}

hr {
  border-color: #cfa9fc8c;
  border-width: .03rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

p {
  color: white;
}

#contato {
  background: linear-gradient(to left top,#6b657a,#6017fb,#0b0216);
  width: 100%;
  padding: 3rem;
  max-width: 100%;
}
</style>
