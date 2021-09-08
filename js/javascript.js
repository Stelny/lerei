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

  //CAROUSELS
  const homepage__slider = $('.homepage__slider');
  homepage__slider.owlCarousel({
    loop:true,
    nav:false,
    items: 1,
    dots: true
})

$('.homepage__slider .owl-dot').click(function () {
  homepage__slider.trigger('to.owl.carousel', [$(this).index(), 300]);
});

  
});
var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31],
  today = new Date(),
  // default targetDate is christmas
  targetDate = new Date(today.getFullYear(), 11, 25);

setDate(targetDate);
setYears(5) // set the next five years in dropdown

$("#select-month").change(function() {
  var monthIndex = $("#select-month").val();
  setDays(monthIndex);
});

function setDate(date) {
  setDays(date.getMonth());
  $("#select-day").val(date.getDate());
  $("#select-month").val(date.getMonth());
  $("#select-year").val(date.getFullYear());
}

// make sure the number of days correspond with the selected month
function setDays(monthIndex) {
  var optionCount = $('#select-day option').length,
    daysCount = daysInMonth[monthIndex];

  if (optionCount < daysCount) {
    for (var i = optionCount; i < daysCount; i++) {
      $('#select-day')
        .append($("<option></option>")
          .attr("value", i + 1)
          .text(i + 1));
    }
  }
  else {
    for (var i = daysCount; i < optionCount; i++) {
      var optionItem = '#select-day option[value=' + (i+1) + ']';
      $(optionItem).remove();
    }
  }
}

function setYears(val) {
  var year = today.getFullYear();
  for (var i = 0; i < val; i++) {
    $('#select-year')
      .append($("<option></option>")
        .attr("value", year + i)
        .text(year + i));
  }
}