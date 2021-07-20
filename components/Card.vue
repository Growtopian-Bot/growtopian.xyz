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
    width: 85%;
    font-weight: 300;
    font-size: 20px;
    max-width: 800px;
    margin: 1em auto;
    background: rgba(255, 255, 255, 0.836);
    border-radius: 10px;
    padding: 0.5em;
  }
</style>
