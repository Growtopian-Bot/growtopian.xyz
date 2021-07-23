<template>
  <div>
    <div
      data-toggle="collapse"
      class="panel panel--default collapsed"
      v-bind:href="'#collapse' + ukey"
      v-if="command.name"
      @click="toggle"
    >
      <h3>
        {{ command.name
        }}<img
          src="~assets/star.svg"
          alt="star-icon"
          title="Donor Command"
          v-if="command.donor"
        />
      </h3>
      {{ command.desc }}
      <div ref="collapsed" v-bind:id="'collapse' + ukey" class="panel--collapse collapse">
        <div class="panel--body">
          <div class="usage">
            <h6>USAGE</h6>
            <div v-if="!command.usage">/{{ command.name }}</div>
            <span class="usage__text"
              v-if="command.usage"
            >
              {{ command["usage"] }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="patreon" v-if="command.patreon">
      <Button
        path="https://patreon.com/join/growtopian"
        styles="btn btn--patreon"
        label="Click to become Patron Now! 🚀"
      />
    </div>
  </div>
</template>

<script>
export default {
    props: ['command', 'ukey'],
    methods: {
      toggle: function() {
        let element = this.$refs.collapsed;
        element.parentNode.setAttribute("aria-expanded", !element.classList.contains('show'));
        element.classList.toggle("show");
      }
    }
}
</script>

<style lang="scss" scoped>
$bgColor-1: #9aceff;
$bgColor-2: #2d6187;

@use '~@growstocks/stack/Core/Color';
@use '~@growstocks/stack/Core/Elevation';

$_command-theme: (
  'default': (#2d6187, #fff),
  'elevation': #000,
);

$_usage-theme: (
  'default': (#152b48, #fff),
  'elevation': #000,
);

.panel {
  &.panel--default {
    margin-bottom: 0.5em;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 300;

    @include Color.apply('filled', $_command-theme);

    & .show.panel--collapse {
      display: block;
    }

    & .panel--collapse {
      display: none;
    }

    & .panel--body {
      margin-top: 0.8em;
      border-radius: 5px;
      padding: 0.7em;

      @include Color.apply('filled', $_usage-theme);
    }

    h3 {
      margin: 0 0 .2em;
      font-weight: 600;
      color: #f6f598;

      img {
        margin-left: 0.5em;
        margin-top: -5px;
      }
    }

    .usage {
      h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }

      span.usage__text {
        margin: 0;
        white-space: pre-line;
        position: relative;
      }
    }
  }
}

.patreon {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
