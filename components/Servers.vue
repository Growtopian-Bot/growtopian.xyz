<template>
  <section class="servers">
    <TitleBar>Featured Servers</TitleBar>
    <div class="server-list">
      <div class="server" v-for="(server, key) in server" :key="key">
        <div class="c-header">

          <img v-bind:src="server.img" alt="Server Icon Image" class="server__img"/>

          <Button v-bind:path="server.invite" class="server__action btn btn--join" label="Join" target="#" />

          <div class="server__info">
            <h4 class="server__title">
              <img
                src="~/assets/partnered.png"
                v-if="server.partnered"
                class="server__badge partner"
                alt="Partnered Server Icon"
              />
              {{ server.name }}
            </h4>
            <small class="server__description">{{ server.description }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Servers",
  data() {
    return {
      server: serverList,
    };
  },
}

const serverList = [
  {
    name: "Growtopia Official Server",
    img: "/gt.jpg",
    invite: "https://discord.gg/growtopia",
    partnered: true,
    description:
      "Growtopia is a free-to-play sandbox MMO game with almost endless possibilities! Join now!",
  },
  {
    name: "Growtopian Community",
    img: "/icon.png",
    invite: "https://discord.com/invite/mPKz9gV",
    description: "Official server for Growtopian Discord Bot",
  },
  {
    name: "STYXSQUAD",
    img: "/styx.jpg",
    invite: "https://discord.com/invite/a7wKDRC",
    description:
      "We prioritise to create a welcoming and positive environment where gamers can find new friends and share their interests and talents.",
  },
];
</script>

<style lang="scss" scoped>
.servers {
  text-align: center !important;
  max-width: 1077px;
  margin: 2em auto 0 auto;

  .server-list {
    justify-content: center;
    display: flex;
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

  .server {
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

    .server__info {
      margin-top: 1em;
      display: flex;
      flex-flow: column nowrap;

      .server__title {
        margin: 0;
        font-size: 20px;
        color: oldlace;
        display: inline;

        .server__badge {
          position: relative;
          top: 0.35em;
          width: 1.5em;
          height: 1.5em;
          display: inline-block;
        }
      }

      .server__description {
        border-top: lightskyblue 2px solid;
        font-weight: 500;
        color: #FFE3E3;
        margin-top: 1.2em;
        padding-top: 0.5em;
        display: block;
        line-height: 1.2;
      }
    }

    .server__img {
      float: left;
      margin-top: -50px;
      margin-right: 15px;
      width: 5em;
      height: 5em;
      border-radius: 50%;
      border: 3px white solid;
    }

    .server__action {
      margin-top: 8px;
      width: 7em;
      font-weight: bold;
    }
  }
}
</style>
