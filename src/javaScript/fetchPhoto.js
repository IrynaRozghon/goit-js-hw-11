import axios from 'axios';
const ENDPOINT = "https://pixabay.com/api/";
const API_KEY = '33288510-5b2f908f6ba0ee4c3753fbb26';
class fetchPhoto{
    constructor(){
        this.queryItem = '';
        this.pageNum = 1;
    }
     async fetchCard(){
        const response = await axios.get(`${ENDPOINT}?key=${API_KEY}&q=${this.queryItem}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.pageNum}&per_page=40`)
        this.incrementPage();           
        return response.data
    }
    resetPage(){
        this.pageNum = 1
    }
    incrementPage(){
        this.pageNum += 1
    }
}
export {fetchPhoto};