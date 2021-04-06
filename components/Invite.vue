<template>
        <div class="buttons">
        <a class="btn invite btn-info" href="https://discord.com/oauth2/authorize?client_id=591564657714528266&scope=bot&permissions=8&redirect_uri=https://discord.com/invite/mPKz9gV" target="_blank"><span><img src="~/assets/discord-logo.svg" alt="discord-logo"> Add To Server</span></a>
        <router-link class="btn btn-info" to="/commands"><span>Commands</span></router-link>
    </div>
</template>

<style lang="scss" scoped>
.buttons {
    text-align: center;
    margin: 5em 0 5em 0;
    a.btn {
        margin: 24px;
        width: 20em;
        height: 3.5em;
        border-radius: 28px;
        background-color: rgb(46, 161, 255);


        &:hover {
            background-color: rgb(25, 115, 189);
            box-shadow: 0px 2px 5px rgba(77, 77, 77, 0.7);
        }

        &.invite {
            background-color: white;
            color: rgb(65, 168, 253);

            &:hover {
                background-color: rgb(241, 241, 241);
            }
        }

        span {
            font-size: 20px;
            font-weight: bold;
            line-height: 40px;

            img {
                width: 35px;
            }
        }
    }
}

  @media only screen and (max-width: 600px) {

      .buttons {
        a.btn {
            margin: 24px 0;
        }
      }

      img.logo {
          margin-top: 1em;
      }

}
</style>