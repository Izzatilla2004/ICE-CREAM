const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 10,  
    loop: true, 
    // Navigation arrows
    navigation: {
      nextEl: '.next-arrow',
      prevEl: '.prew-arrow',
    },
  });