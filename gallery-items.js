export const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const mainListRef = document.querySelector('.js-gallery');
const overlayRef = document.querySelector('.js-lightbox');
const lightboxContent = document.querySelector('.lightbox__overlay');

images.forEach((image, index) => {
    mainListRef.insertAdjacentHTML('beforeend',
 `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
    data-slider=${index}
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
      data-slider=${index}
    />
  </a>
</li>`)
})
const lightBoxRef = document.querySelector('.js-lightbox');
const lightboxBtnRef = document.querySelector('.lightbox__button');
const lightBoxImageRef = document.querySelector('.lightbox__image');
const sliderNextBtnRef = document.querySelector('.js-next');
const sliderPreviousBtnRef = document.querySelector('.js-previous')

let imageIndex = 1;

function overlayShow(event) {
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
      lightBoxRef.classList.toggle('is-open');
      lightBoxImageRef.src = event.target.dataset.source;
      lightBoxImageRef.alt = event.target.alt;
      imageIndex = event.target.dataset.slider;
  console.log(imageIndex);
    }
}
function overlayHide() {
    lightBoxRef.classList.toggle('is-open');
    lightBoxImageRef.src = '';
    lightBoxImageRef.alt = '';
}

function nextClick(event) {
  if (imageIndex === images.length - 1) {
    return;
  }
  imageIndex++;
  lightBoxImageRef.src = images[imageIndex].original;
}
function previousClick() {
  if (imageIndex < 1) {
    return;
  }
    imageIndex--;
    lightBoxImageRef.src = images[imageIndex].original;
  }
function arrowControls(event) {
     if (event.key === 'ArrowRight') {
        nextClick();
    } else if (event.key === 'ArrowLeft') {
        previousClick();
    }
}
function escapeControls(event) {
    if (event.key === 'Escape') {
        overlayHide();
    }
}
function overlayOnClickHide(event) {
    if (event.target === lightboxContent) {
        overlayHide();
    }
}


overlayRef.addEventListener('click', overlayOnClickHide);
mainListRef.addEventListener('click', overlayShow);
lightboxBtnRef.addEventListener('click', overlayHide);
sliderPreviousBtnRef.addEventListener('click', previousClick);
sliderNextBtnRef.addEventListener('click', nextClick);
document.addEventListener('keydown', arrowControls);
document.addEventListener('keydown', escapeControls);
