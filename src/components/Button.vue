<template>
  <div class="container button_wrapper">
    <button><a href="#portfolio">Veja meus trabalhos</a></button>
  </div>
</template>

<style lang="scss" scoped>
button {
  border: none;
  height: 2.5rem;
  width: 12rem;
  text-align: center;
  background: rgb(217, 139, 253);
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  box-shadow: 4px 5px 13px 0px #080839;
  cursor: pointer;
  border-radius: 4px;


  &:hover {
    background: transparent;
    border:  2px solid pink;
  }
}

a {
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border: none;
  }
}

.button_wrapper {
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
    margin-top: 5rem;
    transition: all.3s;

    &:hover {
      transform: translateY(-8px);
    }
  }
}
</style>
