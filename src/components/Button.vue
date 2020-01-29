<template>
  <div class="container button-wrapper">
    <button><a href="#portfolio">Veja meus trabalhos</a></button>
  </div>
</template>

<style lang="scss" scoped>
button {
  border: 2px solid pink;
  height: 2.5rem;
  width: 12rem;
  text-align: center;
  background: transparent;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 4px 5px 13px 0px #080839;
}

a {
  color: #fff;
  font-size: 1rem;
  // font-weight: bold;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

        @media (min-width: 576px) {
          button {
            height: 2.8rem;
            width: 14rem;
          }

          a {
            font-size: 1.2rem;
          }
        }

        @media (min-width: 768px) and (min-width: 991px) {
          button {
            margin-top: 3rem;
            margin-bottom: 3rem;
          }
        }

        @media (min-width: 992px) {
          button {
            margin-top: 6rem;
          }
        }
</style>
