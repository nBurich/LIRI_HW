require("dotenv").config();

var axios = require("axios");

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

var movieName = process.argv.slice(3).join(" ");

var movieUrl= `http://www.omdbapi.com/?t= + ${movieName} + &y=&plot=short&apikey=trilogy`;

if (!movieName) {
    movieName = "Mr.Nobody";
}

axios.get(movieUrl).then (
    function(response) {
        console.log("Title: " + response.title);
        console.log("Release Year: " + response.year);
        console.log("IMDB Rating: " + response.rating[0].value);
        console.log("Rotten Tomatoes Rating: " + response[1].value);
        console.log("Country: " + response.country);
        console.log("Lanuage: " + response.language);
        console.log("Plot: " + response.plot);
        console.log("Actors: " + response.actors);
    }
);
// Ombd end //
// Bands in town start//
var artist = process.argv.slice(3).join(" ");

var concertUrl = `https://rest.bandsintown.com/artists/ + ${artist} + /events?app_id=codingbootcamp`;

if (!artist) {
    artist = "Maroon 5";
}

axios.get(concertUrl).then (
    function(response) {
        console.log(response[0].venue.name);
        console.log(response[0].venue.city+region+country);
        console.log(response.datetime);
        datetime = moment(datetime).format('MM/DD/YYYY');
    }
);

