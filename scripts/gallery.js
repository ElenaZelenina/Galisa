function initGallery() {
    const gallery = {
        images: document.querySelectorAll('div.gallery img'),
        prevImage: document.querySelector('div.gallery i.prev'),
        nextImage: document.querySelector('div.gallery i.next'),
        navContainer: document.querySelector('div.gallery .navigation'),
        currentIndex: 0,
    };

    gallery.galleryLength = gallery.images.length;

    gallery.prevImage.onclick = function () {
        gallery.currentIndex = gallery.currentIndex === 0 ? gallery.galleryLength - 1 : gallery.currentIndex - 1;
        gallery.showCurrent();
    }

    gallery.nextImage.onclick = function () {
        gallery.currentIndex = (gallery.currentIndex === (gallery.galleryLength - 1)) ? 0 : gallery.currentIndex + 1;
        gallery.showCurrent();
    }

    gallery.showCurrent = function () {
        for (let image of gallery.images) {
            image.classList.remove('current');
        }
        gallery.images[gallery.currentIndex].classList.add('current');
    }
    return gallery;
}