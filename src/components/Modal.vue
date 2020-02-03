<template>
  <div v-if="show" class="modal_wrapper">
    <div class="modal_content">
      <div class="btn_exitWrapper">
        <a class="btn_close" @click="$emit('close')">
          <font-awesome-icon icon="window-close"/>
        </a>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
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
}
</style>
