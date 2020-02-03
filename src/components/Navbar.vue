<template>
  <nav id="navbar" class="navbar">
    <div class="toggle_mobile">
      <a href="/"><img class="navbar_logo" src="../assets/DANIELE..png" alt="DANIELE"></a>
      <button id="toggle" class="navbar_toggle" @click="showMenu = !showMenu">
        <font-awesome-icon class="navbar_icon" icon="bars"/>
      </button>
    </div>

    <ul class="navbar_links" :class="{'showMenu': showMenu}">
      <li>
        <a href="#home" class="active">Home</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contato">Contato</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrollYPosition: null,
      hashLinks: [],
      showMenu: false,
      html: undefined,
      body: undefined,
    };
  },
  computed: {
    viewportOffset() {
      return 300;
    },
  },
  watch: {
    $route() {
      this.showMenu = false;
    },
  },
  mounted() {
    window.onscroll = () => {
      this.updateScroll();
      this.updateNavLinkClass();

      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById('navbar').style.background = '#5e2a634b';
      } else {
        document.getElementById('navbar').style.background = 'transparent';
      }
    };

    this.addSmoothScrollOnAnchorClick();
  },
  methods: {
    updateScroll() {
      this.scrollYPosition = window.scrollY;
    },
    updateNavLinkClass() {
      for (let i = 0; i < this.hashLinks.length; i += 1) {
        const element = document.querySelector(
          `[ href="#${this.hashLinks[i]}" ]`,
        );
        if (this.isInViewport(this.hashLinks[i])) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      }
    },
    isInViewport(id) {
      const element = document.getElementById(id);
      const bounding = element.getBoundingClientRect();
      return (
        bounding.top <= this.viewportOffset
        && bounding.bottom >= this.viewportOffset
        && bounding.left >= 0
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    scroll(from, to, hash) {
      const timeInterval = 1; // in ms
      let prevScrollTop;
      const increment = to > from ? 20 : -20;
      const scrollByPixel = setInterval(() => {
        // getting current scroll position
        const scrollTop = Math.round(this.body.scrollTop || this.html.scrollTop);
        if (
          prevScrollTop === scrollTop
          || (to > from && scrollTop >= to)
          || (to < from && scrollTop <= to)
        ) {
          clearInterval(scrollByPixel);
          window.location.hash = hash; // Add hash to the url after scrolling
        } else {
          this.body.scrollTop += increment;
          this.html.scrollTop += increment;
          prevScrollTop = scrollTop;
        }
      }, timeInterval);
    },
    onAnchorClick(event, hash, hashElement) {
      event.preventDefault(); // preventing default anchor click behavior
      // getting current scroll position
      const scrollTop = Math.round(this.body.scrollTop || this.html.scrollTop);
      let hashElementTop = 0;
      let obj = hashElement;

      while (obj.offsetParent) {
        hashElementTop += obj.offsetTop;
        obj = obj.offsetParent;
      }
      hashElementTop = Math.round(hashElementTop); // getting element's position
      this.scroll(scrollTop, hashElementTop, hash);
    },
    addSmoothScrollOnAnchorClick() {
      const { links } = document;
      this.html = document.documentElement;
      this.body = document.body;

      for (let i = 0; i < links.length; i += 1) {
        const href = links[i].getAttribute('href');
        const id = href.substring(1);
        const hashElement = document.getElementById(id);

        if (hashElement) {
          this.hashLinks.push(id);
          links[i].onclick = event => this.onAnchorClick(event, href, hashElement);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle_mobile {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-content: center;
  align-items: center;
  padding: 0;
}

.navbar {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  position: absolute;
  z-index: 1000;
  padding: 1rem 0;

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

    &:focus {
      outline: none;
      border: none;
    }
  }

  & ul {
    display: none;

    & li {
      font-weight: bold;
      border-top: 1px solid rgba(128, 128, 128, 0.281);
      padding-bottom: .5rem;
      padding-top: .5rem;
      text-align: center;

      & a {
        color: rgb(251, 206, 255);
      }

      &:focus {
        border: none;
        outline: none;
      }

      & a.active {
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
  }
}

@media (min-width: 768px){
  .navbar{
    position: fixed;
    height: 60px;
    flex-direction: row;
    background: none;
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
        border: 0;
      }

      & li {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        border-top: none;

        &:nth-last-of-type(1) {
          margin-right: 4rem;
        }

        & a {
          border: none;
          margin-left: 2.5rem;
          transition: all 0.3s ease 0s;
          border-bottom: 1px solid transparent;

          &:hover {
            color: #260b47;
            border-bottom: 1px solid #260b47;
          }

          &:focus {
            border: none;
            outline: none;
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
