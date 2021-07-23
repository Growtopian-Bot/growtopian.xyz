<template>

  <RouterLink v-if="isRouted" :class="styles" :to="{ path }">
    <span>{{ label }}</span>
  </RouterLink>

  <a v-else :class="styles" :href="path">
    <button role="button">
        <img v-if="hasLogo" src="~/assets/discord-logo.svg" alt="discord-logo"/>
        <span>{{ label }}</span>
    </button>
  </a>

</template>

<script>
export default {
  name: "Button",
  props: {
    styles: String,
    label: String,
    path: String,
    isRouted: {
      type: Boolean,
      default: false
    },
    hasLogo: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="scss">

@use '~@growstocks/stack/Core/Shape';
@use '~@growstocks/stack/Core/Color';
@use '~@growstocks/stack/Core/Tools';

@import '~assets/scss/button-theme';

.btn {
  width: 100% !important;
  max-width: 300px;
  padding: 12px 16px;
  font-size: 16px;

  display: flex !important;
  justify-content: center !important;
  place-items: center !important;

  text-decoration: none;

  @include Color.apply('filled', $_main-theme);
  @include Shape.apply($_shape-theme);
  @include Tools.prefix(transition, all 0.2s ease);

  button {
    border: none;
    font-size: inherit;
    text-align: center;
    line-height: 1.5;
    font-weight: 500;
    color: inherit;
    background: transparent;
    transition: inherit;

    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }

  &.btn--invite {
    @include Color.apply('filled', $_invite-theme);
  }

  &.btn--discord {
    @include Color.apply('filled', $_discord-theme);
    @include Shape.apply($_shape-theme-nav);

    &--outlined {
      @include Color.apply('outlined', $_discord-theme);
    }
  }

  &.btn--patreon {
    @include Color.apply('filled', $_patreon-theme);
    @include Shape.apply($_shape-theme-nav);
  }

  &.btn--join {
    @include Color.apply('filled', $_join-theme);
    @include Shape.apply($_shape-theme-nav);

    padding: .375rem .75rem;
    margin: 0;
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
