<template>
  <div id="app">
    <Navbar/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<style lang="scss">

@use '~@growstocks/stack/Core/Theme';

$primary: #fff;
$secondary:rgb(46, 161, 255);

:root {
  @include Theme.config(
      $primary,
      $secondary,
      $patreon: #FF424D,
      $discord: rgb(19, 51, 168),
      $join: #FFC107,
  );
}

body::-webkit-scrollbar {
  background: var(--sc-theme--primary);
  width: 10px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sc-theme--discord);
}

* {
  box-sizing: border-box;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
  width: max-content;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}

svg {
  display: block;
}

section.hero {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0;
  background-color: transparent;
  padding: 0;

  h4 {
    font-size: 1.3rem;
    font-weight: 300 !important;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: calc(100% - 1rem);
    }
  }
}
</style>
