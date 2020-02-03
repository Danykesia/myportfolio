<template>
  <button class="search" @click="$emit('click')">
    <font-awesome-icon icon="search-plus"/>
  </button>
</template>

<style lang="scss" scoped>
.search {
  transition: .5s ease;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background: none;
  border: none;
  font-size: 2.5rem;
  color: rgb(255, 219, 219);
  cursor: pointer;
  outline: none;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
}
</style>
