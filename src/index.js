import { Notify } from 'notiflix/build/notiflix-notify-aio';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {fetchPhoto} from "./javaScript/fetchPhoto";
import { murcupCards } from "./javaScript/marcupCards";
import { moreLoadButton } from "./javaScript/moreLoadButton";

const galleryEl = document.querySelector('.gallery');
const formEl = document.getElementById('search-form');
let gallery = new SimpleLightbox('.gallery a');
const btnLoadMore = new moreLoadButton({
    selector: '.load-more',
    isHidden: true
});

formEl.addEventListener('submit', onFormSubmit);
btnLoadMore.button.addEventListener('click', onBtnLoadMore)

function onFormSubmit(e){
e.preventDefault();
const form = e.currentTarget;
const query = e.target.searchQuery.value.trim();
clearGallery();
if(query === '') return

fetchPhoto(query).then(({hits, totalHits}) =>{     
    hits.length === 0 ? Notify.failure('Sorry, there are no images matching your search query. Please try again.') :
        Notify.success(`Hooray! We found ${totalHits} images.`)
        return hits
     }).then(murcupCards).then(addMarkup)


}
function onBtnLoadMore(){
    btnLoadMore.disable()
console.log('yes')

}

function addMarkup(markup){
    galleryEl.innerHTML = markup
  }

  function updateMarkup(markup){
galleryEl.insertAdjacentHTML('beforeend', markup)
  }

  function clearGallery(){
    galleryEl.innerHTML = ''
  }
function onError(error){
    console.log(error)
    
}

