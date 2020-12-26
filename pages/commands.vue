<template>
  <div class="wrap">
    <div class="jumbotron info">
      <h3>Growtopian's Prefix</h3>
      Growtopian's default prefix is <span>/</span>, fortunately it's
      customizable with the <span>/prefix</span> command.
    </div>
    <div class="bars">
      <div class="left">
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
        <div class="discord">
          <iframe src="https://discord.com/widget?id=601852284212740166&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </div>
      <div class="jumbotron bar-right">
        <div class="panel-group" v-for="(command, key) in List" :key="key">
          <div
            data-toggle="collapse"
            class="panel panel-default collapsed"
            v-bind:href="'#collapse' + key"
            v-if="command.name"
          >
            <h5>{{ command.name }}<img src="~assets/star.svg" alt="star-icon" title="Donor Command" v-if="command.donor"></h5>
            {{ command.desc }}
            <div v-bind:id="'collapse' + key" class="panel-collapse collapse">
              <div class="panel-body">
                <div class="usage">
                  <h6>USAGE</h6>
                  <b>/{{ command.name }}</b>
                </div>
              </div>
            </div>
          </div>
          <div class="patreon" v-if="command.patreon">
            <a href="https://patreon.com/join/phemus" class="btn btn-block btn-danger" target="_">Click to become Patron Now! 🚀</a>
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

iframe {
  display: block;
}

.buttons {
  .btn {
    margin-left: 10px;
  }
}

a.btn {
  font-weight: bold;
  transition: 0.4s;
  font-size: 1.5em;
}

.panel.panel-default {
  background-color: $bgColor-2;
  margin-bottom: .5em;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: 1px #0741ff solid;

  &[aria-expanded="true"] {
    border: 1px #07daff solid;
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
    margin-bottom: 2px;
    font-weight: 600;
    color: #dad9ad;

    img {
      margin-left: .5em;
      margin-top: -5px;
    }
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
  

  .bar-left {
    border: 1px black solid;
    box-shadow: 3px 3px 3px black;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    margin: 3em 6em;

    .buttons {
      display: flex;
    }

    .bar-left {
      height: fit-content;
    }

    .bar-right {
      margin-left: 5%;
      width: 60%;
      margin-right: 5em;
    }
  }
}

@media only screen and (max-width: 768px) {
    .discord {
      display: none;
    }

    .bars {
      margin: 3em 2em;
    }
}
</style>
