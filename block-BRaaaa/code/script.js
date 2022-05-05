let input = document.querySelector('input[type="text"]');
let root Elm = document.querySelector('.movies_list');
let allmovies = [
    {
        name: 'Forest Gump',
        watched: false,

    },
    {
        name: 'Inception',
        watched: true,
    },
];

input.addEventListener('keyup', (event) => {
    if (event.keycode === 13) {
        all movies.push ({
            name: event.target.value,
            watched:false,
        });
        event.target.value = '';
        createMovieUI();
    
