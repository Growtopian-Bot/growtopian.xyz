<template>
<div class="content">
<div class="jumbotron">
    <img class="logo" src="~/assets/growtopian.png" alt="logo">
    <h2>Growtopia Themed Discord Bot</h2>
    <div class="info">
        <p>That's the Growtopia themed Discord bot you're looking for! <b>Growtopian</b> is one of the most used Discord Bot for Growtopia Discord servers. Games, trivias, search item names - infos, calculations, server moderation and a ton more!</p>
    </div>
    <div class="buttons">
        <a class="btn btn-info" type="button" data-toggle="modal" data-target="#myModal"><img src="https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"> Add To Server</a>
        <router-link class="btn btn-info" to="/commands">Commands</router-link>
    </div>
  </div>
  <section id="servers" class="container">
      <h1>Featured Servers</h1>
      <div class="serverlist">
          <div class="sv card" v-for="(server, key) in sv" :key="key">
              <div class="c-header">
                <img v-bind:src="server.img" alt="svlogo" class="sv-img">
                  <a v-bind:href="server.invite" class="btn btn-warning" target="#">Join</a>
                  <div class="title">
                      <img src="~/assets/partnered.webp" v-if="server.partnered" class="partner"><h4>{{ server.name }}</h4>
                      <small class="description">{{ server.description }}</small>
                  </div>
              </div>
          </div>
      </div>
    <a class="btn btn-success" target="#" href="https://www.patreon.com/join/phemus">Apply to Get Featured</a>
  </section>
</div>
</template>

<script>
import serverList from './serverlist.json';

export default {
    data() {
        return {
            sv: serverList
        }
    }   
}
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("https://fonts.cdnfonts.com/css/pf-beausans-pro");

$font-1: "Roboto", sans-serif;
$font-2: "PF BeauSans Pro", sans-serif;

.buttons {
    .btn {
        margin: 10px;
        font-size: 1.2em;
        font-weight: bold;
        width: 12em;
        height: 3em;
        padding-top: 12px;
    }
}

.content {
    margin-bottom: 10%;
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
        margin: 10px
    }

    .sv {
        width: 18em;
        background-color: rgb(103,168,240);
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
            padding-top: .5em;
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
  border-radius: 0;
  font-family: $font-1;
  text-align: center;
  background-size: cover;
  justify-content: center;
  background-image: url('~assets/bck.webp');
  min-height: 79vh;
  height: fit-content;

  img.logo {
      width: 8em;
  }

  
  @media only screen and (max-width: 600px) {
      img.logo {
          margin-top: 1em;
      }

      h2 {
          margin-top: .5em;
      }

      height: fit-content;
}

  h2 {
    transition-timing-function: ease;
    font-size: 3em;
    color: white;
    font-family: $font-2;
    text-shadow: 5px 5px rgba($color: #000000, $alpha: 0.5);
    animation: fadein 2s;
  }

  .info {
    font-size: 20px;
    max-width: 800px;
    margin: 2em auto;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;

  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

  img {
    width: 20%;
  }
}
</style>