<template>
    <div>Redirecting you now...</div>
</template>
<script>
export default {
    middleware({ redirect }) {
        redirect('https://patreon.com/join/growtopian');
    }
}
</script>