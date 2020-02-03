<template>
  <div class="portfolio_card">
    <LapTop :picture="lapTopImgSrc"/>
    <Mobile :picture="mobileImgSrc"/>
    <slot></slot>
  </div>
</template>

<script>
import LapTop from '@/components/LapTop.vue';
import Mobile from '@/components/Mobile.vue';

export default {
  components: {
    LapTop,
    Mobile,
  },
  props: {
    lapTopImgSrc: String,
    mobileImgSrc: String,
  },
};
</script>

<style lang="scss" scoped>
.portfolio_card {
  width: 18rem;
  height: 11rem;
  position: relative;
  display: flex;
  margin: auto;
  margin-bottom: 3rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:hover .search {
    opacity: 1;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .portfolio_card {
    width: 25rem;
    height: 16rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .portfolio_card {
    width: 20rem;
    height: 13rem;
  }
}

@media (min-width: 992px) {
  .portfolio_card {
    width: 25rem;
    height: 16rem;
  }
}
</style>
