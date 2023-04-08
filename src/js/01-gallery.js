// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log('galleryItems');

// знаходження галереї на сторінці
const gallery = document.querySelector('.gallery');

// створення розмітки галереї
const createGalleryMarkup = items =>
  items
    .map(
      ({ preview, original, description }) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
        </a>
      </div>
    `
    )
    .join('');

// додавання створеної розмітки до галереї
gallery.innerHTML = createGalleryMarkup(galleryItems);

//підключення simpleLightbox з готової бібліотеки
new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
