<template>
  <div class="information container">
    <div class="information_local">
      <h1>LOCAL</h1>
      <p>Recife - Brasil</p>
    </div>
    <div>
      <a href="https://github.com/Danykesia/" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" class="information_social"/>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.information {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;

  &_local {
    text-align: center;
    color: rgb(48, 46, 46);

    & h1 {
      margin-bottom: .5rem;
    }
  }

  &_social {
    font-size: 3.5rem;
    color: rgba(48, 46, 46, 0.658);

    &:hover {
      color: white;
    }
  }
}
</style>
