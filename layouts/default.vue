<template>
  <div id="app">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
}

svg {
  display: block;
}

section.jumbotron {
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

.btn {
    display: inline-flex;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    line-height: 1.5;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    box-shadow: 2px 2px 0 #000;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;

    &.btn-warning {
      background: #ffc107;
      color: black;
      padding: .375rem .75rem;
    }

    &.btn-light {
      background: white;
      color: black;
      padding: 6px 12px;

      &:hover {
        background: lightgray;
      }
    }

    &.btn-info {
      background: #17a2b8;
      color: white;
      font-size: 1rem;
      padding: 6px 12px;
      box-shadow: none;
    }

    &.btn-block {
      display: block;
    }

    &.btn-danger {
      background: rgb(255, 52, 52);
      font-weight: bold !important;
      padding: .5em;

      &:hover {
        background: rgb(255, 123, 123);
      }
    }

    img {
      vertical-align: middle;
    }
}
</style>
