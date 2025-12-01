// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');
let lightbox = null;

function createGallery(images) {
  const galleryMarkup = images
  .map(
    ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            />
        </a>
        <ul class="image-stats">
          <li class="stats-item">
            <p class="stat-title">Likes</p>
            <p class="stat-value">${likes}</p>
          </li>
          <li class="stats-item">
            <p class="stat-title">Views</p>
            <p class="stat-value">${views}</p>
          </li>
          <li class="stats-item">
            <p class="stat-title">Comments</p>
            <p class="stat-value">${comments}</p>
          </li>
          <li class="stats-item">
            <p class="stat-title">Downloads</p>
            <p class="stat-value">${downloads}</p>
          </li>
        </ul>
    </li>`
  )
  .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
};

function clearGallery() {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  gallery.classList.add("hidden");
};


function showLoader() {
  document.getElementById("loader").classList.remove("hidden");
};

function hideLoader() {
  document.getElementById("loader").classList.add("hidden");
};

function showLoadMoreButton() {
  document.getElementById("load-more").classList.remove("hidden");
}


function hideLoadMoreButton() {
  document.getElementById("load-more").classList.add("hidden");
}

export { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton };