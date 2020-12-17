<template>
    <div class="footer">
        <div class="flex">
            <div class="links">
                <h5>Other Nav</h5>
                <ul>
                    <li><RouterLink to="/rules">Rules</RouterLink></li>
                    <li><RouterLink to="/continuity-of-service">Continuity of Service</RouterLink></li>
                    <li><RouterLink to="/commands">Commands</RouterLink></li>
                </ul>
            </div>
            <div class="text">
             © 2020 Growtopian - The Discord Bot. All sprites and related graphics are owned by Growtopia and Ubisoft Entertainment® - Growtopian is in no way affiliated with Ubisoft Entertainment® or Growtopia.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flex {
    display: flex;
    color: oldlace;
    bottom: 0;
    justify-content: center;

    margin-top: 10%;

    background-color: darkslategray;
    min-height: 10em;
    padding: 1em;

    div {
        margin: auto;
    }

    h5 {
            font-weight: bolder;
        }

    .links ul {
        list-style: none;
        padding: 0;

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

            .links {
                text-align: left;
            }

            .text {
                border-top: 1px rgb(128, 128, 128) solid;
                padding-top: 5px;
                font-size: 12px;
                width: 100%;
                margin: 0;
            }
        }

        

        
    }
</style>