$(document).ready(function () {

    function thisClass(element, defaults = 'active') {
      if ($(element).hasClass(defaults)) {
        $(element).removeClass(defaults);
      } else {
        $(element).addClass(defaults);
      }
    }

    $('.menu-toggle').click(function(e) {
      e.preventDefault()
      const element = ".header-dropdown";
      thisClass(element);
    })

    $('.dropdown-lang-toggle').click(function(e) {
      e.preventDefault();
      const element = '.dropdown-lang';
      thisClass(element);
    })

    $('.header-menu-content-cat-toggle').click(function(e) {
      e.preventDefault();
      const element = '.header-menu-content-cat';
      thisClass(element);
    })

    $('.product-table-heading').click(function(e) {
      e.preventDefault();
      $(this).siblings().toggleClass('active');
    })

    function navsCarousel(element, nav) {
      $(nav+' .prev').click(function(e) {
        e.preventDefault();
        element.trigger('prev.owl.carousel');
      })

      $(nav+' .next').click(function(e) {
        e.preventDefault();
          element.trigger('next.owl.carousel');
      })
    }


    const product_carousel = $('.product__carousel');

    product_carousel.owlCarousel({
      loop:true,
      nav:false,
      items: 1,
      dots: false
    })

    navsCarousel(product_carousel, '.product-big-nav');

    $('.f-t').click(function(e) {
      e.preventDefault();
      $('.catalog-filter-filters').toggleClass('active');
      $('.filter-buttons').toggleClass('active');
    })

    
});