const filmsAPI = "http://localhost:3000/films"

//Get and render first movie details
fetch(`${filmsAPI}/1`)
    .then(res => res.json())
    .then(renderMovie)

function renderMovie(movie) {
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById('poster').src = movie.poster;
    document.getElementById('poster').alt = movie.title;
    document.getElementById('title').textContent = movie.title;
    document.getElementById('runtime').textContent = `${movie.runtime} minutes`;
    document.getElementById('film-info').textContent = movie.description;
    document.getElementById('showtime').textContent = movie.showtime;
    document.getElementById('ticket-num').textContent = availableTickets;
};

//Get and show menu of all movies on the left side of the page
fetch(filmsAPI)
    .then(res => res.json())
    .then(renderMovieList)

function renderMovieList(films) {
const movieList = document.getElementById('films');
movieList.innerHTML = ''; 
      
films.forEach(film => {
    const listItem = document.createElement('li');
    listItem.className = 'film item';
    listItem.textContent = film.title;
    movieList.appendChild(listItem);
    });
}

//Buy a ticket
document.getElementById('buy-ticket').addEventListener('click', buyTicket) 

function buyTicket () {
    const remainingTickets = document.getElementById('ticket-num').textContent;
    if (remainingTickets > '0') {
      document.getElementById('ticket-num').textContent = remainingTickets - 1;
    } else {document.getElementById('ticket-num').textContent = '0'
    }
  };
