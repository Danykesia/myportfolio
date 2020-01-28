<template>
  <header>
    <HeadingText/>
    <Button/>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: linear-gradient(to left top,#0b0216, #6017fb, #6b657a);
  border: 3px solid #ffffff;
  height: 100%;
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
