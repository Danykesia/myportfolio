<template>
  <header id="home">
    <HeadingText/>
    <Button/>
  </header>
</template>

<script>
import HeadingText from '@/components/HeadingText.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'home',
  components: {
    HeadingText,
    Button,
  },
};
</script>

<style lang="scss" scoped>
header {
  background: linear-gradient(to left top,#0b0216, #6017fb, #6b657a);
  width: 100%;
}

@media (min-width: 992px) {
}
</style>
