<template>
    <div class="wrap">
        <h1>Continuity of Service</h1>
        <hr>
        <div class="content">
            Hello,<br><br>

It's Phemus. I've been developing the Growtopian for for around 2 years now. I've used different servers and ways to host the bot and continue my learning programming proccess with no cost as much as possible. However my current hosting is doing changes to Free Plan and will remove the free hosting support for my project, meaning that I will have to move to another free server and sadly, it doesn't exist. So far from the Patreon only one person subscribed to 10$ tier and it lasted only for a month - it will only keep the bot up for a month only. <br> <br>

I'm a student and I don't have any income so I won't have enough money to host the bot forever, hence that I'm posting this for your supports to <b>@Growtopian</b> bot. I've created 2$ Tier at <a href="https://patreon.com/join/phemus"><b>Patreon</b></a> for it. Every single penny will be used for bot's hosting. If you cannot subscribe to any of the tiers, it's very appreciated if you can share it at your servers. I believe we can get over it together, thank you!

<div class="sponsor">
    <a href="https://patreon.com/join/phemus" class="btn btn-block btn-danger">Sponsor Now 💙</a>
</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    text-align: center;
    margin: 5% 10%;
    padding: 2em; 
    background-color: rgba(253, 253, 253, 0.61);
    border-radius: 5px;
    border: 2px solid black;

    hr {
        width: 50%;
        height: 30px;
        border-width: 5px;
    }

    h1 {
        color: rgb(90, 90, 90);
    }

    .sponsor {
        width: 100%;
        margin-top: 5%;

        .btn {
            font-size: 1em;
            font-weight: bold;
        }
    }

    .content {
        font-size: 20px;
        text-align: left;
        max-width: 50%;
        margin: 5% auto;
    }
}
</style>

<script>
export default {
    mounted() {
    document.body.style.backgroundColor = "#67a8f0";
  }
}
</script>