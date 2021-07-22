<template>
  <div class="buttons">
    <Button
      class="btn btn--discord--outlined"
      path="https://discord.com/oauth2/authorize?client_id=591564657714528266&scope=bot&permissions=8&redirect_uri=https://discord.com/invite/mPKz9gV"
      target="_blank"
      label="Add to Server"
      has-logo
    />
    <Button
      class="btn"
      path="/commands"
      label="Commands"
      is-routed
    />
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  display: grid;
  place-items: center;
  text-align: center;
  margin: 5em 0 5em 0;

  .btn {
    margin: 0.5rem;
  }
}
</style>
