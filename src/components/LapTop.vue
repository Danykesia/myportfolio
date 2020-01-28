<template>
  <div class="laptop-card">
    <img class="laptop" :src="picture">
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
.laptop {
  width: 18rem;
  height: 11rem;
  margin-bottom: 3rem;

  &-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
