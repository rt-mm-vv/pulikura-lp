// new Swiper('.example__swiper', {
//   loop: true,
//   freeMode: true,
//   slidesPerView: 'auto',
//   spaceBetween: 16,
//   speed: 8000,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },
// });

// Drag scroll for .difference__figure
const figure = document.querySelector('.difference__figure');
if (figure) {
  let isDown = false;
  let startX;
  let scrollLeft;

  figure.addEventListener('mousedown', (e) => {
    isDown = true;
    figure.style.cursor = 'grabbing';
    startX = e.pageX - figure.offsetLeft;
    scrollLeft = figure.scrollLeft;
  });

  figure.addEventListener('mouseleave', () => {
    isDown = false;
    figure.style.cursor = 'grab';
  });

  figure.addEventListener('mouseup', () => {
    isDown = false;
    figure.style.cursor = 'grab';
  });

  figure.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - figure.offsetLeft;
    const walk = (x - startX) * 1.5;
    figure.scrollLeft = scrollLeft - walk;
  });

  // Wheel to horizontal scroll
  figure.addEventListener('wheel', (e) => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    figure.scrollLeft += e.deltaY;
  }, { passive: false });
}

// FAQ accordion
document.querySelectorAll('.question__article').forEach((article) => {
  article.addEventListener('click', () => {
    article.classList.toggle('is-open');
  });
});
