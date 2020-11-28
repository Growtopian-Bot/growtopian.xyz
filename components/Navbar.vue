<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="branding">
          <NuxtLink class="navbar-brand" to="/"><h2>Growtopian<img src="~/assets/verf.webp"></h2></NuxtLink>
    </div>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/">Growtopian Bot</NuxtLink>
        </li>
        <li class="nav-item">
          <a href="/#servers" class="nav-link">Public Servers</a>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/commands">Commands</NuxtLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://discord.gg/mPKz9gV" target="#">Support Server</a>
        </li>
      </ul>
      <div class="redir">
        <li class="nav-item">
          <a
            class="btn btn-danger"
            href="https://patreon.com/phemus"
            target="#"
            >Patreon</a
          >
        </li>
        <li class="nav-item">
          <a class="btn invite" type="button" data-toggle="modal" data-target="#myModal"
            >Add To Server</a
          >
        </li>
      </div>
    </div>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Invite Requirements</h4>
      </div>
      <div class="modal-body" style="font-weight: 500">
        <p>Hey, thanks for using Growtopian! There are some stuff to acknowledge before inviting the bot. Please read them carefully 🐌</p> <u>Requirements to invite the bot:</u><br>
        <ul style="font-weight: 400">
          <li>10 or more members</li>
          <li>Follow Discord's Terms of Service</li>
          <li> Do not violate The Growtopian Code - If we find out your server is part of illegal activities we'll remove the bot manually.</li>
        </ul>
        <p>Now, we're good to go captain!</p>
      </div>
      <div class="modal-footer">
        <a class="btn btn-success" href="https://discord.com/oauth2/authorize?client_id=591564657714528266&scope=bot&permissions=8">Invite The Bot</a>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
  </nav>
</template>

<style lang="scss" scoped>
body {
  background-color: rgb(24, 39, 88);
}

.btn.invite {
  background-color: rgb(36, 83, 119);
  color: white;
  font-weight: bold;

  &:hover {
    background-color: rgba(70, 131, 180, 0.671);
  }
}

.redir {

    display: flex;

    a {
        margin-left: 8px;
        font-weight: bold;
    }

  list-style: none;
}

h2 {
  font-weight: bold;
  text-shadow: 3px 1px rgba($color: #000000, $alpha: 0.5);
}

.navbar {
  font-weight: bold;
  background: rgb(103,168,240) !important;
  background-color: linear-gradient(90deg, rgba(103,168,240,1) 0%, rgba(102,167,240,1) 35%, rgba(111,171,238,1) 100%) !important;
}

.branding {
  text-align: center;
  position: absolute;
  height: 0;
  top: 0;
  left: 0;
  right: 0;
}

.navbar-brand {
  margin-left: 2.5em;

  img {
    margin-top: -5px;
    margin-left: 8px;
    width: 1em;
  }

}

.nav-item a {
  color: white !important;
}


.nav-link:hover {
  text-decoration: underline;
  transition: 0.4s;

  &.btn {
    color: white !important;
  }
}
</style>