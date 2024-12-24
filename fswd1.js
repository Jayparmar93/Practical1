const movies = [
    {
        title:"Interstaller",
        genre:"Sci-fi", 
        rating: 9.0,
        releaseYear: 2014
    },
    {
        title:"Top Gun: Maverick",
        genre: "Action",
        rating: 8.5,
        releaseYear: 2022
    },
    {
        title: "The Martian",
        genre: "Sci-fi",
        rating: 9.1,
        releaseYear: 2015
    }
];

function addMovie(title, genre,rating,releaseYear){
    const newMovie = {
        title,genre,rating,releaseYear
    };
    movies.push(newMovie);
    console.log(`Movie ${title} added successfully`);
}

function listMoviesByGenre(genre){
    console.log(`Movies in ${genre}`);
    const filteredMovies = movies.filter(movie => movie.genre.includes(genre));
    if (filteredMovies.length === 0) {
        console.log("No movies found");
    }else{
        filteredMovies.forEach(movie => {
            console.log(`Title: ${movie.title}, Genre:  ${movie.genre}, Rating: ${movie.rating}, Release Year: ${movie.releaseYear}`);
        })
    }
}
