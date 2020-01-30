<template>
  <div class="mobile_card">
    <img class="mobile" :src="picture">
  </div>
</template>

<script>
export default {
  props: {
    picture: String,
  },
};
</script>

<style lang="scss" scoped>
.mobile {
  width: 4rem;
  height: 8rem;
  margin-right: .5rem;
  margin-bottom: .8rem;

  &_card {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
