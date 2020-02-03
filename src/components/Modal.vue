<template>
  <div v-if="show" class="modal_wrapper">
    <div class="modal_content">
      <div class="btn_exitWrapper">
        <a class="btn_close" @click="$emit('close')">
          <font-awesome-icon icon="window-close"/>
        </a>
      </div>
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
.modal {
  &_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  z-index: 9950;
  padding: 2rem;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
 }

 &_content {
   background: rgb(214, 209, 209);
   border-radius: 4px;
   opacity: 1;
   z-index: 9999;
   padding: 2rem;

 }
}

.btn {
  display: flex;
  justify-content: space-around;

  &_close {
    font-size: 2rem;
    background: none;
    margin-bottom: 1.5rem;
    border: none;
    color: rgb(192, 145, 206);
    cursor: pointer;
    transition: transform 1s;

    &:hover {
      -webkit-transform: scale(.6);
      -ms-transform: scale(.6);
      transform: scale(.6);
    }
  }

  &_exitWrapper {
    justify-content: flex-end;
    display: flex;
  }

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
