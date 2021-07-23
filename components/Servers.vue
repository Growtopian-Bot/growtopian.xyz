<template>
  <section id="#servers" class="servers">
    <TitleBar>Featured Servers</TitleBar>
    <div class="server-list">

      <ServerCard
        v-for="(server, key) in server"
        :key="key"
        :img="server.img"
        :invite="server.invite"
        :name="server.name"
        :description="server.description"
        :is-partnered="server.partnered"
      />

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
}
</style>
