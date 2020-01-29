<template>
  <nav id="navbar" class="container navbar">
    <img href="/" class="navbar_logo" src="../assets/DANIELE..png" alt="DANIELE">

    <ul class="navbar_links menu">
      <li>
        <a href="/" class="active" exact>Home</a>
        <a href="#portfolio" active-class="active" exact>Portfolio</a>
        <a href="#contato" active-class="active" exact>Contato</a>
      </li>
    </ul>

    <font-awesome-icon class="navbar_btn" icon="bars"/>
  </nav>
</template>

<script>
export default {
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
  .navbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-top: 1rem;
    position: fixed;
    height: 60px;

    &_logo {
      height: 1.87rem;
      width: 8.12rem;
    }

    &_btn {
      cursor: pointer;
      font-size: 2rem;
      color: purple;
    }
  }

.menu {
    display: none;
  }

        @media (min-width: 992px) {
          .navbar {
            &_btn {
              display: none;
            }

            &_links li a {
              margin: 0 1rem;
              color: white;
              transition: all 0.3s ease 0s;
              font-weight: bold;

                &:hover {
                  color:  #260b47;
                  border-bottom: 1px solid #260b47;
                }

              &:last-child {
                margin-right: 0;
              }
            }

            & a {
              border-bottom: 1px solid transparent;
              padding-bottom: .4rem;

              &:hover {
                border-bottom: 1px solid #260b47;
              }
            }
          }

          li a.active {
            color: #260b47;
            border-bottom: 1px solid #260b47;
          }

          .menu {
            display: flex;
          }

          #btn {
            display: none;
          }
        }
</style>
