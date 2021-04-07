<template>
  <div class="wrap">
    <div class="info">
      <h1>Growtopian's Prefix</h1>
      Growtopian's default prefix is <span>/</span>, fortunately it's
      customizable with the <span>/prefix</span> command.
    </div>
    <div class="bars">
      <div class="left">
        <div class="jumbotron bar-left">
          <h1>Categories</h1>
          <div
            class="categories"
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
          <div class="buttons">
            <input
              type="button"
              class="btn btn-info"
              value="Show All"
              @click="showAll"
            />
            <input
              type="button"
              class="btn btn-info"
              value="Hide All"
              @click="hideAll"
            />
          </div>
        </div>
        <div class="discord">
          <!-- <iframe src="https://discord.com/widget?id=601852284212740166&theme=dark" width="350" height="300" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> -->
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
      document.getElementsByClassName("panel-collapse").forEach((e) => {
        e.parentNode.setAttribute("aria-expanded", true);
        e.classList.add("show");
      });
    },
    hideAll() {
      document.getElementsByClassName("panel-collapse").forEach((e) => {
        e.parentNode.setAttribute("aria-expanded", false);
        e.classList.remove("show");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  width: calc(100% - 100px);
  margin: 2em auto;
  background: #2d6187;
  border: 1px solid black;
  color: lightgray;
  font-weight: 400;
  border-radius: 5px;
  padding: 0 1em 1em 1em;
  box-shadow: 5px 5px 5px #000;
}

h1 {
  margin: .5em 0;
  color: white;
}

.bars {

  .left {
    margin: 2em auto;
    width: 80%;
    background: #2d6187;
    padding: 0 1em 1em 1em;
    border: 1px solid black;
    border-radius: 5px;
    font-weight: 300;
    height: fit-content;
    box-shadow: 5px 5px 5px #000;

    .buttons {
      margin-top: 1em;
      display: flex;
      box-sizing: border-box;
    }

    label {
      font-size: 1.2em;
      color: white;
      cursor: pointer;
      padding: 10px;
      margin: 5px;
    }

    input[type="radio"]:checked + label {
      background-color: #579ee0;
      border-radius: 5px;
      transition: 0.2s;
    }

    label:hover {
      border-radius: 5px;
      background-color: #69d2e4;
      transition: 0.2s;
    }

    input[type="radio"] {
      display: none;
    }

    .categories label {
      display: block;
    }
  }

  .right {
    width: calc(100% - 80px);
    padding: 1em;
    margin: 1em auto;

    #search {
      width: 100%;
      margin-bottom: 1em;
      padding: 12px;
      font-size: 1.5rem;
      color: #ffffff;
      background: #045786;
      outline: none;
      border-radius: 5px;
      border: 2px solid #5db0eb;

      &::placeholder {
        color: rgba(220, 247, 255, 0.644);
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .bars {
    display: grid;
    grid-template-columns: 300px 700px;
    column-gap: 2rem;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
  }
}
</style>
