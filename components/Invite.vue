<template>
            <div class="container">
            <h1>Meet with the Growtopian.</h1>
            <div class="buttons">
                 <a class="btn btn-info" type="button" data-toggle="modal" data-target="#myModal"><img src="https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"> Add To Server</a>
                 <router-link class="btn btn-info" to="/commands">Commands</router-link>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.container {
    text-align: center !important;
    justify-content: center;
    margin-top: 5em;

    .buttons {
        justify-content: center;
        display: inline-flex;
        width: fit-content;

        @media only screen and (max-width: 600px) {
            display: block;
        }

        img {
            width: 1.5em;
        }

        .btn {
            background-color: #4343b9;
            margin: 2em;
            
            font-size: 1.5em;
            border: none;

            &:hover {
                background-color: rgb(57, 57, 247);
                transition: 0.4s;
            }
        }
    }
}
</style>