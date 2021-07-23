<template>
  <div class="wrap">
    <div class="rules">
      <h1>Growtopian Rules</h1>
      <p>
        By using Growtopian, you agree to these rules. If you break any rules,
        we reserve the right to ban you from Growtopian.
      </p>
      <div class="rule" v-for="(rule, key) in rules" :key="key">
        <h4>{{ rule.title }}</h4>
        {{ rule.content }}
      </div>
    </div>
  </div>
</template>

<script>
const rules = [
  {
    title: "Userbots, Selfbotting",
    content:
      "Userbotting, macros, scripts and anything else used to automate running commands is strictly forbidden. On top of this, massive amounts of spam is not allowed and will be punished with the same severity.",
  },
  {
    title: "Sharing Exploits",
    content:
      "It's prohibited to share exploits/bugs with other users. Please report all bugs to staff of Growtopian's Support Server so we can fix them as soon as possible.",
  },
  {
    title: "Alt Farming",
    content:
      "It is prohibited to use alt accounts to farm or store currencies. This involves supplying real people who don't use the currency system with gems/world locks.",
  },
  {
    title: "Scamming",
    content:
      "It is prohibited to use bot currency (or any of the bot's features) to scam, trade or sell something. Giving gems/world locks, for instance, in exchange for individuals advertising your server.",
  },
  {
    title: "Discord ToS",
    content:
      "The Discord TOS and Discord Community Guidelines also are enforcable through our bot.",
  },
  {
    title: "The Growtopian Code",
    content:
      "If we find out you're violating the Growtopian Code, for example your server is being used for blackmarketing we'll remove the bot from your server instantly and report it to Discord immediately.",
  },
];

export default {
  data() {
    return {
      rules,
    };
  },
  mounted() {
    document.body.style.backgroundColor = "#009de0";
  },
};
</script>

body {

}

<style lang="scss" scoped>

@use '~@growstocks/stack/Core/Color';

@import '../assets/scss/commands-theme';

.rules {
  text-align: center;

  h1 {
    margin-top: 1em;
    color: #ffb100;
    text-shadow: 2px 2px #000;

    &::before {
      content: open-quote;
    }

    &::after {
      content: close-quote;
    }
  }

  p {
    color: #ffffff;
    font-weight: 600;
    margin: 0 2em 2em;
  }

  & > * + * {
    margin: 1rem auto 0 auto;
  }
}

.rule {
  width: 70%;
  line-height: 1.6em;
  border-radius: 10px;
  padding: 1em;
  font-size: 0.90rem;

  @include Color.apply('filled', $_command-theme);

  h4 {
    font-size: 1.3rem;
    margin: 0 0 5px 0;
    color: #f6f598;
  }
}

@media only screen and (max-width: 768px) {
  .rule {
    width: calc(100% - 80px);
    margin: 15px auto 0 auto;
  }
}
</style>
