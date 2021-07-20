<template>
  <div class="buttons">
    <Button
      class="btn btn--discord--outlined"
      path="https://discord.com/oauth2/authorize?client_id=591564657714528266&scope=bot&permissions=8&redirect_uri=https://discord.com/invite/mPKz9gV"
      target="_blank"
      label="Add to Server"
      logo="true"
    />
    <Button
      routed="true"
      class="btn"
      path="/commands"
      label="Commands"
    />
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  text-align: center;
  margin: 5em 0 5em 0;
}
</style>
