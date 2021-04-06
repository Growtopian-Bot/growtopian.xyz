<template>
  <div>
    <div
      data-toggle="collapse"
      class="panel panel-default collapsed"
      v-bind:href="'#collapse' + ukey"
      v-if="command.name"
      @click="toggle"
    >
      <h5>
        {{ command.name
        }}<img
          src="~assets/star.svg"
          alt="star-icon"
          title="Donor Command"
          v-if="command.donor"
        />
      </h5>
      {{ command.desc }}
      <div ref="collapsed" v-bind:id="'collapse' + ukey" class="panel-collapse collapse">
        <div class="panel-body">
          <div class="usage">
            <h6>USAGE</h6>
            <div v-if="!command.usage">/{{ command.name }}</div>
            <p
              style="white-space: pre-line; line-height: 1.6"
              v-if="command.usage"
            >
              {{ command["usage"] }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="patreon" v-if="command.patreon">
      <a
        href="https://patreon.com/join/growtopian"
        class="btn btn-block btn-danger"
        target="_"
        >Click to become Patron Now! 🚀</a
      >
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


a.btn {
  font-weight: bold;
  transition: 0.4s;
  font-size: 1.5em;
}

.panel.panel-default {
  background-color: $bgColor-2;
  margin-bottom: 0.5em;
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
      margin-left: 0.5em;
      margin-top: -5px;
    }
  }

  .usage {
    line-height: 1em;

    p {
      margin-bottom: 0;
    }
  }

}



.jumbotron {
  padding: 1em;
  background-color: $bgColor-2;

  &.bar-right {
    background-color: transparent;
    padding: 0;

    #search {
      background-color: #0a1366e5;
      width: 100%;
      font-size: 25px;
      cursor: text;
      outline: none;
    }

    ::placeholder,
    -ms-input-placeholder,
    -ms-input-placeholder {
      color: rgba(228, 218, 200, 0.801);
    }
  }
}

@media only screen and (max-width: 768px) {

  .bars {
    margin: 3em 2em;
  }

  .bar-left {
    margin-left: auto !important;
  }
}
</style>