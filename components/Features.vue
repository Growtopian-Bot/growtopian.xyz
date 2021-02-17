<template>
    <div class="features">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#99dfffa2" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <section class="feature1 jumbotron">
            <img src="~/assets/img1.png" class="img-fluid shadowed" alt="featured-image" id="img1">
            <div class="textbox">
            <h1>Easily find the item you're looking for...</h1>
            <h4>Simply search for the keyword and let us find the item for you.</h4>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#99dfffa2" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,122.7C384,96,480,96,576,117.3C672,139,768,181,864,213.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <section class="feature2 jumbotron" >
            <div class="textbox">
                <h1>Stay up to date!</h1>
                <h4>Never miss WOTDs, daily challenges and as an option we will send you DM every time server goes up/down.</h4>
            </div>
            <img src="~/assets/img2.png" alt="feature-img" class="img-fluid shadowed">
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#99dfffa2" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <section class="feature1 jumbotron">
            <img src="~/assets/img3.png" alt="feature-img-2" class="img-fluid">
            <div class="textbox">
            <h1>Play games, dragon war!</h1>
            <h4>Tons of game commands that won't get you bored and your friends.</h4>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#99dfffa2" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,122.7C384,96,480,96,576,117.3C672,139,768,181,864,213.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/pf-beausans-pro');

$font-1: 'PF BeauSans Pro', sans-serif;

.jumbotron {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 0;
    background-color: transparent;
    padding: 0;

    .textbox {
        margin: 1.5em;
    }

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
        object-fit: cover;
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

@media only screen and (max-width: 880px) {
    .jumbotron {
        padding: 32px;
    }
}

</style>