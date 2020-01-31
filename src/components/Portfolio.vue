<template>
  <section id="portfolio" class="container">
    <h3>Portfolio</h3>

    <hr>
    <div class="portfolio">
      <div class="portfolio_card">
        <LapTop :picture="require('../assets/imobLaptop.png')"/>
        <Mobile :picture="require('../assets/imobMobile.png')"/>
      </div>
      <div class="portfolio_card">
        <LapTop :picture="require('../assets/lawyerLaptop.png')"/>
        <Mobile :picture="require('../assets/lawyerMobile.png')"/>
      </div>
      <div class="portfolio_card">
        <LapTop :picture="require('../assets/motionLaptop.png')"/>
        <Mobile :picture="require('../assets/motionMobile.png')"/>
      </div>
      <div class="portfolio_card">
        <LapTop :picture="require('../assets/workoutLaptop.png')"/>
        <Mobile :picture="require('../assets/workoutMobile.png')"/>
      </div>
      <div class="portfolio_card">
        <LapTop :picture="require('../assets/portfolioLaptop.png')"/>
        <Mobile :picture="require('../assets/portfolioMobile.png')"/>
      </div>
    </div>
  </section>
</template>

<script>
import LapTop from '@/components/LapTop.vue';
import Mobile from '@/components/Mobile.vue';

export default {
  components: {
    LapTop,
    Mobile,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.5rem;
  color: #260b47;
}

hr {
  border-color: #8f49e0;
  border-width: .03rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

#portfolio {
  padding-top: 1rem;
  width: 100%;
  background: white;
  max-width: 100%;
}

.portfolio_card {
  width: 18rem;
  height: 11rem;
  position: relative;
  display: flex;
  margin: auto;
  margin-bottom: 3rem;
}

@media (min-width: 576px) and (max-width: 767px) {
  .portfolio_card {
    width: 25rem;
    height: 16rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .portfolio {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &_card {
    width: 20rem;
    height: 13rem;
    }
  }
}

@media (min-width: 992px) {
  .portfolio {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &_card {
      width: 25rem;
      height: 16rem;
    }
  }
}
</style>
