<template>
  <header>
    <div v-if="navMenu" class="shadow" @click="toggleNav"></div>

    <div class="cont">
      <NuxtLink class="header__logo" to="/">
        <h1 class="header__title">Growtopian</h1>
      </NuxtLink>

      <img
        id="mobile-cta"
        class="mobile-menu"
        src="~/assets/menu.png"
        alt="menu"
        @click="toggleNav"
      />

      <nav v-bind:class="navMenu ? 'menu-btn' : ''" @click="toggleNav">
        <div class="nav-head">
          <img
            id="mobile-exit"
            class="mobile-menu-exit"
            src="~/assets/close.png"
            alt="close menu"
          />
          <NuxtLink class="nav-logo" to="/"><h1>Growtopian</h1></NuxtLink>
        </div>
        <hr />
        <ul class="primary-nav">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/commands">Commands</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rules">Rules</NuxtLink>
          </li>
          <li>
            <a href="https://discord.gg/mPKz9gV" target="#">Support Server</a>
          </li>
          <li><NuxtLink to="/premium">Premium</NuxtLink></li>
        </ul>

        <ul class="secondary-nav">
          <li>
            <Button
              styles="btn btn--patreon"
              target="#"
              label="Patreon"
              path="https://patreon.com/growtopian"
            />
          </li>
          <li>
            <Button
              styles="btn btn--discord"
              target="_blank"
              label="Add To Server"
              path="https://discord.com/oauth2/authorize?client_id=591564657714528266&scope=bot&permissions=277025778752&redirect_uri=https://discord.com/invite/mPKz9gV"
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navMenu: false,
    };
  },
  methods: {
    toggleNav: function () {
      if (window.matchMedia("(max-width: 1072px)").matches) this.navMenu = !this.navMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~@growstocks/stack/Core/Elevation';
@use '~@growstocks/stack/Core/Shape';

@import "~assets/scss/button-theme";

header {
  background: #009de0;
  padding: 0.5em 0.8em;

  .header__logo {
    text-decoration: none;
    font-weight: bold;
    color: white;

    .header__title {
      font-family: "Hammersmith One", sans-serif !important;
      font-size: 2rem;
      padding: 0;
      margin: 0;
      text-shadow: 3px 3px rgba($color: #000000, $alpha: 0.5);
    }
  }

  .cont {
    display: flex;
    place-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    &.primary-nav {
      a {
        color: black;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  li a {
    display: block;
    padding: 0.5em;
    font-size: 1.3em;
    text-align: left;
    text-decoration: none;
  }
}

.nav-logo {
  text-decoration: none;
  display: inline-block;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
}

#myModal {
  display: block !important;
}

nav {
  position: fixed;
  z-index: 999;
  width: 70vw;
  height: 100vh;
  right: 0;
  top: 0;
  background: #f2f2f2;
  padding: 1em;
  display: none;
  border-left: 1px solid rgba(207, 207, 207, 0.212);

  &.menu-btn {
    display: block;
    animation: animate 0.2s;
    border-radius: 15px 0 0 0;
  }

  h1 {
    display: inline;
  }

  hr {
    padding: 0;
    width: 90%;
    margin: 1em auto;
    border: none;
    border-top: 1px solid gray;
  }
}

.mobile-menu {
  height: 35px;
  width: auto;
  cursor: pointer;
  filter: invert(100%);
}

.mobile-menu-exit {
  float: right;
  margin: 0.3em;
  width: 20px;
  cursor: pointer;
}

.secondary-nav {
  .btn {
    padding: 6px 12px !important;
    text-decoration: none !important;
    margin: 1em 0 !important;
    font-size: 14px;

    @include Shape.apply($_shape-theme-nav);
  }

  @media only screen and (min-width: 1072px) {
    & > * + * {
      margin-left: 10px;
    }
  }
}

@keyframes animate {
  from {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

.shadow {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.555);
  content: "";
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}

@media only screen and (min-width: 1072px) {
  .mobile-menu-exit,
  .mobile-menu {
    display: none;
  }

  .secondary-nav .btn {
    margin: 1em 1em;
  }

  .shadow {
    display: none;
  }

  header {
    padding: 1em;

    .primary-nav a {
      font-size: 1em;
      padding: 0.1em 1em;
      font-weight: 700;
    }

    li a {
      padding: 6px 12px;
      font-size: 18px;
    }

    .cont {
      display: grid;
      grid-template-columns: 180px auto;
      justify-content: unset;
      align-items: center;
      width: 90%;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: unset;
      height: auto;
      width: 100%;
      padding: 0;
      background: unset;

      ul {
        display: flex;
      }

      ul.primary-nav {
        margin: 0 auto;
      }
    }
  }

  .primary-nav a {
    color: white !important;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  nav {
    border: none;

    .menu-btn {
      animation: none;
    }

    li {
      margin-top: 5px;
    }
  }

  nav hr,
  nav h1 {
    display: none;
  }
}
</style>
