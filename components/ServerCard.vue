<template>
  <div class="server">
    <div class="server__header">
      <img :src="img" alt="Server Icon Image" class="server__img"/>
      <Button :path="invite" styles="server__action btn btn--join" label="Join" target="#" />
    </div>

    <div class="server__info">
      <h4 class="server__title">
        <img
          src="~/assets/partnered.png"
          v-if="isPartnered"
          class="server__badge partner"
          alt="Partnered Server Icon"
        />
        {{ name }}
      </h4>
      <small class="server__description">{{ description }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerCard",
  props: {
    name: String,
    invite: String,
    img: String,
    description: String,
    isPartnered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

.server {
  width: 18em;
  background-color: rgb(103, 168, 240);
  margin: 2em;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 1px rgba(#000, 0.75);
  transition: 0.4s;
  padding: 10px;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  .server__header {
    display: grid;
    grid-template-columns: 5em auto;

    .server__img {
      position: relative;
      margin-top: -50px;
      width: 5em;
      height: 5em;
      border-radius: 50%;
      border: 3px white solid;
    }

    .server__action {
      width: 7em!important;
      font-weight: bold;
      margin: 0 0 0 auto;
      padding: 3px 0!important;

      button {
        vertical-align: baseline!important;
      }
    }
  }

  .server__info {
    margin-top: 17px;
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
}
</style>
