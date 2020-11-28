<template>
  <div class="wrap">
    <div class="jumbotron info">
      <h3>Growtopian's Prefix</h3>
      Growtopian's default prefix is <span>/</span>, fortunately it's
      customizable with the <span>/prefix</span> command.
    </div>
    <div class="bars">
      <div class="jumbotron bar-left">
        <h3>Categories</h3>
        <div
          class="categories"
          v-for="(category, key) in Commands.categories"
          :key="key"
        >
          <input v-bind:id="key" name="categories" type="radio" :checked="key == 0 ? true : false" />
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
      <div class="jumbotron bar-right">
        <div class="panel-group" v-for="(command, key) in List" :key="key">
          <div
            data-toggle="collapse"
            class="panel panel-default collapsed"
            v-bind:href="'#collapse' + key"
          >
            <h5>{{ command.name }}</h5>
            {{ command.desc }}
            <div v-bind:id="'collapse' + key" class="panel-collapse collapse">
              <div class="panel-body">
                <div class="usage">
                  <h6>USAGE</h6>
                  /<b>{{ command.name }}</b>
                </div>
              </div>
            </div>
          </div>
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
      Commands,
      List: Commands.categories[0].commands,
    };
  },
  mounted() {
    document.body.style.backgroundColor = "#67a8f0";
  },
  methods: {
    setKey(key) {
      this.$data.List = Commands.categories[key].commands;
      document.getElementsByClassName("panel-collapse").forEach((e) => {
        e.parentNode.setAttribute('aria-expanded', false);
        e.classList.remove('show');
      });
    },
    showAll() {
      document.getElementsByClassName("panel-collapse").forEach((e) => {
        e.parentNode.setAttribute('aria-expanded', true);
        e.classList.add('show');
      });
    },
    hideAll() {
      document.getElementsByClassName("panel-collapse").forEach((e) => {
        e.parentNode.setAttribute('aria-expanded', false);
        e.classList.remove('show');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$bgColor-1: #9aceff;
$bgColor-2: #2d6187;

.buttons {
  .btn {
    margin-left: 10px;
  }
}

.panel.panel-default {
  background-color: $bgColor-2;
  margin-bottom: 1em;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: 1px black solid;

  &[aria-expanded="true"] {
    border: 1px #0741ff solid;
  }

  .panel-body {
    margin-top: 0.8em;
    border-radius: 5px;
    background-color: rgba(0, 73, 116, 0.651);
    color: rgb(233, 233, 233);
    padding: 0.5em;
    border: 3px rgba(92, 140, 230, 0.466) solid;
  }

  h5 {
    color: #fadcaa;
  }

  .usage {
    line-height: 1em;
  }
  

  h6 {
    font-size: 14px;
    margin-bottom: 5px;
    color: rgba(203, 199, 255, 0.527);
  }
}

h3 {
  color: white;
  word-wrap: break-word;
}

.jumbotron {
  padding: 1em;
  background-color: $bgColor-2;

  &.bar-right {
    background-color: transparent;
    padding: 0;
  }

  span {
    background-color: rgba(0, 73, 116, 0.651);
    padding: 2px;
    border-radius: 2px;
  }

  &.info {
    margin: 3em;
    color: gainsboro;
    border: 1px black solid;
    box-shadow: 3px 3px 3px black;
  }

  label {
    font-size: 1.2em;
    color: white;
    cursor: pointer;
    padding: 5px;
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

.bars {
  margin: 3em;
  display: block;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    display: flex;

    .bar-left {
      width: 25%;
      height: fit-content;
      position: fixed;
      border: 1px black solid;
      box-shadow: 3px 3px 3px black;
    }

    .bar-right {
      margin-left: 30%;
      width: 70%;
    }
  }
}
</style>
