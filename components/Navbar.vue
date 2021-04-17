<template>
  <div v-bind:class="'navbar' + (navMenu ? ' shadow-area' : '')">
    <div class="cont">
      <NuxtLink class="logo" to="/"><h1>Growtopian</h1></NuxtLink>

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
            <NuxtLink to="/#servers">Public Servers</NuxtLink>
          </li>
          <li><NuxtLink to="/commands">Commands</NuxtLink></li>
          <li>
            <a href="https://discord.gg/mPKz9gV" target="#">Support Server</a>
          </li>
          <li><NuxtLink to="/premium">Premium</NuxtLink></li>
        </ul>

        <ul class="secondary-nav">
          <li>
            <a
              class="patreon-cta"
              href="https://patreon.com/growtopian"
              target="#"
              >Patreon</a
            >
          </li>
          <li>
            <a
              class="addsv-cta"
              href="https://discord.com/oauth2/authorize?client_id=591564657714528266&scope=bot&permissions=8&redirect_uri=https://discord.com/invite/mPKz9gV"
              target="_blank"
              >Add To Server</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
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
      this.navMenu = !this.navMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background: #009de0;
  padding: .5em .8em;
}

@keyframes animate {
  from {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
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

.addsv-cta {
  background-color: rgb(36, 83, 119);
  color: white;
  font-weight: bold;
  white-space: nowrap;

  &:hover {
    background-color: rgba(70, 131, 180, 0.671);
    cursor: pointer;
  }
}

.patreon-cta {
  background-color: rgb(255, 49, 49);
  color: white;
  font-weight: bold;
  white-space: nowrap;

  &:hover {
    background-color: rgb(253, 107, 107);
    cursor: pointer;
  }
}

.navbar .logo {
  text-decoration: none;
  font-weight: bold;
  color: white;

  h1 {
    display: inline-block;
    padding: 0;
    margin: 0;
  }
}

nav.menu-btn {
  display: block;
  animation: animate 0.2s;
  border-radius: 15px 0 0 15px;
}

nav {
  position: fixed;
  z-index: 999;
  width: 70%;
  height: calc(100vh - 2rem);
  right: 0;
  top: 0;
  background: #f2f2f2;
  padding: 1em;
  display: none;
  border-left: 1px solid rgba(207, 207, 207, 0.212);
}

nav h1 {
  display: inline;
}

nav hr {
  padding: 0;
  width: 90%;
  margin: 2em auto;
  border: none;
  border-top: 1px solid gray;
}

.navbar.shadow-area::after {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.555);
  content: "";
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}

.navbar .cont {
  display: flex;
  place-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar ul.primary-nav {
  margin-top: 3em;
}

.primary-nav a {
  color: black;

  &:hover {
    text-decoration: underline;
  }
}

.navbar li a {
  display: block;
  padding: 0.5em;
  font-size: 1.3em;
  text-align: left;
  text-decoration: none;
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

.secondary-nav a {
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
  text-decoration: none;
  margin: 1em auto;
}

@media only screen and (min-width: 1072px) {
  .mobile-menu-exit,
  .mobile-menu {
    display: none;
  }

  .navbar {
    padding: 1em;
  }

  .navbar li a {
    padding: 6px 12px;
    font-size: 18px;
  }

  .secondary-nav a {
    margin: 0 10px;
  }

  .navbar .cont {
    display: grid;
    grid-template-columns: 180px auto;
    justify-content: unset;
    align-items: center;
    width: 90%;
  }

  .navbar nav {
    display: flex;
    justify-content: space-between;
    position: unset;
    height: auto;
    width: 100%;
    padding: 0;
    background: unset;
  }

  .navbar nav ul {
    display: flex;
  }

  .navbar .primary-nav a {
    font-size: 1em;
    padding: 0.1em 1em;
    font-weight: 700;
  }

  .navbar ul.primary-nav {
    margin: 0 auto;
  }

  .navbar.shadow-area::after {
    display: none;
  }

  .primary-nav a {
    color: white;
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