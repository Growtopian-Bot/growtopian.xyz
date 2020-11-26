<template>
    <div class="notfound">
        <div class="jumbotron">
            <b>404 Not Found</b>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.jumbotron {
    background-color: lightskyblue;
    text-align: center;
    color: white;
    font-size: 10rem;
    padding-bottom: 3em;
    margin-bottom: -1em;
}

</style>

<script>
export default {
    layout: 'error'
}
</script>