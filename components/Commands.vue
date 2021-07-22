<template>
  <div class="wrap">
    <Card class="command-prefix__card">
      <h1 class="card__title">Growtopian's Prefix</h1>
      <p class="card__contents">Growtopian's default prefix is <span>/</span>, fortunately it's
        customizable with the <span>/prefix</span> command.</p>
    </Card>
    <div class="commands__interface">
      <div class="left">
        <div class="jumbotron bar-left">
          <h1>Categories</h1>
          <div
            class="command__categories"
            v-for="(category, key) in Commands.categories"
            :key="key"
          >
            <input
              v-bind:id="key"
              name="categories"
              type="radio"
              :checked="key == 0 ? true : false"
            />
            <label v-bind:for="key" @click="setKey(key)">{{
              category.name
            }}</label>
          </div>
          <div class="command__category__tabs">
            <input
              type="button"
              class="btn btn--info"
              value="Show All"
              @click="showAll"
            />
            <input
              type="button"
              class="btn btn--info"
              value="Hide All"
              @click="hideAll"
            />
          </div>
        </div>
        <div class="discord__panel">
           <iframe src="https://discord.com/widget?id=601852284212740166&theme=dark" width="100%" height="300" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </div>
      <div class="right">
        <input
          id="search"
          type="search"
          data-toggle="collapse"
          class="panel panel-default collapsed"
          placeholder="Search a command..."
          v-model="search"
        />
        <div
          class="panel-group"
          v-for="(command, key) in List.filter(
            (c) =>
              c.name.match(search) ||
              (c.aliases ? c.aliases.some((r) => r.match(search)) : '')
          )"
          :key="key"
        >
          <CommandItem :ukey="key" :command="command" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Commands from "./commands.json";

export default {
  data() {
    return {
      search: "",
      Commands,
      List: Commands.categories[0].commands,
    };
  },
  methods: {
    setKey(key) {
      this.$data.List = Commands.categories[key].commands;
      document.getElementsByClassName("panel-collapse").forEach((e) => {
        e.parentNode.setAttribute("aria-expanded", false);
        e.classList.remove("show");
      });
    },
    showAll() {
      document.getElementsByClassName("panel--collapse").forEach((e) => {
        e.parentNode.setAttribute("aria-expanded", true);
        e.classList.add("show");
      });
    },
    hideAll() {
      document.getElementsByClassName("panel--collapse").forEach((e) => {
        e.parentNode.setAttribute("aria-expanded", false);
        e.classList.remove("show");
      });
    },
  },
};
</script>

<style lang="scss" scoped>

@use '~@growstocks/stack/Core/Color';
@use '~@growstocks/stack/Core/Elevation';

$_command-theme: (
  'default': (#2d6187, #fff),
  'elevation': #000,
);

$_tab-theme: (
  'default': (#579ee0, #000),
  'hover': (#579ee0, #000),
  'elevation': #000
);

$_input-theme: (
  'default': (#153a53, #fff),
  'elevation': #000,
);

.command-prefix__card {
  width: calc(100% - 20px);
  max-width: 1077px;
  margin: 1em auto;
  font-weight: 400;
  border-radius: 5px;
  padding: 0 1em;

  @include Color.apply('filled', $_command-theme);

  span {
    display: inline-block;
    font-family: "Source Code Pro", monospace;
    background-color: darken(#2d6187, 10%);
    padding: 3px 5px;
  }
}

h1 {
  margin: .5em 0;
  color: white;
}

.commands__interface {
  width: calc(100% - 20px);
  max-width: 1077px;
  margin: 0 auto;
  display: grid;
  grid-gap: min(1em, 2em);
  grid-auto-rows: auto;

  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: 300px auto;
    grid-gap: min(1em, 2em);
  }

  .left {
    margin: 0 auto;
    width: 100%;
    padding: 0 1em 1em 1em;
    border-radius: 5px;
    font-weight: 300;
    height: fit-content;

    @include Color.apply('filled', $_command-theme);

    .command__category__tabs {
      margin-top: 1em;
      display: flex;
      box-sizing: border-box;
      color: #fff!important;

      .btn--info {
        padding: 3px;
        color: inherit!important;
        @include Color.apply('outlined', $_tab-theme);

        &:hover {
          color: #000!important;
        }
      }

      & > * + * {
        margin-left: 10px;
      }
    }

    label {
      font-size: 1.2em;
      color: white;
      cursor: pointer;
      padding: 7px 10px;
      margin: 7px 0 0 0;
    }

    .command__categories {
      input[type="radio"] {
        display: none;

        &:checked + label {
          border-radius: 5px;
          transition: all 0.2s ease;

          @include Color.apply('filled', $_tab-theme);
        }
      }

      label {
        border-radius: 5px;
        transition: all 0.2s ease;
        border: 1px solid transparent;
        display: block;

        &:hover {
          border: 1px solid #579ee0;
          background-color: transparent;
        }
      }
    }

    .discord__panel {
      margin-top: 1.2rem;
    }
  }

  .right {
    width: 100%;
    margin: 0 auto;

    #search {
      width: 100%;
      margin-bottom: 1em;
      padding: 12px;
      font-size: 1.5rem;
      outline: none;
      border-radius: 5px;
      transition: all 0.1s ease;
      border: 2px solid #153a53 !important;

      @include Color.apply('filled', $_input-theme);

      &:focus-within {
        border: 2px solid #6cb6c3!important;
      }

      &::placeholder {
        color: rgba(220, 247, 255, 0.644);
      }
    }
  }
}
</style>
