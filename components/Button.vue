<template>

  <RouterLink v-if="routed" v-bind:class="{ styles }" v-bind:to="{ path }">
    <span>{{ label }}</span>
  </RouterLink>

  <button
    v-else
    role="button"
  >
    <a v-bind:href="{ path }">
      <img v-if="logo" src="~/assets/discord-logo.svg" alt="discord-logo"/>
      <span>{{ label }}</span>
    </a>
  </button>

</template>

<script>
export default {
  name: "Button",
  props: [
    'routed',
    'path',
    'styles',
    'label',
    'logo'
  ],
  data() {
    return {
      logo: false
    }
  }
}
</script>

<style lang="scss" scoped>

@use '~@growstocks/stack/Core/Shape';
@use '~@growstocks/stack/Core/Color';
@use '~@growstocks/stack/Core/Tools';

@import '~assets/scss/button-theme';

.btn {
  margin: 24px;
  width: 100%;
  max-width: 300px;
  padding: 12px 16px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  color: white;
  text-decoration: none;
  text-align: center;
  line-height: 1.5;
  font-weight: 500;

  font-size: 16px;

  @include Color.apply('filled', $_main-theme);
  @include Shape.apply($_shape-theme);
  @include Tools.prefix(transition, all 0.1s ease);

  &.btn--invite {
    @include Color.apply('filled', $_invite-theme);
  }

  &.btn--discord {
    @include Color.apply('filled', $_discord-theme);

    &--outlined {
      @include Color.apply('outlined', $_discord-theme);
    }
  }

  &.btn--patreon {
    @include Color.apply('filled', $_patreon-theme);
  }

  &.btn--join {
    @include Color.apply('filled', $_join-theme);
    @include Shape.apply($_shape-theme-nav);

    padding: .375rem .75rem;
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
  }

  span {
    font-size: inherit;
    font-weight: bold;
  }

  img {
    vertical-align: middle;
    width: 27px;
    height: auto;
    margin-right: 3px;
  }
}
</style>
