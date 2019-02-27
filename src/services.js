import axios from 'axios';

// const endpoints = {
//     getBeers: 'https://api.punkapi.com/v2/beers';
// }

// function getBeers(){
//     axios.get(endpoints.getBeers)
//         .then()
//         .catch();
// };

export const fetchBeers = () => {
    axios.get('https://api.punkapi.com/v2/beers');
}
