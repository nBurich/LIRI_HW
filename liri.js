require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);


// Commands //
var type = process.argv[2];

if (type === "concert-this"){
    // bands in town function
}
else if (type === "spotify-this-song") {
// spotify function//
}
else if (type === "movie-this") {
    // movie function
}
else if (type === "do-what-it-says") {
    // ????///
}
else {
    console.log("Could not recognize command. Try again.");
}
// OMBD portion //
var axios = require("axios");

var movieName = process.argv.slice(3).join(" ");

var movieUrl= `http://www.omdbapi.com/?t= + ${movieName} + &y=&plot=short&apikey= ${MOIVE_ID}`;

if (!movieName) {
    movieName = "Mr.Nobody";
}

axios.get(movieUrl).then (
    function(response) {
        console.log("Title: " + response.title);
        console.log("Release Year: " + response.year);
        console.log("IMDB Rating: " + response.rating[0].value);
        console.log("Rotten Tomatoes Rating: " + response.[1].value);
        console.log("Country: " + response.country);
        console.log("Lanuage: " + response.language);
        console.log("Plot: " + response.plot);
        console.log("Actors: " + response.actors);
    }
);




// Ombd end //
