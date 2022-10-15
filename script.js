const allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
function Movie(title, rating, haveWatched){
    return {
        title:title, 
        rating:rating, 
        haveWatched:haveWatched
    };
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    allMovies.length = allMovies.length + 1;
    allMovies[allMovies.length -1] = movie;
    console.log("A new move is added ");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    let outcome = "Printing all movies . . . \n";
    let j  = 0;
    while(allMovies.length > j){
        let i = allMovies[j];
        outcome = outcome + (i.title + ", rating of " + i.rating + ", haveWatched: " + i.haveWatched + "\n");
        j++;
    }
        outcome = outcome + ("\n You have " + allMovies.length + " movies in total");
        console.log (outcome);
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    let amountMatches = 0;
    let outcome = "The printed movie will have higher rating than "  + rating + "\n ";

    let j = 0;
    while (allMovies.length > j){
        let i = allMovies[j];

        if(rating <= i.rating){
            outcome = outcome + (i.title + ", rating of " + i.rating + ", haveWatched : " + i.haveWatched + "\n");
            amountMatches = amountMatches + 1;
        }

        j++;
    }

    outcome = outcome + ("\n In total, there are  " + amountMatches + " matches");
    console.log(outcome);
}


//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    console.log("chaning the status of the movie . . . \n");
    
    let j = 0;
    while (allMovies.length > j){
        let k = allMovies[j];
        if(k.title == title){
            k.haveWatched = !k.haveWatched;
        }
        j++;
    }

}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);