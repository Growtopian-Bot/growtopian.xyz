<template>
  <div class="title-bar--on-card">
    <h2 class="title-bar__title">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: ['icon']
}
</script>

<style lang="scss" scoped>

.title-bar {
  width: 100%;
  height: auto;
  padding: 8px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;

  &--on-card {
    width: 100%;
    height: auto;
    padding: 3px 10px;
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: 700;
    background-color: transparent !important;
  }

  &--on-surface {
    width: 100%;
    height: auto;
    padding: 0 5px;
    margin-bottom: 7px;
    font-size: 24px;
    font-weight: 700;
    background-color: transparent !important;
  }
}

</style>
