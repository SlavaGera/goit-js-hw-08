// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
    <a class='gallery__link' href = '${original}'>
    <img class='gallery__image' src='${preview}' data-source='${original}' alt ='${description}'/>
    </a>
    </div>`).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom' });