// mobile menu 
const bar = document.querySelector('.menu-bar');
const navMenu = document.querySelector('.menu');
bar.addEventListener('click',() => {
    navMenu.classList.toggle('active');
})
// fixed header on scroll 
window.addEventListener('scroll', () => {
   const header = document.querySelector('header');
   if(this.pageYOffset > header.offsetHeight) header.classList.add('fixed');
   else header.classList.remove('fixed');
})
$('.slider').slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  dots:true,
  prevArrow:'<i class="fas fa-chevron-left"></i>',  
  nextArrow:'<i class="fas fa-chevron-right"></i>', 
  responsive: [
    {
        breakpoint: 576,
        settings: {
          arrows: false,
        }
      }
  ] 
});