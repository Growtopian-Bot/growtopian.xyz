<template>
  <div class="card">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style lang="scss" scoped>
  .card {
    font-weight: 300;
    font-size: 20px;
    max-width: 1077px;
    margin: 1em auto;
    background: rgba(255, 255, 255, 0.836);
    border-radius: 10px;
    padding: 0.5em;

    .card__title {
      font-size: 24px;
    }

    .card__contents {
      font-size: 14px;
    }
  }
</style>
