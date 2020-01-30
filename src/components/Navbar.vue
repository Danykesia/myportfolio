<template>
  <nav id="navbar" class="navbar">
    <div class="toggle_mobile">
      <img href="/" class="navbar_logo" src="../assets/DANIELE..png" alt="DANIELE">
      <button id="toggle" class="navbar_toggle" @click="showMenu = !showMenu">
        <font-awesome-icon icon="bars"/>
      </button>
    </div>

    <ul class="navbar_links" :class="{'showMenu': showMenu}">
      <li>
        <a href="#" class="active" exact>Home</a>
        <a href="#portfolio" active-class="active" exact>Portfolio</a>
        <a href="#contato" active-class="active" exact>Contato</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    window.onscroll = function scrollFunction() {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById('navbar').style.background = '#5e2a634b';
      } else {
        document.getElementById('navbar').style.background = 'transparent';
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.toggle_mobile {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.navbar {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  position: absolute;
  padding-top: 2rem;

  &_logo {
    margin-left: 2rem;
    max-height: 40px;
    height: 25px;
  }

  &_toggle {
    margin-right: 2rem;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: purple;
    background: rgba(183, 112, 216, 0.137);
    border-radius: 3px;
    padding: .3rem .6rem;
    display: flex;
  }

  & ul {
    display: none;

    & li a {
      display: flex;
      justify-content: center;
      color: white;
      font-weight: bold;
      border-top: 1px solid rgba(128, 128, 128, 0.281);
      padding-bottom: .5rem;
      padding-top: .5rem;

      &.active {
      color: #260b47;
      }
    }
  }

  & ul.showMenu {
    display: block;
    width: 100%;
    background: linear-gradient(to left top, #6017fb, #6b657a);
    border-right: 3px solid white;
    border-left: 3px solid white;
    margin-top: 1rem;
    padding: 0;
  }
}

@media (min-width: 768px){
  .navbar{
    position: fixed;
    height: 60px;
    flex-direction: row;
    background: none;
    padding-top: 0;
    z-index: 1000;
    left: 0;
    right: 0;

    &_logo {
      margin-left: 4rem;
    }

    & ul {
      background: none;
      border: none;
      margin-top: 0;

      &, ul.showMenu {
        display: flex;
      }

      & li {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-right: 4rem;

        & a {
          border: none;
          margin-left: 1.5rem;
          transition: all 0.3s ease 0s;
          border-bottom: 1px solid transparent;
          animation-name: moveInLeft;
          animation-duration: 1s;
          animation-timing-function: ease-out;

          &:hover {
            color: #260b47;
            border-bottom: 1px solid #260b47;
          }

          &.active {
            border-bottom: 1px solid #260b47;
          }
        }
      }
    }

    &_toggle {
      display: none;
    }
  }
}
</style>
