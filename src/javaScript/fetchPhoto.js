import axios from 'axios';
const ENDPOINT = "https://pixabay.com/api/";
const API_KEY = '33288510-5b2f908f6ba0ee4c3753fbb26';
function fetchPhoto(query, numPage = 1){
    return axios.get(`${ENDPOINT}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${numPage}&per_page=40`).then(response => response.data)
}
export {fetchPhoto};