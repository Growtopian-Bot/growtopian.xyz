<template>

  <div class="hero">

    <img class="hero__icon" src="/icon.png" alt="logo"/>
    <h1 class="hero__title">Growtopian - Discord Bot</h1>
    <Card class="hero__motto">
      Growtopian is an economy-bot that will make your time fun while
      grinding for gems.
      <br>
      Oh yeah, it also has lots of great tools for
      players of game Growtopia!
    </Card>

    <div class="buttons hero__actions">
      <Button
        path="https://discord.com/oauth2/authorize?client_id=591564657714528266&scope=bot&permissions=8&redirect_uri=https://discord.com/invite/mPKz9gV"
        label="Add To Server"
        styles="btn btn--invite"
        has-logo
      />
      <Button
        path="/commands"
        label="Commands"
        styles="btn"
        is-routed
      />
    </div>
  </div>

</template>

<script>
export default {
  name: "Hero"
}
</script>

<style lang="scss" scoped>

  @keyframes run {
    0% {
      left: 0;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }

  .hero {
    user-select: none;
    background-image: url('~/assets/bg-min.jpg');
    background-color: #00A8EA;
    background-position-y: 5%;
    text-align: center;
    background-size: cover;
    min-height: 79vh;
    height: fit-content;
    padding-bottom: 25px;

    @media only screen and (max-width: 600px) {
      height: fit-content;
    }

    &::after {
      content: url('~assets/cloud.png');
      width: 700px;
      position: absolute;
      height: auto;
      top: 10%;
      animation: linear;
      -webkit-animation: linear;
      animation-name: run;
      -webkit-animation-name: run;
      animation-duration: 160s;
      -webkit-animation-duration: 160s;
      animation-iteration-count: infinite;
      z-index: 0;

      @media only screen and (max-width: 600px) {
        display: none;
      }
    }

    .hero__title {
      display: inline-block;
      width: calc(100% - 50px);
      margin: 0.5em 0 0;
      font-size: 3em;
      color: white;
      font-family: 'Hammersmith One', sans-serif;
      text-shadow: 5px 5px rgba($color: #000000, $alpha: 0.5);
    }

    .hero__motto {
      width: 85%;
      margin-bottom: 2em;
    }

    .hero__icon {
      margin: 3em 0 0 0;
      z-index: 1;
      position: relative;
      width: 8em;

      @media only screen and (max-width: 600px) {
        margin-top: 1em;
      }
    }

    img {
      width: 20%;
    }

    .hero__actions {
      width: calc(100% - 40px);
      max-width: 1077px;
      margin: 0 auto;
      position: relative;
      z-index: 0;
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      gap: 20px;

      .btn {
        font-size: 20px!important;
      }

      &::before {
        content: url('~assets/cloud.png');
        width: 300px;
        position: absolute;
        height: auto;
        bottom: 15%;
        filter: drop-shadow(2px 0 white);
        animation: linear;
        -webkit-animation: linear;
        animation-name: run;
        -webkit-animation-name: run;
        animation-duration: 160s;
        -webkit-animation-duration: 160s;
        animation-iteration-count: infinite;
        z-index: -1;

        @media only screen and (max-width: 600px) {
          display: none;
        }
      }
    }
  }
</style>
