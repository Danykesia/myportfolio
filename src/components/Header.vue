<template>
  <header>
    <HeadingText/>
    <Button/>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: linear-gradient(to left top,#9f56f7, #ad89fa, #b7a0f9);
  border: 3px solid #ffffff;
  height: 100vh;
  width: 100%;
}
</style>

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
