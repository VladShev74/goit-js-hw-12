// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import getImagesByQuery from "./js/pixabay-api"
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions"


const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loadMore = document.getElementById("load-more");

let query = undefined;
let pageToLoad = 1;
const perPageElemLimit = 15;
let images = [];
let totalPages = 0;

async function waitForImagesToLoad() {
  const imgs = document.querySelectorAll(".gallery-image");

  const promises = Array.from(imgs).map(img => {
    return new Promise(resolve => {
      if (img.complete) {
        resolve();
      } else {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      }
    });
  });

  await Promise.all(promises);
}

function smoothScroll() {
  const firstCard = document.querySelector('.gallery-item');
  if (!firstCard) return;

  const cardHeight = firstCard.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth'
  });
}

const handleFormSubmit = async event => {
  event.preventDefault();
  gallery.innerHTML = "";
  pageToLoad = 1;
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  query = form.elements["search-text"].value.trim();

  try {
    const data = await getImagesByQuery(query, pageToLoad);

    images = data.hits;
    totalPages = Math.ceil(data.totalHits / perPageElemLimit);

    if (!images || images.length === 0) {
      throw new Error("No images found");
    }
    createGallery(images);
    await waitForImagesToLoad();
    gallery.classList.remove("hidden");

    if (pageToLoad < totalPages) {
      showLoadMoreButton();
    }
  } catch (err) {
    iziToast.error({
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}

form.addEventListener("submit", handleFormSubmit)

const handleLoadMoreClick = async event => {
  event.preventDefault();
  pageToLoad += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(query, pageToLoad);

    const images = data.hits;

    if (!images || images.length === 0 || pageToLoad >= totalPages) {
      throw new Error("No images found");
    }

    createGallery(images);
    await waitForImagesToLoad();
    smoothScroll();
    hideLoader();

  } catch (error) {
    hideLoader();
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
      position: "topRight",
    });
    hideLoadMoreButton();
  }
}

loadMore.addEventListener("click", handleLoadMoreClick);