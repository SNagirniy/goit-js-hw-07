import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector('.gallery');
const openModal = handleImageClick;


container.addEventListener('click', openModal)


const insertElementMarkup = createElements(galleryItems);
container.innerHTML = insertElementMarkup;

function createElements(items) {
    return items.map(item =>
     `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('')
};


function handleImageClick(event) {
    event.preventDefault()
    
    if (event.target.nodeName !== 'IMG') {
        return;
    };
    let originalImageURL = event.target.dataset.source;
    let originalImageDescr = event.target.getAttribute("alt");
    const createModal = basicLightbox.create(`
        <img width="1400" height="900" src="${originalImageURL}" alt="${originalImageDescr}">
	`);
    createModal.show()

    window.addEventListener('keydown', (event) => { if(event.code === "Escape") {  createModal.close() }});
};
