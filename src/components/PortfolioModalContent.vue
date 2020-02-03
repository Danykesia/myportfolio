<template>
  <div class="portfolio_modal_content">
    <PortfolioCard :lapTopImgSrc="lapTopImgSrc" :mobileImgSrc="mobileImgSrc"/>
    <div class="btn">
      <a :href="linkDemo" target="_blank" class="btn_demo">Ver demo
        <font-awesome-icon class="btn_iconInside" icon="eye"/>
      </a>
      <a :href="linkCode" target="_blank" class="btn_code">Ver código
        <font-awesome-icon class="btn_iconInside" icon="code"/>
      </a>
    </div>
  </div>
</template>

<script>
import PortfolioCard from '@/components/PortfolioCard.vue';

export default {
  components: {
    PortfolioCard,
  },
  props: {
    lapTopImgSrc: String,
    mobileImgSrc: String,
    show: Boolean,
    linkCode: String,
    linkDemo: String,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: space-around;

  &_demo {
    background-color: rgb(81, 201, 81);
    border: none;
    font-size: .8rem;
    font-weight: bold;
    padding: 1rem;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #260b47;
    text-transform: uppercase;

    &:hover {
      background-color: rgb(89, 255, 89);
    }
  }

  &_code {
    background-color: rgb(231, 131, 101);
    border: none;
    font-size: .8rem;
    font-weight: bold;
    padding: 1rem;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #260b47;
    text-transform: uppercase;

    &:hover {
      background-color: rgb(247, 109, 67);
    }
  }

  &_iconInside {
    margin-left: .3rem;
    color: #260b4788;
  }
}
</style>
