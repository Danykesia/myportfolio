<template>
  <section id="contato" class=" container contact">
    <h3>Contato</h3>
    <hr>
    <p>
      Que tal me falar sobre o seu projeto? Será um prazer ajudá-lo(a)!
    </p>
    <Form/>
  </section>
</template>

<script>
import Form from '@/components/Form.vue';

export default {
  name: 'contact',
  components: {
    Form,
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

.contact {
  background: linear-gradient(to left top,#6b657a,#6017fb,#0b0216);
  width: 100%;
  padding-top: 1rem;
}
</style>
