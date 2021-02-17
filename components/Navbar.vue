<template>
<nav class="navbar navbar-expand-xl navbar-dark bg-dark">

    <div class="order-0">
            <NuxtLink class="navbar-brand" to="/"><h2>Growtopian</h2></NuxtLink>
    </div>
        <div class="navbar-collapse collapse links w-100 order-1 order-xl-0 dual-collapse2 mx-auto">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a href="/#servers" class="nav-link">Public Servers</a>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/commands">Commands</NuxtLink>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://discord.gg/mPKz9gV" target="#">Support Server</a>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/premium">Premium</NuxtLink>
            </li>
        </ul>
    </div>
    <div class="navbar-collapse collapse order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="btn btn-danger" href="https://patreon.com/growtopian" target="#">Patreon</a>
            </li>
            <li class="nav-item">
                <a class="btn invite" data-toggle="modal" data-target="#myModal">Add To Server</a>
            </li>
        </ul>
    </div>
        <button class="navbar-toggler" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>

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
        <p>Now, we're good to go captain! <br> Do not hesitate to come to our server if you have any questions!</p>
      </div>
      <div class="modal-footer">
        <a class="btn btn-success" href="https://discord.com/oauth2/authorize?client_id=591564657714528266&scope=bot&permissions=8&redirect_uri=https://discord.com/invite/mPKz9gV">Invite The Bot</a>
        <button type="button" class="btn" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
</nav>
</template>

<style lang="scss" scoped>

.links {
    width: 100%;
     ul {
         margin: 0 auto;

         li a {
             margin: 0 1em 0 1em;
         }
     }
}


.navbar-toggler {
    outline: none;
    border: none;
    font-size: 1.5em;
}

.navbar {
    background-color: #009de0 !important;
    border: none;
    font-weight: bold;
    padding: .5rem 5rem;

    .navbar-nav.mr-auto .nav-item a {
        color: #ffffff;

        &:hover {
            text-decoration: underline;
            color: #ffffff;
        }
    }
}

.navbar-brand {
    text-shadow: 2px 0px 2px rgba(0, 0, 0, 0.5);
}

img {
    margin-top: -5px;
    margin-left: 8px;
    width: 1em;
  }

a.btn {
    margin-left: 8px;
    font-weight: bold;
}


.btn.invite {
  background-color: rgb(36, 83, 119);
  color: white;
  font-weight: bold;
  white-space: nowrap;

  &:hover {
    background-color: rgba(70, 131, 180, 0.671);
  }
}

@media only screen and (max-width: 1024px) {
    .order-3 {
        .navbar-nav {
            flex-direction: row;
        }
    }

    .navbar {
        padding: .5em 1em;
    }

}

</style>
