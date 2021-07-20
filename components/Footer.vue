<template>
  <div class="footer">
    <div class="flex">
      <div class="text">
        <h4>GROWTOPIAN.XYZ</h4>
        © Copyright Growtopian 2018-{{ new Date().getFullYear() }} . All sprites
        and related graphics are owned by Growtopia and Ubisoft Entertainment® -
        Growtopian is in no way affiliated with Ubisoft Entertainment, Growtopia
        or Discord Inc.
        <div class="buttons">
          <Button class="btn btn--discord" label="Invite Bot" data-toggle="modal" data-target="#myModal" />
          <Button class="btn btn--join" label="Join Support Server" path="https://discord.gg/mPKz9gV" />
        </div>
      </div>
      <div class="links">
        <h5>Navigation</h5>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/rules">Rules</RouterLink></li>
          <li><RouterLink to="/commands">Commands</RouterLink></li>
          <li>
            <RouterLink to="/premium"><span>Premium</span></RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '~@growstocks/stack/Core/Shape';

@import '~assets/scss/button-theme';

.flex {
  display: flex;
  color: rgb(153, 170, 181);
  bottom: 0;
  margin-top: 10em;
  background-color: rgb(42, 45, 50);
  min-height: 10em;
  padding: 2em;
  justify-content: space-evenly;
  font-weight: 300;

  .btn {
    margin: 1rem 0 0 0;
    padding: 6px 12px;
    font-size: 1rem;

    @include Shape.apply($_shape-theme-nav);
  }

  h5,
  h4 {
    font-size: 1.6rem;
    margin: .5em 0;
    color: whitesmoke;
  }

  .links {
    margin-left: 1em;
  }
  .links ul {
    list-style: none;
    padding: 0;
    line-height: 2em;

    span {
      color: yellow;
    }

    li a {
      text-decoration: none;
      color: oldlace;

      &:hover {
        color: rgb(130, 207, 238);
      }
    }
  }

  .text {
    width: 35%;
  }
}

@media only screen and (max-width: 768px) {
  .flex {
    text-align: center;
    display: block;
    padding: 1em 0 1.5em;

    .links {
      margin-top: 5%;
      font-size: 1.2em;
      text-align: left;
      word-wrap: break-word;
    }

    .text {
      border-bottom: 1px rgb(128, 128, 128) solid;
      font-size: 12px;
      width: 100%;
      margin: 0;
    }
  }
}
</style>
