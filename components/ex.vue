<template>
    <div class="wrap">
        <section class="feature0 jumbotron">
            <div class="textbox">
            <h1>General Commands</h1>
            <h4>Check server status, search items, view WOTD, render worlds...</h4>
            </div>
            <img src="~/assets/help1.png" class="img-fluid shadowed">
        </section>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#99dfffa2" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <section class="feature1 jumbotron">
            <img src="~/assets/help2.png" class="img-fluid shadowed">
            <div class="textbox">
            <h1>Calculate</h1>
            <h4>Our professors have already found the formula for you.</h4>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#99dfffa2" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,122.7C384,96,480,96,576,117.3C672,139,768,181,864,213.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <section class="feature2 jumbotron" >
            <div class="textbox">
                <h1>Gaming is the key</h1>
                <h4>Easy way to keep your server active. Be careful though, you might get addicted.</h4>
            </div>
            <img src="~/assets/help3.png" class="img-fluid shadowed">
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#99dfffa2" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <section class="feature1 jumbotron">
            <img src="~/assets/help4.png" class="img-fluid shadowed">
            <div class="textbox">
            <h1>Captain, these are the weapons...</h1>
            <h4>Customizable prefix, greeting message and block specific command category at specific channels.</h4>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#99dfffa2" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,122.7C384,96,480,96,576,117.3C672,139,768,181,864,213.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <Invite />
    </div>
</template>

<script>
import Invite from '../components/Invite';

export default {
    components: {
        Invite
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/pf-beausans-pro');


$font-1: 'PF BeauSans Pro', sans-serif;

.jumbotron {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 0;
    background-color: transparent;

    &.feature1 {
        background-color: #99dfffa2;
    }

    h4 {
        margin-top: 1.5em;
        font-weight: 100;
        max-width: 300px;
    }

    h1 {
        font-size: 3em;
        max-width: 600px;
        font-weight: 600;
        font-family: $font-1;
    }


    img.shadowed {
        filter: drop-shadow(0 0px 8px black);
    }

    @media only screen and (max-width: 880px) {
        h1 {
            margin-top: 1em;
        }

        h4 {
            margin-bottom: 2em;
        }
        
        display: block;
        
    }

}

</style>