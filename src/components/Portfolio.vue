<template>
  <section id="portfolio" class="container">
    <h3>Portfolio</h3>

    <hr>
    <div id="card" class="portfolio">
      <PortfolioCard
        :lapTopImgSrc="require('../assets/imobLaptop.png')"
        :mobileImgSrc="require('../assets/imobMobile.png')">
        <PopUp @click="displayModal(
          require('../assets/imobLaptop.png'),
          require('../assets/imobMobile.png'),
          'https://github.com/Danykesia/imobiliaria-project',
          'https://www.danykalmeida.com/imobiProject',
        )"/>
      </PortfolioCard>
      <PortfolioCard
        :lapTopImgSrc="require('../assets/lawyerLaptop.png')"
        :mobileImgSrc="require('../assets/lawyerMobile.png')">
        <PopUp @click="displayModal(
          require('../assets/lawyerLaptop.png'),
          require('../assets/lawyerMobile.png'),
          'https://github.com/Danykesia/advocacia-project',
          'https://danykalmeida.com/advProject',
        )"/>
      </PortfolioCard>
      <PortfolioCard
        :lapTopImgSrc="require('../assets/motionLaptop.png')"
        :mobileImgSrc="require('../assets/motionMobile.png')">
        <PopUp @click="displayModal(
          require('../assets/motionLaptop.png'),
          require('../assets/motionMobile.png'),
          'https://github.com/Danykesia/motion-project',
          'https://www.danykalmeida.com/motionProject',
        )"/>
      </PortfolioCard>
      <PortfolioCard
        :lapTopImgSrc="require('../assets/workoutLaptop.png')"
        :mobileImgSrc="require('../assets/workoutMobile.png')">
        <PopUp @click="displayModal(
          require('../assets/workoutLaptop.png'),
          require('../assets/workoutMobile.png'),
          'https://github.com/Danykesia/workout-project',
          'https://www.danykalmeida.com/workoutProject',
        )"/>
      </PortfolioCard>
      <PortfolioCard
        :lapTopImgSrc="require('../assets/portfolioLaptop.png')"
        :mobileImgSrc="require('../assets/portfolioMobile.png')">
        <PopUp @click="displayModal(
          require('../assets/portfolioLaptop.png'),
          require('../assets/portfolioMobile.png'),
          'https://github.com/Danykesia/myportfolio',
          'https://www.danykalmeida.com',
        )"/>
      </PortfolioCard>
    </div>

    <Modal
      :show="showModal"
      @close="closeModal()">
      <PortfolioModalContent
        :lapTopImgSrc="lapTopImgSrc"
        :mobileImgSrc="mobileImgSrc"
        :linkCode="linkCode"
        :linkDemo="linkDemo"/>
    </Modal>
  </section>
</template>

<script>
import PortfolioCard from '@/components/PortfolioCard.vue';
import PopUp from '@/components/PopUp.vue';
import Modal from '@/components/Modal.vue';
import PortfolioModalContent from '@/components/PortfolioModalContent.vue';

export default {
  components: {
    PortfolioCard,
    PopUp,
    Modal,
    PortfolioModalContent,
  },
  data() {
    return {
      showModal: false,
      lapTopImgSrc: '',
      mobileImgSrc: '',
      linkCode: '',
      linkDemo: '',
    };
  },
  methods: {
    displayModal(lapTopImgSrc, mobileImgSrc, linkCode, linkDemo) {
      document.querySelector('body').style.overflow = 'hidden';
      this.showModal = true;
      this.lapTopImgSrc = lapTopImgSrc;
      this.mobileImgSrc = mobileImgSrc;
      this.linkCode = linkCode;
      this.linkDemo = linkDemo;
    },
    closeModal() {
      document.querySelector('body').style.overflow = 'auto';
      this.showModal = false;
    },
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
  max-width: 2000px;
}

@media (min-width: 768px) and (max-width: 991px) {
  .portfolio {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media (min-width: 992px) {
  .portfolio {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
