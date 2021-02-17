<template>
  <div class="content">
    <div class="jumbotron">
      <img class="logo" src="~/assets/growtopian.webp" alt="logo" />
      <h2>Growtopia Themed Discord Bot</h2>
      <div class="info">
        <p>
          Growtopian is an economy-bot that will make your time fun while grinding for gems. Oh yeah, it also has lots of great tools for players of game Growtopia!
        </p>
      </div>
      <div class="buttons">
        <a
          class="btn invite btn-info"
          data-toggle="modal"
          data-target="#myModal"
          ><span><img src="~/assets/discord-logo.svg" alt="discord-logo" /> Add To Server</span></a
        >
        <router-link class="btn btn-info" to="/commands"
          ><span>Commands</span></router-link
        >
      </div>
    </div>
    <section id="servers" class="container">
      <h1>Featured Servers</h1>
      <div class="serverlist">
        <div class="sv card" v-for="(server, key) in sv" :key="key">
          <div class="c-header">
            <img v-bind:src="server.img" alt="svlogo" class="sv-img" />
            <a v-bind:href="server.invite" class="btn btn-warning" target="#"
              >Join</a
            >
            <div class="title">
              <img
                src="~/assets/partnered.webp"
                v-if="server.partnered"
                class="partner"
                alt="partner-icon"
              />
              <h4>{{ server.name }}</h4>
              <small class="description">{{ server.description }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import serverList from "./serverlist.json";

export default {
  data() {
    return {
      sv: serverList
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

@font-face {
  font-family: "PF BeauSans Pro";
  font-style: normal;
  font-weight: 700;
  src: local("PF BeauSans Pro"),
    url("https://fonts.cdnfonts.com/s/12902/UFONTS.COM_PFBEAUSANSPRO-BOLD.woff")
      format("woff");
  font-display: swap;
}

$font-1: "Roboto", sans-serif;
$font-2: "PF BeauSans Pro", sans-serif;


.jumbotron::before {
  content: url('~assets/cloud.webp');
  width: 700px;
  position: absolute;
  height: auto;
  top: 20%;
  animation: linear;
  -webkit-animation: linear;
  animation-name: run;
  -webkit-animation-name: run;
  animation-duration: 80s;
  -webkit-animation-duration: 80s;
  animation-iteration-count: infinite;

  @media only screen and (max-width: 600px) {
    display: none;
  }
}


@keyframes run {
  0% { left: 0; }
  50% { left: 100%; }
  100% { left: 0; }
}

.buttons {
  a.btn {
    margin: 24px;
    width: 20em;
    height: 3.5em;
    border-radius: 28px;
    background-color: rgb(46, 161, 255);

    &:hover {
      background-color: rgb(25, 115, 189);
      box-shadow: 0px 2px 5px rgba(77, 77, 77, 0.7);
    }

    &.invite {
      background-color: white;
      color: rgb(65, 168, 253);

      &:hover {
        background-color: rgb(241, 241, 241);
      }
    }

    span {
      font-size: 20px;
      font-weight: bold;
      line-height: 40px;

      img {
        width: 35px;
      }
    }
  }
}

h1 {
  font-weight: bold;
}

#servers {
  margin-top: 7em;
  text-align: center !important;

  .serverlist {
    justify-content: center;
    display: flex;
    margin-top: 4em;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .btn.btn-success {
    font-size: 1.5em;
    margin-top: 5%;
  }

  .c-header {
    margin: 10px;
  }

  .sv {
    width: 18em;
    background-color: rgb(103, 168, 240);
    margin: 2em;
    border-radius: 5px;
    border: none;
    box-shadow: 5px 5px 1px rgba($color: #000000, $alpha: 0.75);
    transition: 0.4s;

    &:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }

    .title {
      margin-top: 1em;

      .description {
        border-top: lightskyblue 2px solid;
        font-weight: 500;
        color: #ffe3e3;
        margin-top: 1.2em;
        padding-top: 0.5em;
        display: block;
        line-height: 1.2;
      }
    }

    h4 {
      margin-top: 5px;
      font-size: 20px;
      color: oldlace;
      display: inline;
    }

    img.partner {
      margin-top: -3px;
      margin-right: 5px;
      width: 1.5em;
      height: 1.5em;
      display: inline;
    }

    .btn {
      margin-top: 8px;
      width: 7em;
      font-weight: bold;
      border: 1px rgba(77, 77, 77, 0.7) solid;
    }

    img.sv-img {
      float: left;
      margin-top: -50px;
      margin-right: 15px;
      width: 5em;
      height: 5em;
      border-radius: 50%;
      border: 3px white solid;
    }
  }
}

.jumbotron {
  background-color: #00a8ea;
  background-image: url("~assets/bg.webp");
  background-position-y: 5%;
  border-radius: 0;
  font-family: $font-1;
  text-align: center;
  background-size: cover;
  justify-content: center;
  min-height: 79vh;
  height: fit-content;

  img.logo {
    width: 8em;
  }

  @media only screen and (max-width: 600px) {

    .buttons {
      a.btn {
        margin: 24px 0;
      }
    }

    img.logo {
      margin-top: 1em;
    }

    h2 {
      margin-top: 0.5em;
    }

    height: fit-content;
  }

  h2 {
    font-size: 3em;
    color: white;
    font-family: $font-2;
    text-shadow: 5px 5px rgba($color: #000000, $alpha: 0.5);
  }

  .info {
    font-size: 20px;
    max-width: 800px;
    margin: 2em auto;
    background: rgba(255, 255, 255, 0.836);
    border-radius: 10px;
    padding: .5em;
  }

  img {
    width: 20%;
  }
}
</style>
